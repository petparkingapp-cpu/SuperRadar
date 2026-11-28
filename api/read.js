const {initializeApp,cert,getApps}=require('firebase-admin/app');
const {getAuth}=require('firebase-admin/auth');
const {getFirestore,FieldPath}=require('firebase-admin/firestore');
const {baseline}=require('./logic.cjs');
const fields=['title','price','chain','supermarket','category','city','zone','storeId','storeName','imageUrl','fallbackImg','viralContext','description','createdAt','isRecentUpload'];
function product(d,uid){const x=d.data();return {...Object.fromEntries(fields.filter(k=>Object.hasOwn(x,k)&&['string','number','boolean'].includes(typeof x[k])).map(k=>[k,x[k]])),id:d.id,owned:x.createdBy===uid};}
module.exports=async(req,res)=>{res.setHeader('Cache-Control','private, no-store');try{
if(req.method!=='POST')return res.status(405).json({error:'Método no permitido'});
const key=JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT||'{}');if(key.project_id!=='superradar-99064')return res.status(503).json({error:'Configuración de producción incorrecta'});
const app=getApps()[0]||initializeApp({credential:cert(key)});let user;try{user=await getAuth(app).verifyIdToken((req.headers.authorization||'').replace(/^Bearer /,''),true);}catch{return res.status(401).json({error:'Sesión no válida'});}
const db=getFirestore(app),{name,after}=req.body||{};
if(name==='city_requests'){const snap=await db.collection(name).get(),groups=new Map();for(const d of snap.docs){const x=d.data();if(typeof x.city!=='string')continue;const k=x.city.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().trim().replace(/\s+/g,' ');if(!groups.has(k))groups.set(k,{city:x.city,voters:new Set()});groups.get(k).voters.add(x.requestedBy&&x.requestedBy!=='anon'?x.requestedBy:x.deviceId||d.id);}return res.status(200).json({items:[...groups.values()].map(g=>({city:g.city,count:g.voters.size})),total:snap.size,next:null});}
if(!['custom_products','official_catalog_offers','stock_votes'].includes(name))return res.status(400).json({error:'Colección inválida'});
if(after!=null&&(typeof after!=='string'||after.length>1500||after.includes('/')))return res.status(400).json({error:'Cursor inválido'});
const size=name==='stock_votes'?100:20;let q=db.collection(name).orderBy(FieldPath.documentId()).limit(size);if(after)q=q.startAfter(after);const snap=await q.get();const items=[];let bytes=0;for(const d of snap.docs){const item=name==='stock_votes'?{id:d.id,record:baseline(d.data(),Date.now())}:product(d,user.uid);const n=Buffer.byteLength(JSON.stringify(item));if(items.length&&bytes+n>3000000)break;items.push(item);bytes+=n;}return res.status(200).json({items,next:items.length&&(items.length<snap.size||snap.size===size)?snap.docs[items.length-1].id:null});
}catch(e){console.error('read failed',e.code||e.name);return res.status(500).json({error:'No se pudieron cargar los datos'});}};
