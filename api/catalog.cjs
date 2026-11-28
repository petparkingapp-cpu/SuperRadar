const ACTIVE_CITIES = [
            "Málaga",
            "Madrid",
            "Almería",
            "Barcelona",
            "Valencia",
            "Sevilla",
            "Bilbao",
            "Alicante",
            "Asturias"
        ];

        const CHAIN_OFFERS_CATALOG = {
            'Mercadona': [
                {
                    id: 'base_merca_0',
                    title: 'Colorete Líquido Blush Luminoso Deliplus Tono 02 Coral',
                    price: 5.00,
                    category: 'Cosmética & Cuidado',
                    imageUrl: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500&auto=format&fit=crop&q=80',
                    fallbackImg: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500&auto=format&fit=crop&q=80',
                    viralContext: 'Viral en TikTok · Surtido habitual en perfumería',
                    description: 'Colorete fluido con aplicador en esponja. Muy buscado estas semanas; stock variable.'
                },
                {
                    id: 'base_merca_1',
                    title: 'Galletas Chocolate Blanco y Macadamia Hacendado',
                    price: 1.75,
                    category: 'Alimentación / Snacks',
                    imageUrl: 'https://images.openfoodfacts.org/images/products/848/000/014/4478/front_es.28.400.jpg',
                    fallbackImg: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=500&auto=format&fit=crop&q=80',
                    viralContext: 'Novedad viral · Pasillo de galletas',
                    description: 'Galletas estilo americano recién incorporadas al surtido.'
                },
                {
                    id: 'base_merca_2',
                    title: 'Tequeños de Queso Hacendado (Congelados)',
                    price: 4.80,
                    category: 'Alimentación / Snacks',
                    imageUrl: 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?w=500&auto=format&fit=crop&q=80',
                    fallbackImg: 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?w=500&auto=format&fit=crop&q=80',
                    viralContext: 'Muy buscado · Zona congelados',
                    description: 'Deditos crujientes rellenos de queso para freidora de aire o sartén.'
                },
                {
                    id: 'base_merca_3',
                    title: 'Natillas / Pudding +Proteínas Caramelo Hacendado',
                    price: 1.80,
                    category: 'Fit & Proteínas',
                    imageUrl: 'https://images.openfoodfacts.org/images/products/848/000/010/8258/front_es.19.400.jpg',
                    fallbackImg: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=500&auto=format&fit=crop&q=80',
                    viralContext: 'Top ventas Fit · Mural refrigerados',
                    description: '12g de proteína por vasito sin azúcares añadidos.'
                }
            ],
            'Lidl': [
                {
                    id: 'base_lidl_0',
                    title: 'Crema para Untar de Pistacho Italiamo Lidl (190g)',
                    price: 3.49,
                    category: 'Alimentación / Snacks',
                    imageUrl: 'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?w=500&auto=format&fit=crop&q=80',
                    fallbackImg: 'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?w=500&auto=format&fit=crop&q=80',
                    viralContext: 'Edición viral · Lotes puntuales',
                    description: 'La famosa crema dulce de pistacho de Lidl. Vuela rapidísimo.'
                },
                {
                    id: 'base_lidl_1',
                    title: 'High Protein Mousse Chocolate Milbona (20g Proteína)',
                    price: 1.19,
                    category: 'Fit & Proteínas',
                    imageUrl: 'https://images.openfoodfacts.org/images/products/405/648/926/5559/front_en.69.400.jpg',
                    fallbackImg: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=500&auto=format&fit=crop&q=80',
                    viralContext: 'Muy buscado en frío',
                    description: '20g de proteína por tarrina y bajo en calorías.'
                },
                {
                    id: 'base_lidl_2',
                    title: 'Freidora de Aire Digital SilverCrest 4.2L',
                    price: 39.99,
                    category: 'Bazar / Semanales',
                    imageUrl: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=500&auto=format&fit=crop&q=80',
                    fallbackImg: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=500&auto=format&fit=crop&q=80',
                    viralContext: 'Bazar SilverCrest · Unidades limitadas',
                    description: 'Lanzamiento de bazar con pantalla táctil.'
                }
            ],
            'Aldi': [
                {
                    id: 'base_aldi_0',
                    title: 'Mochis Helados de Mango y Coco Special Aldi',
                    price: 3.29,
                    category: 'Alimentación / Snacks',
                    imageUrl: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=500&auto=format&fit=crop&q=80',
                    fallbackImg: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=500&auto=format&fit=crop&q=80',
                    viralContext: 'Viral en redes · Sección congelados',
                    description: 'Caja de 6 mochis helados. Muy buscados el fin de semana.'
                },
                {
                    id: 'base_aldi_1',
                    title: 'Pizza Fresca Masa Madre Trufa Special Aldi',
                    price: 2.99,
                    category: 'Alimentación / Snacks',
                    imageUrl: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&auto=format&fit=crop&q=80',
                    fallbackImg: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&auto=format&fit=crop&q=80',
                    viralContext: 'Gama gourmet Special · Mural de frío',
                    description: 'Base de masa madre con crema de trufa y boletus.'
                }
            ],
            'Carrefour': [
                {
                    id: 'base_car_0',
                    title: 'Tarrina Açaí Orgánico Congelado Carrefour Bio (400g)',
                    price: 3.99,
                    category: 'Fit & Proteínas',
                    imageUrl: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?w=500&auto=format&fit=crop&q=80',
                    fallbackImg: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?w=500&auto=format&fit=crop&q=80',
                    viralContext: 'Muy buscado para Açaí Bowls',
                    description: 'Pulpa de açaí sin azúcares añadidos en congelados.'
                },
                {
                    id: 'base_car_1',
                    title: 'Crema Lotus Biscoff Crunchy (400g)',
                    price: 3.85,
                    category: 'Alimentación / Snacks',
                    imageUrl: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=500&auto=format&fit=crop&q=80',
                    fallbackImg: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=500&auto=format&fit=crop&q=80',
                    viralContext: 'Repostería viral',
                    description: 'Crema de galleta caramelizada con trocitos crujientes.'
                }
            ],
            'DIA': [
                {
                    id: 'base_dia_0',
                    title: 'Helado Estilo Americano Cookie Dough Tentaciones DIA',
                    price: 2.99,
                    category: 'Alimentación / Snacks',
                    imageUrl: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=500&auto=format&fit=crop&q=80',
                    fallbackImg: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=500&auto=format&fit=crop&q=80',
                    viralContext: 'Viral gama Tentaciones · Congelados',
                    description: 'Tarrinas con trozos de galleta.'
                }
            ]
        };

        let CITIES_AND_STORES = {};

        function initializeActiveCitiesAndStores() {
            ACTIVE_CITIES.forEach(city => {
                let storesList = [
                    { id: 'all_' + city, chain: 'ALL', name: `📍 Todas las tiendas de ${city}` }
                ];

                if (city === 'Málaga') {
                    storesList.push(
                        // Mercadona - Málaga Capital
                        { id: 'merca_mlg_velazquez', chain: 'Mercadona', name: 'Mercadona - Av. de Velázquez, 43 (El Torcal)', zone: 'Málaga Capital' },
                        { id: 'merca_mlg_velazquez_91', chain: 'Mercadona', name: 'Mercadona - Av. de Velázquez, 95 (Puerta Blanca)', zone: 'Málaga Capital' },
                        { id: 'merca_mlg_la_luz', chain: 'Mercadona', name: 'Mercadona - Ctra. Carril del Conde, 8 (La Luz)', zone: 'Málaga Capital' },
                        { id: 'merca_mlg_imperio', chain: 'Mercadona', name: 'Mercadona - C. Imperio Argentina, 1 (Parque Litoral)', zone: 'Málaga Capital' },
                        { id: 'merca_mlg_pasteur', chain: 'Mercadona', name: 'Mercadona - Bulevar Louis Pasteur, 17 (Teatinos)', zone: 'Málaga Capital' },
                        { id: 'merca_mlg_huelin', chain: 'Mercadona', name: 'Mercadona - C. Eduardo Marquina, 10 (Huelin / Estación)', zone: 'Málaga Capital' },
                        { id: 'merca_mlg_distrito_centro', chain: 'Mercadona', name: 'Mercadona - C. Martínez Maldonado, 6 (Distrito Centro)', zone: 'Málaga Capital' },
                        { id: 'merca_mlg_albeniz', chain: 'Mercadona', name: 'Mercadona - C. Albéniz, 35 (Distrito Centro)', zone: 'Málaga Capital' },
                        { id: 'merca_mlg_vialia', chain: 'Mercadona', name: 'Mercadona - C. Explanada de la Estación s/n (Vialia)', zone: 'Málaga Capital' },
                        { id: 'merca_mlg_palma_palmilla', chain: 'Mercadona', name: 'Mercadona - Av. del Dr. Marañón, 8 (Palma-Palmilla)', zone: 'Málaga Capital' },
                        { id: 'merca_mlg_cruz_humilladero', chain: 'Mercadona', name: 'Mercadona - Av. Santa Rosa de Lima, 20 (Cruz de Humilladero)', zone: 'Málaga Capital' },
                        { id: 'merca_mlg_laluz', chain: 'Mercadona', name: 'Mercadona - C. Gaucín, 15 (La Luz)', zone: 'Málaga Capital' },
                        { id: 'merca_mlg_palo', chain: 'Mercadona', name: 'Mercadona - Av. de la Estación, 3 (El Palo)', zone: 'Málaga Capital' },
                        { id: 'merca_mlg_palo_elcano', chain: 'Mercadona', name: 'Mercadona - Av. Juan Sebastián Elcano, 147 (Málaga-Este / El Palo)', zone: 'Málaga Capital' },
                        { id: 'merca_mlg_limonar', chain: 'Mercadona', name: 'Mercadona - Av. del Mayorazgo, 20 (El Limonar)', zone: 'Málaga Capital' },
                        { id: 'merca_mlg_ciudadjardin', chain: 'Mercadona', name: 'Mercadona - Av. Jacinto Benavente, 21 (Ciudad Jardín)', zone: 'Málaga Capital' },
                        { id: 'merca_mlg_casabermeja', chain: 'Mercadona', name: 'Mercadona - Cmo. de Casabermeja, 64 (Cdad. Jardín)', zone: 'Málaga Capital' },
                        { id: 'merca_mlg_thuillier', chain: 'Mercadona', name: 'Mercadona - C. Emilio Thuillier, 2 (Cdad. Jardín)', zone: 'Málaga Capital' },
                        { id: 'merca_mlg_clarines', chain: 'Mercadona', name: 'Mercadona - Camino de Suárez, 22 (Miraflores)', zone: 'Málaga Capital' },
                        { id: 'merca_mlg_plazamayor', chain: 'Mercadona', name: 'Mercadona - Calle Alfonso Ponce de León, s/n (C.C. Plaza Mayor)', zone: 'Málaga Capital' },
                        { id: 'merca_mlg_martinez_maldonado', chain: 'Mercadona', name: 'Mercadona - C. Martínez Maldonado, 62 (Distrito Centro)', zone: 'Málaga Capital' },
                        { id: 'merca_mlg_barcelona', chain: 'Mercadona', name: 'Mercadona - Av. de Barcelona, 18 (Bailén)', zone: 'Málaga Capital' },
                        { id: 'merca_mlg_san_rafael', chain: 'Mercadona', name: 'Mercadona - Camino de San Rafael, 55 (Cruz de Humilladero)', zone: 'Málaga Capital' },
                        { id: 'merca_mlg_diaz_zafra', chain: 'Mercadona', name: 'Mercadona - C. Alcalde Díaz Zafra, 32 (Tiro de Pichón)', zone: 'Málaga Capital' },
                        { id: 'merca_mlg_ortega_gasset', chain: 'Mercadona', name: 'Mercadona - Av. José Ortega y Gasset, s/n (Cruz de Humilladero)', zone: 'Málaga Capital' },
                        { id: 'merca_mlg_lope_rueda', chain: 'Mercadona', name: 'Mercadona - Av. Arquitecto Luis Bono, 17 (Puerto de la Torre)', zone: 'Málaga Capital' },
                        { id: 'merca_mlg_navarro_ledesma', chain: 'Mercadona', name: 'Mercadona - C. Navarro Ledesma, 175 (El Atabal)', zone: 'Málaga Capital' },
                        { id: 'merca_mlg_churriana', chain: 'Mercadona', name: 'Mercadona - Calle Dr. Ramos Acosta, 104 (Churriana)', zone: 'Málaga Capital' },
                        { id: 'merc_mal_nostrum', chain: 'Mercadona', name: 'Mercadona - C. Lugo (P.C. Málaga Nostrum)', zone: 'Málaga Capital' },

                        // Mercadona en los municipios restantes
                        { id: 'merca_mlg_cartama', chain: 'Mercadona', name: 'Mercadona - Ctra. Cártama-Alhaurín, km 1 (Estación de Cártama)', zone: 'Cártama' },
                        { id: 'merca_mlg_rincon', chain: 'Mercadona', name: 'Mercadona - C. Gran Sol, s/n (Añoreta / Rincón de la Victoria)', zone: 'Rincón de la Victoria' },
                        { id: 'merca_mlg_rincon_plaza', chain: 'Mercadona', name: 'Mercadona - C. del Comercio, 1 (Rincón de la Victoria)', zone: 'Rincón de la Victoria' },
                        { id: 'merca_mlg_velez', chain: 'Mercadona', name: 'Mercadona - Av. del Rey Juan Carlos I, s/n (Vélez-Málaga)', zone: 'Vélez-Málaga / Torre del Mar' },
                        { id: 'merca_mlg_torredelmar', chain: 'Mercadona', name: 'Mercadona - C. del Río, 56 (Torre del Mar)', zone: 'Vélez-Málaga / Torre del Mar' },
                        { id: 'merca_mlg_torrox', chain: 'Mercadona', name: 'Mercadona - Ctra. de Almería, km 285 (Torrox Costa)', zone: 'Algarrobo / Torrox' },

                        // Lidl en los municipios restantes
                        { id: 'lidl_mlg_cartama', chain: 'Lidl', name: 'Lidl - C. Marconi, 1 (Estación de Cártama)', zone: 'Cártama' },
                        { id: 'lidl_mlg_rincon', chain: 'Lidl', name: 'Lidl - Av. de la Candelaria, s/n (Rincón de la Victoria)', zone: 'Rincón de la Victoria' },
                        { id: 'lidl_mlg_velez', chain: 'Lidl', name: 'Lidl - Av. Juan Carlos I, s/n (Vélez-Málaga)', zone: 'Vélez-Málaga / Torre del Mar' },
                        { id: 'lidl_mlg_torrox', chain: 'Lidl', name: 'Lidl - Ctra. de Almería, 38 (Torrox Costa)', zone: 'Algarrobo / Torrox' },

                        // Aldi y Carrefour en los municipios restantes
                        { id: 'aldi_mlg_velez', chain: 'Aldi', name: 'Aldi - Av. del Rey Juan Carlos I, 28 (Vélez-Málaga)', zone: 'Vélez-Málaga / Torre del Mar' },
                        { id: 'aldi_mlg_torrox', chain: 'Aldi', name: 'Aldi - Ctra. de Almería, km 286 (Torrox Costa)', zone: 'Algarrobo / Torrox' },
                        { id: 'car_mlg_rincon', chain: 'Carrefour', name: 'Carrefour - Ctra. de Benagalbón, s/n (C.C. Rincón de la Victoria)', zone: 'Rincón de la Victoria' },
                        { id: 'car_mlg_ingenio', chain: 'Carrefour', name: 'Carrefour - C.C. El Ingenio (Torre del Mar / Vélez-Málaga)', zone: 'Vélez-Málaga / Torre del Mar' },

                        // ==========================================
                        // NUEVAS PETICIONES: FUENGIROLA Y COTOMAR
                        // ==========================================
                        // --- FUENGIROLA ---
                        { id: 'merca_mlg_fuengirola_diaz', chain: 'Mercadona', name: 'Mercadona - Av. Clemente Díaz Ruiz, s/n (Fuengirola)', zone: 'Fuengirola' },
                        { id: 'merca_mlg_fuengirola_boliches', chain: 'Mercadona', name: 'Mercadona - C. Feria San Fermín (Los Boliches)', zone: 'Fuengirola' },
                        { id: 'lidl_mlg_fuengirola', chain: 'Lidl', name: 'Lidl - Ctra. de Mijas, km 1.5 (Fuengirola)', zone: 'Fuengirola' },
                        { id: 'car_mlg_fuengirola_miramar', chain: 'Carrefour', name: 'Carrefour - Av. de la Encarnación, CC Miramar (Fuengirola)', zone: 'Fuengirola' },
                        { id: 'aldi_mlg_fuengirola', chain: 'Aldi', name: 'Aldi - C. Mallorca, 1 (Fuengirola)', zone: 'Fuengirola' },
                        { id: 'dia_mlg_fuengirola_mijas', chain: 'DIA', name: 'DIA - Av. de Mijas, 30 (Fuengirola)', zone: 'Fuengirola' },

                        // --- RINCÓN DE LA VICTORIA (COTOMAR) ---
                        { id: 'merca_mlg_rincon_cotomar', chain: 'Mercadona', name: 'Mercadona - C. Frigiliana / Av. Cotomar (Cotomar)', zone: 'Rincón de la Victoria' },

                        // Mercadona - Municipios
                        { id: 'merca_mlg_torremolinos_playamar', chain: 'Mercadona', name: 'Mercadona - Av. de Playamar, 13 (Torremolinos)', zone: 'Torremolinos' },
                        { id: 'merca_mlg_torremolinos_centro', chain: 'Mercadona', name: 'Mercadona - Pl. Costa del Sol, s/n, Centro Entreplazas (Torremolinos)', zone: 'Torremolinos' },
                        { id: 'merca_mlg_alhaurin_de_la_torre', chain: 'Mercadona', name: 'Mercadona - Calle de los Registradores, s/n (Alhaurín de la Torre)', zone: 'Alhaurín de la Torre' },
                        { id: 'merca_mlg_alhaurin_cortijos', chain: 'Mercadona', name: 'Mercadona - Av. de los Cortijos, S/N (Alhaurín de la Torre)', zone: 'Alhaurín de la Torre' },

                        // Carrefour Málaga
                        { id: 'car_mlg_patios', chain: 'Carrefour', name: 'Carrefour - Autovía del Mediterráneo, Km. 241 (C.C. Los Patios)', zone: 'Málaga Capital' },
                        { id: 'car_mlg_rosaleda', chain: 'Carrefour', name: 'Carrefour - Av. Simón Bolívar, s/n (C.C. La Rosaleda)', zone: 'Málaga Capital' },
                        { id: 'car_mlg_alameda', chain: 'Carrefour', name: 'Carrefour - Av. de Andalucía, s/n (Cruz de Humilladero)', zone: 'Málaga Capital' },
                        { id: 'car_mlg_torremolinos', chain: 'Carrefour', name: 'Carrefour - Av. Circunvalación, s/n, C.C. Costasol (Torremolinos)', zone: 'Torremolinos' },

                        // Lidl Málaga
                        { id: 'lidl_mlg_carretera_cadiz', chain: 'Lidl', name: 'Lidl - C. Villanueva de Algaidas, 6 (Carretera de Cádiz)', zone: 'Málaga Capital' },
                        { id: 'lidl_mlg_velazquez', chain: 'Lidl', name: 'Lidl - Avenida de Velázquez, 60', zone: 'Málaga Capital' },
                        { id: 'lidl_mlg_huelin', chain: 'Lidl', name: 'Lidl - C/ Héroes de Sostoa, 126 (Huelin)', zone: 'Málaga Capital' },
                        { id: 'lidl_mlg_ciudad_jardin', chain: 'Lidl', name: 'Lidl - Av. de los Pascueros, 3 (Cdad. Jardín)', zone: 'Málaga Capital' },
                        { id: 'lidl_mlg_teatinos', chain: 'Lidl', name: 'Lidl - Calle Navarro Ledesma, s/n (Teatinos)', zone: 'Málaga Capital' },
                        { id: 'lidl_mlg_ortega_gasset', chain: 'Lidl', name: 'Lidl - Av. José Ortega y Gasset, 224 (El Viso)', zone: 'Málaga Capital' },
                        { id: 'lidl_mlg_cruz_humilladero', chain: 'Lidl', name: 'Lidl - Camino San Rafael, 63', zone: 'Málaga Capital' },
                        { id: 'lidl_mlg_churriana', chain: 'Lidl', name: 'Lidl - Ctra. de Coín, 47 (Churriana)', zone: 'Málaga Capital' },
                        { id: 'lidl_mlg_torremolinos', chain: 'Lidl', name: 'Lidl - C. de la Cruz, 69 (Torremolinos)', zone: 'Torremolinos' },
                        { id: 'lidl_mlg_torremolinos_alessandri', chain: 'Lidl', name: 'Lidl - Av. Carlota Alessandri, 288 (Torremolinos)', zone: 'Torremolinos' },
                        { id: 'lidl_mlg_alhaurin_torre', chain: 'Lidl', name: 'Lidl - Av. Finca Taralpe, s/n (Alhaurín de la Torre)', zone: 'Alhaurín de la Torre' },

                        // Aldi Málaga
                        { id: 'aldi_mlg_pacifico', chain: 'Aldi', name: 'Aldi - Av. de Molière, 36 (Pacífico)', zone: 'Málaga Capital' },
                        { id: 'aldi_mlg_teatinos', chain: 'Aldi', name: 'Aldi - C. Giordano Bruno, 6 (Teatinos)', zone: 'Málaga Capital' },
                        { id: 'aldi_mlg_ortega_gasset', chain: 'Aldi', name: 'Aldi - Av. de José Ortega y Gasset, 291', zone: 'Málaga Capital' },
                        { id: 'aldi_mlg_cruz_humilladero', chain: 'Aldi', name: 'Aldi - Pl. Cruz del Humilladero, 1', zone: 'Málaga Capital' },
                        { id: 'aldi_mlg_distrito_centro', chain: 'Aldi', name: 'Aldi - C. Montes de Oca, 15', zone: 'Málaga Capital' },
                        { id: 'aldi_mlg_sanjulian', chain: 'Aldi', name: 'Aldi - C. Escritor Julio Balbín, s/n (San Julián)', zone: 'Málaga Capital' },
                        { id: 'aldi_mlg_churriana', chain: 'Aldi', name: 'Aldi - C. Emilio Hurtado, 19 (Churriana)', zone: 'Málaga Capital' },
                        { id: 'aldi_mlg_puerto_de_la_torre', chain: 'Aldi', name: 'Aldi - Calle Lope de Rueda, 161 (Puerto de la Torre)', zone: 'Málaga Capital' },
                        { id: 'aldi_mlg_alhaurin_de_la_torre', chain: 'Aldi', name: 'Aldi - Av. Sta. Clara, s/n (Alhaurín de la Torre)', zone: 'Alhaurín de la Torre' },
                        { id: 'aldi_mlg_torremolinos', chain: 'Aldi', name: 'Aldi - C. de la Cruz, 73 (Torremolinos)', zone: 'Torremolinos' },
                        { id: 'aldi_mlg_torremolinos_alessandri', chain: 'Aldi', name: 'Aldi - Av. Carlota Alessandri, 200 (Torremolinos)', zone: 'Torremolinos' },
                        { id: 'aldi_mlg_fraga_iribarne', chain: 'Aldi', name: 'Aldi - Av. de Manuel Fraga Iribarne, 12 (Torremolinos)', zone: 'Torremolinos' },
                        { id: 'aldi_mlg_cartama', chain: 'Aldi', name: 'Aldi - Av. de los Juegos Olímpicos, 1 (Cártama)', zone: 'Cártama' },

                        // DIA Málaga
                        { id: 'dia_mlg_carreteria', chain: 'DIA', name: 'DIA - Calle Carretería, 105', zone: 'Málaga Capital' },
                        { id: 'dia_mlg_moliere', chain: 'DIA', name: 'DIA - Av. de Molière s/n', zone: 'Málaga Capital' },
                        { id: 'dia_mlg_velazquez', chain: 'DIA', name: 'DIA - Av. de Velázquez, 9', zone: 'Málaga Capital' },
                        { id: 'dia_mlg_ninogloria', chain: 'DIA', name: 'DIA - C. Niño de Gloria, 10 (El Torcal)', zone: 'Málaga Capital' },
                        { id: 'dia_mlg_altolaguirre', chain: 'DIA', name: 'DIA - C. Manuel Altolaguirre, 34 (Girón)', zone: 'Málaga Capital' },
                        { id: 'dia_mlg_alozaina', chain: 'DIA', name: 'DIA - C. de Alozaina, 6 (Santa Cristina)', zone: 'Málaga Capital' },
                        { id: 'dia_mlg_reboul', chain: 'DIA', name: 'DIA - C. Reboul s/n (La Unión)', zone: 'Málaga Capital' },
                        { id: 'dia_mlg_ayala', chain: 'DIA', name: 'DIA - C. Ayala, 82 (Parque Ayala)', zone: 'Málaga Capital' },
                        { id: 'dia_mlg_cuarteles', chain: 'DIA', name: 'DIA - C. Cuarteles, 35 (El Perchel)', zone: 'Málaga Capital' },
                        { id: 'dia_mlg_juanaustria', chain: 'DIA', name: 'DIA - C. Juan de Austria, 32 (La Trinidad)', zone: 'Málaga Capital' },
                        { id: 'dia_mlg_salamanca', chain: 'DIA', name: 'DIA - C. Salamanca, 7 (Distrito Centro)', zone: 'Málaga Capital' },
                        { id: 'dia_mlg_capuchinos', chain: 'DIA', name: 'DIA - Alameda de Capuchinos, 14', zone: 'Málaga Capital' },
                        { id: 'dia_mlg_cristoepidemia', chain: 'DIA', name: 'DIA - C. Cristo de la Epidemia, 47', zone: 'Málaga Capital' },
                        { id: 'dia_mlg_macabeos', chain: 'DIA', name: 'DIA - C. Macabeos, 5', zone: 'Málaga Capital' },
                        { id: 'dia_mlg_victoria', chain: 'DIA', name: 'DIA - C. Victoria, 64', zone: 'Málaga Capital' },
                        { id: 'dia_mlg_almendrales', chain: 'DIA', name: 'DIA - Camino de los Almendrales s/n', zone: 'Málaga Capital' },
                        { id: 'dia_mlg_oloroso', chain: 'DIA', name: 'DIA - Av. Málaga Oloroso, 30 (Ciudad Jardín)', zone: 'Málaga Capital' },
                        { id: 'dia_mlg_joaquinquiles', chain: 'DIA', name: 'DIA - C. Alcalde Joaquín Quiles, 19', zone: 'Málaga Capital' },
                        { id: 'dia_mlg_miguelmoya', chain: 'DIA', name: 'DIA - C. Miguel Moya, 14 (El Palo)', zone: 'Málaga Capital' },
                        { id: 'dia_mlg_manuelalcantara', chain: 'DIA', name: 'DIA - C. Poeta Manuel Alcántara, 1 (Rincón de la Victoria)', zone: 'Rincón de la Victoria' },
                        { id: 'dia_mlg_carriltoros', chain: 'DIA', name: 'DIA - Carril de los Toros s/n (Rincón de la Victoria)', zone: 'Rincón de la Victoria' },
                        { id: 'dia_mlg_calledelrio', chain: 'DIA', name: 'DIA - C. del Río, 32 (Torre del Mar)', zone: 'Vélez-Málaga / Torre del Mar' },
                        { id: 'dia_mlg_drfleming', chain: 'DIA', name: 'DIA - C. Dr. Fleming, 77 (Torre del Mar)', zone: 'Vélez-Málaga / Torre del Mar' },
                        { id: 'dia_mlg_reyjuancarlos', chain: 'DIA', name: 'DIA - Av. del Rey Juan Carlos I s/n (Vélez-Málaga)', zone: 'Vélez-Málaga / Torre del Mar' },
                        { id: 'dia_mlg_avandalucia', chain: 'DIA', name: 'DIA - Av. de Andalucía, 35 (Algarrobo)', zone: 'Algarrobo / Torrox' },
                        { id: 'dia_mlg_castillobajo', chain: 'DIA', name: 'DIA - C. Castillo Bajo, 50 (Torrox)', zone: 'Algarrobo / Torrox' },
                        { id: 'dia_mlg_lacharca', chain: 'DIA', name: 'DIA - Urb. La Charca s/n (Torrox)', zone: 'Algarrobo / Torrox' }
                    );
                } else if (city === 'Bilbao') {
                    storesList.push(
                        // Mercadona Bilbao
                        { id: 'merca_bio_indautxu_rodriguez_arias', chain: 'Mercadona', name: 'Mercadona - C. Rodríguez Arias, 66 (Indautxu)' },
                        { id: 'merca_bio_miribilla_santiago', chain: 'Mercadona', name: 'Mercadona - C. Santiago de Compostela, 12 (Miribilla)' },
                        { id: 'merca_bio_bolueta_telleria', chain: 'Mercadona', name: 'Mercadona - C. Tellería, 9 (Bolueta)' },
                        { id: 'merca_bio_abando_recalde', chain: 'Mercadona', name: 'Mercadona - Alameda de Recalde, 52 (Abando)' },

                        // Lidl Bilbao
                        { id: 'lidl_bio_errekalde_gordoniz', chain: 'Lidl', name: 'Lidl - C. Gordóniz, 44 (Errekalde)' },
                        { id: 'lidl_bio_deusto_lehendakari', chain: 'Lidl', name: 'Lidl - Av. Lehendakari Aguirre, 179 (Deusto)' },
                        { id: 'lidl_bio_santutxu_zabalbide', chain: 'Lidl', name: 'Lidl - C. Zabalbide, 41 (Santutxu)' },

                        // Carrefour Bilbao
                        { id: 'car_bio_abando_gral_concha', chain: 'Carrefour', name: 'Carrefour Market - C. del General Concha, 26 (Abando)' },
                        { id: 'car_bio_indautxu_rodriguez_arias', chain: 'Carrefour', name: 'Carrefour Market - C. Rodríguez Arias, 20 (Indautxu)' },

                        // Aldi Bilbao
                        { id: 'aldi_bio_basurto_luis_brinas', chain: 'Aldi', name: 'Aldi - C. Luis Briñas, 17 (Basurto)' },
                        { id: 'aldi_bio_deusto_madariaga', chain: 'Aldi', name: 'Aldi - Av. de Madariaga, 21 (Deusto)' },

                        // DIA Bilbao
                        { id: 'dia_bio_abando_hurtado_amezaga', chain: 'DIA', name: 'DIA - C. Hurtado de Amézaga, 14 (Abando)' },
                        { id: 'dia_bio_indautxu_iparraguirre', chain: 'DIA', name: 'DIA - C. Iparraguirre, 54 (Indautxu)' },
                        { id: 'dia_bio_autonomia_basurto', chain: 'DIA', name: 'DIA - C. Autonomía, 26 (Basurto)' },
                        { id: 'dia_bio_santutxu_calle', chain: 'DIA', name: 'DIA - C. Santutxu, 24 (Santutxu)' }
                    );
                } else if (city === 'Madrid') {
                    storesList.push(
                        // ==========================================
                        // 1. TUS TIENDAS ORIGINALES (MADRID CAPITAL Y DISTRITOS)
                        // ==========================================
                        // Mercadona Capital
                        { id: 'merca_mad_atocha', chain: 'Mercadona', name: 'Mercadona - Rda. de Atocha, 26', zone: 'Madrid - Centro' },
                        { id: 'merca_mad_salamanca_ayala', chain: 'Mercadona', name: 'Mercadona - Cl. de Ayala, 89 (Barrio de Salamanca)', zone: 'Madrid - Salamanca' },
                        { id: 'merca_mad_centro_fuencarral', chain: 'Mercadona', name: 'Mercadona - Cl. de Fuencarral, 77 (Centro)', zone: 'Madrid - Centro' },
                        { id: 'merca_mad_fuencarral_sinesio', chain: 'Mercadona', name: 'Mercadona - C. de Sinesio Delgado, 44 (Fuencarral-El Pardo)', zone: 'Madrid - Fuencarral' },
                        { id: 'merca_mad_moncloa_vascos', chain: 'Mercadona', name: 'Mercadona - Cl. de los Vascos, 29 (Moncloa-Aravaca)', zone: 'Madrid - Moncloa' },
                        { id: 'merca_mad_salamanca_serrano', chain: 'Mercadona', name: 'Mercadona - C. de Serrano, 61 (Barrio de Salamanca)', zone: 'Madrid - Salamanca' },
                        { id: 'merca_mad_chamberi_bravo_murillo_5', chain: 'Mercadona', name: 'Mercadona - C. de Bravo Murillo, 5 (Chamberí)', zone: 'Madrid - Chamberí' },
                        { id: 'merca_mad_chamberi_joaquin_maria', chain: 'Mercadona', name: 'Mercadona - C. de Joaquín María López, 7 (Chamberí)', zone: 'Madrid - Chamberí' },
                        { id: 'merca_mad_moncloa_florida', chain: 'Mercadona', name: 'Mercadona - P.º de la Florida, 2 (Moncloa-Aravaca)', zone: 'Madrid - Moncloa' },
                        { id: 'merca_mad_arganzuela_arbancon', chain: 'Mercadona', name: 'Mercadona - C. Villa de Arbancón, 4 (Arganzuela)', zone: 'Madrid - Arganzuela' },
                        { id: 'merca_mad_chamartin_vasconcelos', chain: 'Mercadona', name: 'Mercadona - C. de José Vasconcelos, 4 (Chamartín)', zone: 'Madrid - Chamartín' },
                        { id: 'merca_mad_san_blas_butron', chain: 'Mercadona', name: 'Mercadona - C. Butrón, 31 (San Blas-Canillejas)', zone: 'Madrid - San Blas' },
                        { id: 'merca_mad_retiro_adelfas', chain: 'Mercadona', name: 'Mercadona - C. de las Adelfas, 38 (Retiro)', zone: 'Madrid - Retiro' },
                        { id: 'merca_mad_arganzuela_yeserias', chain: 'Mercadona', name: 'Mercadona - P.º de las Yeserías, 3 (Arganzuela)', zone: 'Madrid - Arganzuela' },
                        { id: 'merca_mad_retiro_reyes_magos', chain: 'Mercadona', name: 'Mercadona - Pl. de los Reyes Magos, s/n (Retiro)', zone: 'Madrid - Retiro' },
                        { id: 'merca_mad_san_blas_camarillo', chain: 'Mercadona', name: 'Mercadona - C. de Julián Camarillo, 15 (San Blas-Canillejas)', zone: 'Madrid - San Blas' },
                        { id: 'merca_mad_chamartin_guatemala', chain: 'Mercadona', name: 'Mercadona - C. de Guatemala, 13 (Chamartín)', zone: 'Madrid - Chamartín' },
                        { id: 'merca_mad_tetuan_lope_haro', chain: 'Mercadona', name: 'Mercadona - C. de Lope de Haro, 14 (Tetuán)', zone: 'Madrid - Tetuán' },
                        { id: 'merca_mad_tetuan_lerida', chain: 'Mercadona', name: 'Mercadona - C. de Lérida, 56 (Tetuán)', zone: 'Madrid - Tetuán' },
                        { id: 'merca_mad_latina_calle', chain: 'Mercadona', name: 'Mercadona - C. de Latina, 18 (Latina)', zone: 'Madrid - Latina' },
                        { id: 'merca_mad_usera_antonio_lopez', chain: 'Mercadona', name: 'Mercadona - Calle de Antonio López, 117 (Usera)', zone: 'Madrid - Usera' },
                        { id: 'merca_mad_usera_andalucia', chain: 'Mercadona', name: 'Mercadona - Av. de Andalucía, 20 (Usera)', zone: 'Madrid - Usera' },
                        { id: 'merca_mad_arganzuela_melancolicos', chain: 'Mercadona', name: 'Mercadona - P.º de los Melancólicos, 30 (Arganzuela)', zone: 'Madrid - Arganzuela' },
                        { id: 'merca_mad_vallecas_martinez_riva', chain: 'Mercadona', name: 'Mercadona - C. de Martínez de la Riva, 4 (Puente de Vallecas)', zone: 'Madrid - Vallecas' },
                        { id: 'merca_mad_vallecas_democracia', chain: 'Mercadona', name: 'Mercadona - Av. de la Democracia, 3 (Puente de Vallecas)', zone: 'Madrid - Vallecas' },
                        { id: 'merca_mad_chamberi_martinez_campos', chain: 'Mercadona', name: 'Mercadona - P.º del Gral. Martínez Campos, 39 (Chamberí)', zone: 'Madrid - Chamberí' },
                        { id: 'merca_mad_arganzuela_sta_maria_cabeza', chain: 'Mercadona', name: 'Mercadona - P.º de Sta. María de la Cabeza, 41 (Arganzuela)', zone: 'Madrid - Arganzuela' },
                        { id: 'merca_mad_arganzuela_norena', chain: 'Mercadona', name: 'Mercadona - C. del Teniente Cnel. Noreña, 69 (Arganzuela)', zone: 'Madrid - Arganzuela' },
                        { id: 'merca_mad_latina_olivillo', chain: 'Mercadona', name: 'Mercadona - C. Olivillo, 16 (Latina)', zone: 'Madrid - Latina' },
                        { id: 'merca_mad_usera_rosales', chain: 'Mercadona', name: 'Mercadona - Av. de los Rosales, 26 (Usera)', zone: 'Madrid - Usera' },
                        { id: 'merca_mad_hortaleza_virgen_carmen', chain: 'Mercadona', name: 'Mercadona - Av. de la Virgen del Carmen, 84 (Hortaleza)', zone: 'Madrid - Hortaleza' },
                        { id: 'merca_mad_ciudad_lineal_madariaga', chain: 'Mercadona', name: 'Mercadona - C. de Francisco Madariaga, 3 (Ciudad Lineal)', zone: 'Madrid - Ciudad Lineal' },
                        { id: 'merca_mad_chamartin_habana', chain: 'Mercadona', name: 'Mercadona - P.º de La Habana, 10 (Chamartín)', zone: 'Madrid - Chamartín' },
                        { id: 'merca_mad_chamartin_corazon_maria', chain: 'Mercadona', name: 'Mercadona - C. del Corazón de María, 17 (Chamartín)', zone: 'Madrid - Chamartín' },
                        { id: 'merca_mad_carabanchel_gral_ricardos', chain: 'Mercadona', name: 'Mercadona - Calle del Gral. Ricardos, 188 (Carabanchel)', zone: 'Madrid - Carabanchel' },
                        { id: 'merca_mad_carabanchel_zaida', chain: 'Mercadona', name: 'Mercadona - C. de Zaida, 95 (Carabanchel)', zone: 'Madrid - Carabanchel' },
                        { id: 'merca_mad_carabanchel_juan_mieg', chain: 'Mercadona', name: 'Mercadona - C. Juan Mieg, 7 (Carabanchel)', zone: 'Madrid - Carabanchel' },
                        { id: 'merca_mad_carabanchel_secoya', chain: 'Mercadona', name: 'Mercadona - Polígono Industrial Aguacate, C. Secoya, 6 (Carabanchel)', zone: 'Madrid - Carabanchel' },
                        { id: 'merca_mad_arganzuela_delicias', chain: 'Mercadona', name: 'Mercadona - Paseo de las Delicias, 74 (Arganzuela)', zone: 'Madrid - Arganzuela' },
                        { id: 'merca_mad_tetuan_bravo_murillo_327', chain: 'Mercadona', name: 'Mercadona - C. de Bravo Murillo, 327 (Tetuán)', zone: 'Madrid - Tetuán' },
                        { id: 'merca_mad_ciudad_lineal_virgen_paz', chain: 'Mercadona', name: 'Mercadona - C. Virgen de la Paz, 16 (Ciudad Lineal)', zone: 'Madrid - Ciudad Lineal' },
                        { id: 'merca_mad_fuencarral_orduna', chain: 'Mercadona', name: 'Mercadona - C. de Orduña, 6 (Fuencarral-El Pardo)', zone: 'Madrid - Fuencarral' },
                        { id: 'merca_mad_latina_sinfonia', chain: 'Mercadona', name: 'Mercadona - C. Sinfonía, 20 (Latina)', zone: 'Madrid - Latina' },
                        { id: 'merca_mad_villaverde_augustobriga', chain: 'Mercadona', name: 'Mercadona - C. Augustóbriga, s/n (Villaverde)', zone: 'Madrid - Villaverde' },
                        { id: 'merca_mad_fuencarral_marquerie', chain: 'Mercadona', name: 'Mercadona - C. de Alfredo Marqueríe, 14 (Fuencarral-El Pardo)', zone: 'Madrid - Fuencarral' },
                        { id: 'merca_mad_salamanca_belluga', chain: 'Mercadona', name: 'Mercadona - C. Cardenal Belluga, 10 (Barrio de Salamanca)', zone: 'Madrid - Salamanca' },
                        { id: 'merca_mad_barajas_alcaniz', chain: 'Mercadona', name: 'Mercadona - C. Alcañiz, 5 (Barajas)', zone: 'Madrid - Barajas' },
                        { id: 'merca_mad_carabanchel_peseta', chain: 'Mercadona', name: 'Mercadona - Av. de la Peseta, 40 (Pinar de San José - Carabanchel)', zone: 'Madrid - Carabanchel' },

                        // --- MADRID - ACACIAS ---
                        { id: 'merca_mad_acacias_paseo', chain: 'Mercadona', name: 'Mercadona - P.º de las Acacias, 49 (Acacias)', zone: 'Madrid - Acacias' },
                        { id: 'lidl_mad_acacias_toledo', chain: 'Lidl', name: 'Lidl - C. de Toledo, 143 (Acacias / Pirámides)', zone: 'Madrid - Acacias' },
                        { id: 'car_mad_acacias_market', chain: 'Carrefour', name: 'Carrefour Market - P.º de las Acacias, 11 (Acacias)', zone: 'Madrid - Acacias' },
                        { id: 'aldi_mad_acacias_esperanza', chain: 'Aldi', name: 'Aldi - P.º de la Esperanza, 15 (Acacias)', zone: 'Madrid - Acacias' },
                        { id: 'dia_mad_acacias_paseo', chain: 'DIA', name: 'DIA - P.º de las Acacias, 34 (Acacias)', zone: 'Madrid - Acacias' },

                        // Lidl Capital
                        { id: 'lidl_mad_centro_tirso', chain: 'Lidl', name: 'Lidl - Pl. de Tirso de Molina, 16 (Centro)', zone: 'Madrid - Centro' },
                        { id: 'lidl_mad_chamberi_rodriguez_sp', chain: 'Lidl', name: 'Lidl - Calle de Rodríguez San Pedro, 22 (Chamberí)', zone: 'Madrid - Chamberí' },
                        { id: 'lidl_mad_villaverde_petronila', chain: 'Lidl', name: 'Lidl - Calle de Sta. Petronila, 1 (Villaverde)', zone: 'Madrid - Villaverde' },
                        { id: 'lidl_mad_arganzuela_valencia', chain: 'Lidl', name: 'Lidl - Rda. de Valencia, 1 (Arganzuela)', zone: 'Madrid - Arganzuela' },
                        { id: 'lidl_mad_usera_andalucia', chain: 'Lidl', name: 'Lidl - Av. de Andalucía, 7 (Usera)', zone: 'Madrid - Usera' },
                        { id: 'lidl_mad_centro_fuencarral', chain: 'Lidl', name: 'Lidl - Calle de Fuencarral, 101 (Centro)', zone: 'Madrid - Centro' },
                        { id: 'lidl_mad_moratalaz_pavones', chain: 'Lidl', name: 'Lidl - Cl. de la Hacienda de Pavones, 342 (Moratalaz)', zone: 'Madrid - Moratalaz' },
                        { id: 'lidl_mad_san_blas_noblejas', chain: 'Lidl', name: 'Lidl - C. de los Hermanos García Noblejas, 23C (San Blas-Canillejas)', zone: 'Madrid - San Blas' },
                        { id: 'lidl_mad_retiro_mediterraneo', chain: 'Lidl', name: 'Lidl - Av. del Mediterráneo, 33 (Retiro)', zone: 'Madrid - Retiro' },
                        { id: 'lidl_mad_arganzuela_ancora', chain: 'Lidl', name: 'Lidl - C/ del Áncora, 3 (Arganzuela)', zone: 'Madrid - Arganzuela' },
                        { id: 'lidl_mad_san_blas_campezo', chain: 'Lidl', name: 'Lidl - C/ de Campezo, 10 (San Blas-Canillejas)', zone: 'Madrid - San Blas' },
                        { id: 'lidl_mad_san_blas_soria', chain: 'Lidl', name: 'Lidl - C. de Soria, 2 (San Blas-Canillejas)', zone: 'Madrid - San Blas' },
                        { id: 'lidl_mad_carabanchel_carpetana', chain: 'Lidl', name: 'Lidl - C. Vía Carpetana, 145 (Carabanchel)', zone: 'Madrid - Carabanchel' },
                        { id: 'lidl_mad_carabanchel_antonio_lopez', chain: 'Lidl', name: 'Lidl - Calle de Antonio López, 78 (Carabanchel)', zone: 'Madrid - Carabanchel' },
                        { id: 'lidl_mad_carabanchel_calderilla', chain: 'Lidl', name: 'Lidl - C. de la Calderilla, 19 (Carabanchel)', zone: 'Madrid - Carabanchel' },
                        { id: 'lidl_mad_chamberi_guzman_bueno', chain: 'Lidl', name: 'Lidl - C. de Guzmán el Bueno, 70 (Chamberí)', zone: 'Madrid - Chamberí' },
                        { id: 'lidl_mad_carabanchel_sacristan', chain: 'Lidl', name: 'Lidl - C. de Antonia Rodríguez Sacristán, 12 (Carabanchel)', zone: 'Madrid - Carabanchel' },
                        { id: 'lidl_mad_usera_marcelo_usera', chain: 'Lidl', name: 'Lidl - C. de Marcelo Usera, 26 (Usera)', zone: 'Madrid - Usera' },
                        { id: 'lidl_mad_tetuan_bravo_murillo_291', chain: 'Lidl', name: 'Lidl - C. de Bravo Murillo, 291 (Tetuán)', zone: 'Madrid - Tetuán' },

                        // Carrefour Capital
                        { id: 'car_mad_hortaleza_gran_via', chain: 'Carrefour', name: 'Carrefour - Gran Vía de Hortaleza, s/n (Hortaleza)', zone: 'Madrid - Hortaleza' },
                        { id: 'car_mad_san_blas_guadalajara', chain: 'Carrefour', name: 'Carrefour - Av. de Guadalajara, 2 (San Blas-Canillejas)', zone: 'Madrid - San Blas' },
                        { id: 'car_mad_a2_km16', chain: 'Carrefour', name: 'Carrefour - A-2, 16', zone: 'Madrid - San Blas' },
                        { id: 'car_mad_vallecas_neruda', chain: 'Carrefour', name: 'Carrefour - Av. de Pablo Neruda, 91-97 (Puente de Vallecas)', zone: 'Madrid - Vallecas' },
                        { id: 'car_mad_villaverde_andalucia', chain: 'Carrefour', name: 'Carrefour - Av. de Andalucía, Km. 7, 1 (Villaverde)', zone: 'Madrid - Villaverde' },
                        { id: 'car_mad_latina_poblados', chain: 'Carrefour', name: 'Carrefour - Av. de los Poblados, 58 (Latina)', zone: 'Madrid - Latina' },
                        { id: 'car_mad_vallecas_suertes', chain: 'Carrefour', name: 'Carrefour - Av de las Suertes, s/n (Villa de Vallecas)', zone: 'Madrid - Vallecas' },

                        // Aldi Capital
                        { id: 'aldi_mad_salamanca_goya', chain: 'Aldi', name: 'Aldi - C. de Goya, 118 (Barrio de Salamanca)', zone: 'Madrid - Salamanca' },
                        { id: 'aldi_mad_chamberi_bravo_murillo', chain: 'Aldi', name: 'Aldi - C. de Bravo Murillo, 60 (Chamberí)', zone: 'Madrid - Chamberí' },
                        { id: 'aldi_mad_chamberi_sta_engracia', chain: 'Aldi', name: 'Aldi - C. de Sta. Engracia, 132 (Chamberí)', zone: 'Madrid - Chamberí' },
                        { id: 'aldi_mad_chamberi_san_bernardo', chain: 'Aldi', name: 'Aldi - C. de San Bernardo, 89 (Chamberí)', zone: 'Madrid - Chamberí' },
                        { id: 'aldi_mad_moncloa_princesa', chain: 'Aldi', name: 'Aldi - C. de la Princesa, 29 (Moncloa-Aravaca)', zone: 'Madrid - Moncloa' },
                        { id: 'aldi_mad_arganzuela_delicias', chain: 'Aldi', name: 'Aldi - P.º de las Delicias, 89 (Arganzuela)', zone: 'Madrid - Arganzuela' },
                        { id: 'aldi_mad_arganzuela_embajadores', chain: 'Aldi', name: 'Aldi - C. de Embajadores, 187 (Arganzuela)', zone: 'Madrid - Arganzuela' },
                        { id: 'aldi_mad_retiro_mediterraneo', chain: 'Aldi', name: 'Aldi - Av. del Mediterráneo, 24 (Retiro)', zone: 'Madrid - Retiro' },
                        { id: 'aldi_mad_retiro_dr_esquerdo', chain: 'Aldi', name: 'Aldi - C. del Dr. Esquerdo, 105 (Retiro)', zone: 'Madrid - Retiro' },
                        { id: 'aldi_mad_chamartin_lopez_hoyos', chain: 'Aldi', name: 'Aldi - C. de López de Hoyos, 129 (Chamartín)', zone: 'Madrid - Chamartín' },
                        { id: 'aldi_mad_ciudad_lineal_alcala', chain: 'Aldi', name: 'Aldi - C. de Alcalá, 369 (Ciudad Lineal)', zone: 'Madrid - Ciudad Lineal' },
                        { id: 'aldi_mad_ciudad_lineal_ricardo_ortiz', chain: 'Aldi', name: 'Aldi - C. de Ricardo Ortiz, 44 (Ciudad Lineal)', zone: 'Madrid - Ciudad Lineal' },
                        { id: 'aldi_mad_carabanchel_gral_ricardos', chain: 'Aldi', name: 'Aldi - C. del Gral. Ricardos, 127 (Carabanchel)', zone: 'Madrid - Carabanchel' },
                        { id: 'aldi_mad_usera_plaza_rio', chain: 'Aldi', name: 'Aldi - Av. del Manzanares, 210, CC Plaza Río 2 (Usera)', zone: 'Madrid - Usera' },
                        { id: 'aldi_mad_hortaleza_gran_via', chain: 'Aldi', name: 'Aldi - Gran Vía de Hortaleza, 51 (Hortaleza)', zone: 'Madrid - Hortaleza' },

                        // DIA Capital
                        { id: 'dia_mad_centro_toledo', chain: 'DIA', name: 'DIA - C. de Toledo, 106 (Centro)', zone: 'Madrid - Centro' },
                        { id: 'dia_mad_centro_atocha', chain: 'DIA', name: 'DIA - C. de Atocha, 83 (Centro)', zone: 'Madrid - Centro' },
                        { id: 'dia_mad_centro_san_bernardo', chain: 'DIA', name: 'DIA - C. de San Bernardo, 36 (Centro)', zone: 'Madrid - Centro' },
                        { id: 'dia_mad_salamanca_alcala', chain: 'DIA', name: 'DIA - C. de Alcalá, 196 (Barrio de Salamanca)', zone: 'Madrid - Salamanca' },
                        { id: 'dia_mad_chamberi_gaztambide', chain: 'DIA', name: 'DIA - C. de Gaztambide, 38 (Chamberí)', zone: 'Madrid - Chamberí' },
                        { id: 'dia_mad_chamberi_blasco_garay', chain: 'DIA', name: 'DIA - C. de Blasco de Garay, 49 (Chamberí)', zone: 'Madrid - Chamberí' },
                        { id: 'dia_mad_retiro_narvaez', chain: 'DIA', name: 'DIA - C. de Narváez, 59 (Retiro)', zone: 'Madrid - Retiro' },
                        { id: 'dia_mad_arganzuela_delicias', chain: 'DIA', name: 'DIA - P.º de las Delicias, 61 (Arganzuela)', zone: 'Madrid - Arganzuela' },
                        { id: 'dia_mad_arganzuela_sta_maria_cabeza', chain: 'DIA', name: 'DIA - P.º de Sta. María de la Cabeza, 29 (Arganzuela)', zone: 'Madrid - Arganzuela' },
                        { id: 'dia_mad_arganzuela_embajadores', chain: 'DIA', name: 'DIA - C. de Embajadores, 108 (Arganzuela)', zone: 'Madrid - Arganzuela' },
                        { id: 'dia_mad_tetuan_bravo_murillo_136', chain: 'DIA', name: 'DIA - C. de Bravo Murillo, 136 (Tetuán)', zone: 'Madrid - Tetuán' },
                        { id: 'dia_mad_tetuan_bravo_murillo_218', chain: 'DIA', name: 'DIA - C. de Bravo Murillo, 218 (Tetuán)', zone: 'Madrid - Tetuán' },
                        { id: 'dia_mad_tetuan_francos_rodriguez', chain: 'DIA', name: 'DIA - C. de Francos Rodríguez, 48 (Tetuán)', zone: 'Madrid - Tetuán' },
                        { id: 'dia_mad_chamartin_lopez_hoyos', chain: 'DIA', name: 'DIA - C. de López de Hoyos, 149 (Chamartín)', zone: 'Madrid - Chamartín' },
                        { id: 'dia_mad_chamartin_cartagena', chain: 'DIA', name: 'DIA - C. de Cartagena, 82 (Chamartín)', zone: 'Madrid - Chamartín' },
                        { id: 'dia_mad_ciudad_lineal_alcala', chain: 'DIA', name: 'DIA - C. de Alcalá, 309 (Ciudad Lineal)', zone: 'Madrid - Ciudad Lineal' },
                        { id: 'dia_mad_carabanchel_gral_ricardos', chain: 'DIA', name: 'DIA - C. del Gral. Ricardos, 81 (Carabanchel)', zone: 'Madrid - Carabanchel' },
                        { id: 'dia_mad_usera_marcelo_usera', chain: 'DIA', name: 'DIA - C. de Marcelo Usera, 91 (Usera)', zone: 'Madrid - Usera' },
                        { id: 'dia_mad_vallecas_albufera', chain: 'DIA', name: 'DIA - Av. de la Albufera, 105 (Puente de Vallecas)', zone: 'Madrid - Vallecas' },

                        // ==========================================
                        // 2. MUNICIPIOS DE MADRID (COBERTURA COMPLETA)
                        // ==========================================
                        // --- MÓSTOLES ---
                        { id: 'merca_mad_mostoles_velazquez', chain: 'Mercadona', name: 'Mercadona - C. Pintor Velázquez, 81 (Móstoles)', zone: 'Móstoles' },
                        { id: 'merca_mad_mostoles_simon', chain: 'Mercadona', name: 'Mercadona - C. Simón Hernández, 61 (Móstoles)', zone: 'Móstoles' },
                        { id: 'lidl_mad_mostoles_simon', chain: 'Lidl', name: 'Lidl - C. Simón Hernández, 75 (Móstoles)', zone: 'Móstoles' },
                        { id: 'aldi_mad_mostoles_velazquez', chain: 'Aldi', name: 'Aldi - C. Pintor Velázquez, 68 (Móstoles)', zone: 'Móstoles' },
                        { id: 'car_mad_mostoles_villaviciosa', chain: 'Carrefour', name: 'Carrefour - Ctra. de Villaviciosa, s/n (Móstoles)', zone: 'Móstoles' },
                        { id: 'dia_mad_mostoles_constitucion', chain: 'DIA', name: 'DIA - Av. de la Constitución, 32 (Móstoles)', zone: 'Móstoles' },

                        // --- ALCORCÓN ---
                        { id: 'merca_mad_alcorcon_fraguas', chain: 'Mercadona', name: 'Mercadona - C. las Fraguas, 5 (Alcorcón)', zone: 'Alcorcón' },
                        { id: 'merca_mad_alcorcon_retamas', chain: 'Mercadona', name: 'Mercadona - Av. Las Retamas, 28 (Alcorcón)', zone: 'Alcorcón' },
                        { id: 'lidl_mad_alcorcon', chain: 'Lidl', name: 'Lidl - Av. de San Martín de Valdeiglesias, 22 (Alcorcón)', zone: 'Alcorcón' },
                        { id: 'aldi_mad_alcorcon', chain: 'Aldi', name: 'Aldi - Av. de Europa, 2 (Parque Oeste / Alcorcón)', zone: 'Alcorcón' },
                        { id: 'car_mad_alcorcon', chain: 'Carrefour', name: 'Carrefour - C.C. Parque Oeste, A-5 km 14 (Alcorcón)', zone: 'Alcorcón' },
                        { id: 'dia_mad_alcorcon', chain: 'DIA', name: 'DIA - C. Alfredo Nobel, 3 (Alcorcón)', zone: 'Alcorcón' },

                        // --- LEGANÉS ---
                        { id: 'merca_mad_leganes_parquesur', chain: 'Mercadona', name: 'Mercadona - Av. Rey Juan Carlos I, 90 (Leganés)', zone: 'Leganés' },
                        { id: 'merca_mad_leganes_zarza', chain: 'Mercadona', name: 'Mercadona - C. del Monegros, 12 (Zarzaquemada / Leganés)', zone: 'Leganés' },
                        { id: 'lidl_mad_leganes_severo', chain: 'Lidl', name: 'Lidl - Av. Severo Ochoa, 19 (Leganés)', zone: 'Leganés' },
                        { id: 'aldi_mad_leganes', chain: 'Aldi', name: 'Aldi - C. del Rey Pastor, 31 (Leganés)', zone: 'Leganés' },
                        { id: 'car_mad_leganes_plaza_nueva', chain: 'Carrefour', name: 'Carrefour - Parque Comercial Plaza Nueva (Leganés)', zone: 'Leganés' },
                        { id: 'dia_mad_leganes', chain: 'DIA', name: 'DIA - Av. de Fuenlabrada, 62 (Leganés)', zone: 'Leganés' },

                        // --- GETAFE ---
                        { id: 'merca_mad_getafe_norte', chain: 'Mercadona', name: 'Mercadona - Av. Don Juan de Borbón, 3 (Getafe Norte)', zone: 'Getafe' },
                        { id: 'merca_mad_getafe_sector3', chain: 'Mercadona', name: 'Mercadona - Av. de la Libertad, s/n (Getafe)', zone: 'Getafe' },
                        { id: 'lidl_mad_getafe', chain: 'Lidl', name: 'Lidl - Ctra. Madrid-Toledo, km 12.5 (Getafe)', zone: 'Getafe' },
                        { id: 'aldi_mad_getafe', chain: 'Aldi', name: 'Aldi - C. Ilustración, 2 (Getafe)', zone: 'Getafe' },
                        { id: 'car_mad_getafe_bulevar', chain: 'Carrefour', name: 'Carrefour - El Bulevar, Ctra. de Villaverde, s/n (Getafe)', zone: 'Getafe' },
                        { id: 'dia_mad_getafe', chain: 'DIA', name: 'DIA - C. Madrid, 98 (Getafe)', zone: 'Getafe' },

                        // --- FUENLABRADA ---
                        { id: 'merca_mad_fuenlabrada_europa', chain: 'Mercadona', name: 'Mercadona - C. Móstoles, 50 (Fuenlabrada)', zone: 'Fuenlabrada' },
                        { id: 'merca_mad_fuenlabrada_loranca', chain: 'Mercadona', name: 'Mercadona - Av. de las Provincias, 18 (Fuenlabrada)', zone: 'Fuenlabrada' },
                        { id: 'lidl_mad_fuenlabrada', chain: 'Lidl', name: 'Lidl - C. Luis Sauquillo, 95 (Fuenlabrada)', zone: 'Fuenlabrada' },
                        { id: 'aldi_mad_fuenlabrada', chain: 'Aldi', name: 'Aldi - C. Móstoles, 105 (Fuenlabrada)', zone: 'Fuenlabrada' },
                        { id: 'car_mad_fuenlabrada', chain: 'Carrefour', name: 'Carrefour - C.C. Plaza de la Estación (Fuenlabrada)', zone: 'Fuenlabrada' },
                        { id: 'dia_mad_fuenlabrada', chain: 'DIA', name: 'DIA - C. Leganés, 48 (Fuenlabrada)', zone: 'Fuenlabrada' },

                        // --- ALCALÁ DE HENARES ---
                        { id: 'merca_mad_alcala_gamazo', chain: 'Mercadona', name: 'Mercadona - Vía Complutense, 42 (Alcalá de Henares)', zone: 'Alcalá de Henares' },
                        { id: 'merca_mad_alcala_cuadernos', chain: 'Mercadona', name: 'Mercadona - C. Federico Chueca, s/n (Alcalá)', zone: 'Alcalá de Henares' },
                        { id: 'lidl_mad_alcala', chain: 'Lidl', name: 'Lidl - Vía Complutense, 105 (Alcalá de Henares)', zone: 'Alcalá de Henares' },
                        { id: 'aldi_mad_alcala', chain: 'Aldi', name: 'Aldi - C. Antonio Suárez, 6 (Alcalá de Henares)', zone: 'Alcalá de Henares' },
                        { id: 'car_mad_alcala_complutense', chain: 'Carrefour', name: 'Carrefour - Vía Complutense, 49 (Alcalá de Henares)', zone: 'Alcalá de Henares' },
                        { id: 'dia_mad_alcala', chain: 'DIA', name: 'DIA - C. de la Caballería Española, 14 (Alcalá de Henares)', zone: 'Alcalá de Henares' },

                        // --- ALCOBENDAS / SAN SEBASTIÁN DE LOS REYES ---
                        { id: 'merca_mad_alcobendas', chain: 'Mercadona', name: 'Mercadona - C. del Marqués de la Valdavia, 131 (Alcobendas)', zone: 'Alcobendas / Sanse' },
                        { id: 'merca_mad_sanse', chain: 'Mercadona', name: 'Mercadona - Av. de España, 48 (San Sebastián de los Reyes)', zone: 'Alcobendas / Sanse' },
                        { id: 'lidl_mad_alcobendas', chain: 'Lidl', name: 'Lidl - Av. de Fuencarral, 56 (Alcobendas)', zone: 'Alcobendas / Sanse' },
                        { id: 'aldi_mad_sanse', chain: 'Aldi', name: 'Aldi - C. Salvador de Madariaga, s/n (Sanse)', zone: 'Alcobendas / Sanse' },
                        { id: 'car_mad_alcobendas_cc', chain: 'Carrefour', name: 'Carrefour - Centro Comercial Alcobendas', zone: 'Alcobendas / Sanse' },
                        { id: 'dia_mad_alcobendas', chain: 'DIA', name: 'DIA - C. del Marqués de la Valdavia, 67 (Alcobendas)', zone: 'Alcobendas / Sanse' },

                        // --- OTROS MUNICIPIOS ---
                        { id: 'merca_mad_boadilla', chain: 'Mercadona', name: 'Mercadona - C. Valle del Roncal, s/n (Boadilla)', zone: 'Boadilla del Monte' },
                        { id: 'car_mad_boadilla_km1', chain: 'Carrefour', name: 'Carrefour - Carr. de Boadilla del Monte, km. 1', zone: 'Boadilla del Monte' },
                        { id: 'merca_mad_rozas', chain: 'Mercadona', name: 'Mercadona - C. Camilo José Cela, 2 (Las Rozas)', zone: 'Las Rozas' },
                        { id: 'car_mad_el_pinar_las_rozas', chain: 'Carrefour', name: 'Carrefour - Ctra. de La Coruña, km. 22 (Las Rozas)', zone: 'Las Rozas' },
                        { id: 'merca_mad_rivas', chain: 'Mercadona', name: 'Mercadona - C. Fundición, 1 (Rivas)', zone: 'Rivas-Vaciamadrid' },
                        { id: 'car_mad_rivas_tecnica', chain: 'Carrefour', name: 'Carrefour - Av. de la Técnica, s/n (Rivas-Vaciamadrid)', zone: 'Rivas-Vaciamadrid' }
                    );
                   } else if (city === 'Almería') {
                    storesList.push(
                        // ==========================================
                        // 1. ALMERÍA - CENTRO / OLIVEROS / RAMBLA
                        // ==========================================
                        { id: 'merca_alm_plaza_barcelona', chain: 'Mercadona', name: 'Mercadona - Pl. de Barcelona, s/n (Oliveros / Centro)', zone: 'Almería - Centro' },
                        { id: 'merca_alm_centro_bosco', chain: 'Mercadona', name: 'Mercadona - C. San Juan Bosco, 44 (Centro)', zone: 'Almería - Centro' },
                        { id: 'lidl_alm_granada', chain: 'Lidl', name: 'Lidl - C. Granada, 190 (Centro)', zone: 'Almería - Centro' },
                        { id: 'car_alm_market_rambla', chain: 'Carrefour', name: 'Carrefour Market - C. Poeta Villaespesa, 17 (Centro)', zone: 'Almería - Centro' },
                        { id: 'aldi_alm_centro', chain: 'Aldi', name: 'Aldi - C. Real del Barrio Alto, 85 (Centro)', zone: 'Almería - Centro' },
                        { id: 'dia_alm_centro_granada', chain: 'DIA', name: 'DIA - C. Granada, 42 (Centro)', zone: 'Almería - Centro' },
                        { id: 'dia_alm_centro_aquino', chain: 'DIA', name: 'DIA - C. Poeta Paco Aquino, 51 (Centro)', zone: 'Almería - Centro' },

                        // ==========================================
                        // 2. ALMERÍA - EL ZAPILLO / VEGA DE ACÁ
                        // ==========================================
                        { id: 'merca_alm_zapillo_jaul', chain: 'Mercadona', name: 'Mercadona - C. Jaúl, 2 (El Zapillo)', zone: 'Almería - El Zapillo' },
                        { id: 'lidl_alm_zapillo', chain: 'Lidl', name: 'Lidl - Av. Cabo de Gata, 115 (El Zapillo)', zone: 'Almería - El Zapillo' },
                        { id: 'car_alm_zapillo', chain: 'Carrefour', name: 'Carrefour Express - Av. Cabo de Gata, 33 (El Zapillo)', zone: 'Almería - El Zapillo' },
                        { id: 'aldi_alm_zapillo', chain: 'Aldi', name: 'Aldi - C. Instinción, s/n (Vega de Acá / Zapillo)', zone: 'Almería - El Zapillo' },
                        { id: 'dia_alm_zapillo_cabogata', chain: 'DIA', name: 'DIA - Av. Cabo de Gata, 58 (El Zapillo)', zone: 'Almería - El Zapillo' },

                        // ==========================================
                        // 3. ALMERÍA - NUEVA ANDALUCÍA
                        // ==========================================
                        { id: 'merca_alm_nueva_andalucia', chain: 'Mercadona', name: 'Mercadona - Av. del Mediterráneo, 233 (Nueva Andalucía)', zone: 'Almería - Nueva Andalucía' },
                        { id: 'lidl_alm_mediterraneo', chain: 'Lidl', name: 'Lidl - Av. del Mediterráneo, 320 (Nueva Andalucía)', zone: 'Almería - Nueva Andalucía' },
                        { id: 'car_alm_mediterraneo', chain: 'Carrefour', name: 'Carrefour - Av. del Mediterráneo, s/n (C.C. Mediterráneo)', zone: 'Almería - Nueva Andalucía' },
                        { id: 'aldi_alm_mediterraneo', chain: 'Aldi', name: 'Aldi - Av. del Mediterráneo, 255 (Nueva Andalucía)', zone: 'Almería - Nueva Andalucía' },
                        { id: 'dia_alm_nueva_andalucia', chain: 'DIA', name: 'DIA - C. Blas Infante, 12 (Nueva Andalucía)', zone: 'Almería - Nueva Andalucía' },

                        // ==========================================
                        // 4. ALMERÍA - TORRECÁRDENAS / LOS MOLINOS
                        // ==========================================
                        { id: 'merca_alm_torrecardenas', chain: 'Mercadona', name: 'Mercadona - Av. Médico Francisco Pérez Company (CC Torrecárdenas)', zone: 'Almería - Torrecárdenas' },
                        { id: 'lidl_alm_torrecardenas', chain: 'Lidl', name: 'Lidl - Av. Médico Francisco Pérez Company, 9 (Torrecárdenas)', zone: 'Almería - Torrecárdenas' },
                        { id: 'car_alm_torrecardenas', chain: 'Carrefour', name: 'Carrefour Express - CC Torrecárdenas', zone: 'Almería - Torrecárdenas' },
                        { id: 'aldi_alm_torrecardenas', chain: 'Aldi', name: 'Aldi - C. Ctra. de Huércal, 24 (Torrecárdenas)', zone: 'Almería - Torrecárdenas' },
                        { id: 'dia_alm_los_molinos', chain: 'DIA', name: 'DIA - C. Real del Barrio Alto, 32 (Los Molinos / Torrecárdenas)', zone: 'Almería - Torrecárdenas' },

                        // ==========================================
                        // 5. ALMERÍA - RETAMAR / EL TOYO
                        // ==========================================
                        { id: 'merca_alm_retamar', chain: 'Mercadona', name: 'Mercadona - C. de los Juegos de Casablanca, 2 (El Toyo / Retamar)', zone: 'Almería - Retamar / El Toyo' },
                        { id: 'car_alm_retamar', chain: 'Carrefour', name: 'Carrefour Express Cepsa - Ctra. N-344 (Retamar)', zone: 'Almería - Retamar / El Toyo' },
                        { id: 'dia_alm_retamar', chain: 'DIA', name: 'DIA - C. Juegos de Barcelona, 4 (Retamar / El Toyo)', zone: 'Almería - Retamar / El Toyo' },

                        // ==========================================
                        // 6. HUÉRCAL DE ALMERÍA (ÁREA COMERCIAL METROPOLITANA)
                        // ==========================================
                        { id: 'merca_alm_huercal', chain: 'Mercadona', name: 'Mercadona - Ctra. N-340a, km 448 (La Cepa / Huércal)', zone: 'Huércal de Almería' },
                        { id: 'lidl_alm_huercal', chain: 'Lidl', name: 'Lidl - Ctra. Nacional 340, Km 447 (Huércal de Almería)', zone: 'Huércal de Almería' },
                        { id: 'car_alm_huercal', chain: 'Carrefour', name: 'Carrefour - Parque Comercial La Cepa (Huércal de Almería)', zone: 'Huércal de Almería' },
                        { id: 'aldi_alm_huercal', chain: 'Aldi', name: 'Aldi - Parque Comercial Cemar (Huércal de Almería)', zone: 'Huércal de Almería' },
                        { id: 'dia_alm_huercal', chain: 'DIA', name: 'DIA - C. Real, 72 (Huércal de Almería)', zone: 'Huércal de Almería' }
                    );
                } else if (city === 'Barcelona') {
                    storesList.push(
                        // Mercadona Barcelona
                        { id: 'merca_bcn_eixample', chain: 'Mercadona', name: 'Mercadona - C/ de Mallorca, 133 (Eixample)' },
                        { id: 'merca_bcn_eixample_provenca', chain: 'Mercadona', name: 'Mercadona - C/ de Provença, 381 (Eixample)' },
                        { id: 'merca_bcn_eixample_urgell', chain: 'Mercadona', name: 'Mercadona - C/ del Comte d\'Urgell, 97 (Eixample)' },
                        { id: 'merca_bcn_sants_creu_coberta', chain: 'Mercadona', name: 'Mercadona - C/ de la Creu Coberta, 104 (Sants-Montjuïc)' },
                        { id: 'merca_bcn_sants_carrer', chain: 'Mercadona', name: 'Mercadona - C/ de Sants, 232 (Sants-Montjuïc)' },
                        { id: 'merca_bcn_les_corts_berlin', chain: 'Mercadona', name: 'Mercadona - C/ de Berlín, 69 (Les Corts)' },
                        { id: 'merca_bcn_sarria_bonanova', chain: 'Mercadona', name: 'Mercadona - Pg. de la Bonanova, 14 (Sarrià-Sant Gervasi)' },
                        { id: 'merca_bcn_gracia_travessera', chain: 'Mercadona', name: 'Mercadona - Travessera de Gràcia, 186 (Gràcia)' },
                        { id: 'merca_bcn_gracia_pi_margall', chain: 'Mercadona', name: 'Mercadona - C/ de Pi i Margall, 94 (Gràcia)' },
                        { id: 'merca_bcn_sant_andreu_meridiana', chain: 'Mercadona', name: 'Mercadona - Av. Meridiana, 350, CC SOM Multiespai (Sant Andreu)' },
                        { id: 'merca_bcn_sant_marti_glories', chain: 'Mercadona', name: 'Mercadona - Av. Diagonal, 208, CC Glòries (Sant Martí)' },
                        { id: 'merca_bcn_poblenou_bilbao', chain: 'Mercadona', name: 'Mercadona - C/ de Bilbao, 60 (Sant Martí)' },
                        { id: 'merca_bcn_sant_feliu_pla', chain: 'Mercadona', name: 'Mercadona - C/ del Pla, 2 (Sant Feliu de Llobregat - 08980)' },
                        { id: 'merca_bcn_sant_feliu_manso', chain: 'Mercadona', name: 'Mercadona - C/ General Manso, 39 (Sant Feliu de Llobregat - 08980)' },

                        // --- TERRASSA - ROC BLANC ---
                        { id: 'merca_bcn_terrassa_rocblanc', chain: 'Mercadona', name: 'Mercadona - C/ de Bailén, 34 (Roc Blanc / Terrassa)', zone: 'Terrassa - Roc Blanc' },
                        { id: 'lidl_bcn_terrassa_olesa', chain: 'Lidl', name: 'Lidl - Ctra. de Olesa, 82 (Roc Blanc / Terrassa)', zone: 'Terrassa - Roc Blanc' },
                        { id: 'car_bcn_terrassa_market', chain: 'Carrefour', name: 'Carrefour Market - Rambla de Ègara, 80 (Terrassa Centro)', zone: 'Terrassa - Roc Blanc' },
                        { id: 'aldi_bcn_terrassa_rambla', chain: 'Aldi', name: 'Aldi - Av. de Santa Eulàlia, 200 (Terrassa)', zone: 'Terrassa - Roc Blanc' },
                        { id: 'dia_bcn_terrassa_olesa', chain: 'DIA', name: 'DIA - Ctra. de Olesa, 45 (Roc Blanc / Terrassa)', zone: 'Terrassa - Roc Blanc' },
                        
                        // Lidl Barcelona
                        { id: 'lidl_bcn_eixample_casanova', chain: 'Lidl', name: 'Lidl - C/ de Casanova, 86 (Eixample)' },
                        { id: 'lidl_bcn_les_corts_travessera', chain: 'Lidl', name: 'Lidl - Travessera de les Corts, 240 (Les Corts)' },
                        { id: 'lidl_bcn_sants_carrer', chain: 'Lidl', name: 'Lidl - C/ de Sants, 135 (Sants-Montjuïc)' },
                        { id: 'lidl_bcn_sant_marti_gran_via', chain: 'Lidl', name: 'Lidl - Gran Via de les Corts Catalanes, 940 (Sant Martí)' },
                        { id: 'lidl_bcn_sant_marti_independencia', chain: 'Lidl', name: 'Lidl - C/ de la Independència, 333 (Sant Martí)' },
                        { id: 'lidl_bcn_nou_barris_fabra_puig', chain: 'Lidl', name: 'Lidl - Pg. de Fabra i Puig, 250 (Nou Barris)' },
                        { id: 'lidl_bcn_horta_jorda', chain: 'Lidl', name: 'Lidl - Av. del Jordà, 18 (Horta-Guinardó)' },

                        // Carrefour Barcelona
                        { id: 'car_bcn_glories', chain: 'Carrefour', name: 'Carrefour - Av. Diagonal, 208, CC Glòries (Sant Martí)' },
                        { id: 'car_bcn_ciutat_vella_rambla', chain: 'Carrefour', name: 'Carrefour - La Rambla, 113 (Ciutat Vella)' },
                        { id: 'car_bcn_sant_andreu_maquinista', chain: 'Carrefour', name: 'Carrefour - Pg. de Potosí, 2, CC La Maquinista (Sant Andreu)' },
                        { id: 'car_bcn_sants_carrer', chain: 'Carrefour', name: 'Carrefour Market - C/ de Sants, 59 (Sants-Montjuïc)' },
                        { id: 'car_bcn_eixample_urgell', chain: 'Carrefour', name: 'Carrefour Market - C/ del Comte d\'Urgell, 210 (Eixample)' },
                        { id: 'car_bcn_sarria_aribau', chain: 'Carrefour', name: 'Carrefour Market - C/ d\'Aribau, 210 (Sarrià-Sant Gervasi)' },

                        // Aldi Barcelona
                        { id: 'aldi_bcn_eixample_gran_via', chain: 'Aldi', name: 'Aldi - Gran Via de les Corts Catalanes, 704 (Eixample)' },
                        { id: 'aldi_bcn_eixample_urgell', chain: 'Aldi', name: 'Aldi - C/ del Comte d\'Urgell, 1 (Eixample)' },
                        { id: 'aldi_bcn_eixample_sardenya', chain: 'Aldi', name: 'Aldi - C/ de Sardenya, 333 (Eixample)' },
                        { id: 'aldi_bcn_sants_numancia', chain: 'Aldi', name: 'Aldi - C/ de Numància, 59 (Sants-Montjuïc)' },
                        { id: 'aldi_bcn_sant_andreu_fabra_puig', chain: 'Aldi', name: 'Aldi - Pg. de Fabra i Puig, 194 (Sant Andreu)' },
                        { id: 'aldi_bcn_nou_barris_artesania', chain: 'Aldi', name: 'Aldi - C/ d\'Artesania, 45 (Nou Barris)' },

                        // DIA Barcelona
                        { id: 'dia_bcn_eixample_valencia', chain: 'DIA', name: 'DIA - C/ de València, 439 (Eixample)' },
                        { id: 'dia_bcn_eixample_corsega', chain: 'DIA', name: 'DIA - C/ de Còrsega, 515 (Eixample)' },
                        { id: 'dia_bcn_eixample_muntaner', chain: 'DIA', name: 'DIA - C/ de Muntaner, 140 (Eixample)' },
                        { id: 'dia_bcn_eixample_marina', chain: 'DIA', name: 'DIA - C/ de la Marina, 281 (Eixample)' },
                        { id: 'dia_bcn_sants_carrer', chain: 'DIA', name: 'DIA - C/ de Sants, 271 (Sants-Montjuïc)' },
                        { id: 'dia_bcn_sant_marti_rogent', chain: 'DIA', name: 'DIA - C/ de Rogent, 52 (Sant Martí)' }
                    );
                } else if (city === 'Sevilla') {
                    storesList.push(
                        // Mercadona Sevilla
                        { id: 'merca_sev_centro_plaza_armas', chain: 'Mercadona', name: 'Mercadona - Pl. de Armas, s/n, CC Plaza de Armas (Casco Antiguo)' },
                        { id: 'merca_sev_centro_san_luis', chain: 'Mercadona', name: 'Mercadona - C. San Luis, 26 (Casco Antiguo)' },
                        { id: 'merca_sev_nervion_plaza', chain: 'Mercadona', name: 'Mercadona - Av. de Eduardo Dato, 69, CC Nervión Plaza (Nervión)' },
                        { id: 'merca_sev_nervion_luis_montoto', chain: 'Mercadona', name: 'Mercadona - C. Luis Montoto, 122 (Nervión)' },
                        { id: 'merca_sev_triana_san_jacinto', chain: 'Mercadona', name: 'Mercadona - C. San Jacinto, 68 (Triana)' },
                        { id: 'merca_sev_triana_esperanza', chain: 'Mercadona', name: 'Mercadona - C. Esperanza de Triana, 42 (Triana)' },
                        { id: 'merca_sev_remedios_asuncion', chain: 'Mercadona', name: 'Mercadona - C. Asunción, 53 (Los Remedios)' },
                        { id: 'merca_sev_sur_borbolla', chain: 'Mercadona', name: 'Mercadona - Av. de la Borbolla, 55 (Sur)' },
                        { id: 'merca_sev_san_pablo_kansas_city', chain: 'Mercadona', name: 'Mercadona - Av. de Kansas City, 42 (San Pablo-Santa Justa)' },
                        { id: 'merca_sev_este_ciencias', chain: 'Mercadona', name: 'Mercadona - Av. de las Ciencias, 16 (Sevilla Este)' },
                        { id: 'merca_sev_bermejales_jerez', chain: 'Mercadona', name: 'Mercadona - Av. de Jerez, 47, CC Los Bermejales (Bellavista-La Palmera)' },
                        { id: 'merca_sev_osuna', chain: 'Mercadona', name: 'Mercadona - C. Sor Ángela de la Cruz, 87 (Osuna - 41640)' },

                        // Lidl Sevilla
                        { id: 'lidl_sev_macarena_capuchinos', chain: 'Lidl', name: 'Lidl - Ronda de Capuchinos, 2 (Macarena)' },
                        { id: 'lidl_sev_centro_torneo', chain: 'Lidl', name: 'Lidl - C. Torneo, 51 (Casco Antiguo)' },
                        { id: 'lidl_sev_san_pablo_kansas_city', chain: 'Lidl', name: 'Lidl - Av. de Kansas City, 96 (San Pablo-Santa Justa)' },
                        { id: 'lidl_sev_amate_andalucia', chain: 'Lidl', name: 'Lidl - Av. de Andalucía, s/n (Cerro-Amate)' },
                        { id: 'lidl_sev_este_ciencias', chain: 'Lidl', name: 'Lidl - Av. de las Ciencias, s/n (Sevilla Este)' },
                        { id: 'lidl_sev_bellavista_jerez', chain: 'Lidl', name: 'Lidl - Av. de Jerez, s/n (Bellavista-La Palmera)' },

                        // Carrefour Sevilla
                        { id: 'car_sev_macarena_norte', chain: 'Carrefour', name: 'Carrefour - Ronda Urbana Norte, Km. 1,5 (Macarena)' },
                        { id: 'car_sev_san_pablo_a4', chain: 'Carrefour', name: 'Carrefour - Autovía Madrid-Cádiz, Km. 535 (San Pablo-Santa Justa)' },
                        { id: 'car_sev_remedios_rep_argentina', chain: 'Carrefour', name: 'Carrefour Market - Av. República Argentina, 21 (Los Remedios)' },
                        { id: 'car_sev_centro_feria', chain: 'Carrefour', name: 'Carrefour Market - C. Feria, 98 (Casco Antiguo)' },
                        { id: 'car_sev_aljarafe_san_juan', chain: 'Carrefour', name: 'Carrefour - Av. del Aljarafe, s/n (San Juan de Aznalfarache)' },

                        // Aldi Sevilla
                        { id: 'aldi_sev_centro_torneo', chain: 'Aldi', name: 'Aldi - Av. de Torneo, 69 (Casco Antiguo)' },
                        { id: 'aldi_sev_sta_justa_laguillo', chain: 'Aldi', name: 'Aldi - C. José Laguillo, 29 (San Pablo-Santa Justa)' },
                        { id: 'aldi_sev_nervion_cruz_campo', chain: 'Aldi', name: 'Aldi - Av. de la Cruz del Campo, 41 (Nervión)' },
                        { id: 'aldi_sev_sur_reina_mercedes', chain: 'Aldi', name: 'Aldi - Av. de la Reina Mercedes, 25 (Sur)' },
                        { id: 'aldi_sev_este_montes_sierra', chain: 'Aldi', name: 'Aldi - Av. de Montes Sierra, 13 (Sevilla Este)' },

                        // DIA Sevilla
                        { id: 'dia_sev_centro_feria', chain: 'DIA', name: 'DIA - C. Feria, 37 (Casco Antiguo)' },
                        { id: 'dia_sev_triana_pages_corro', chain: 'DIA', name: 'DIA - C. Pagés del Corro, 131 (Triana)' },
                        { id: 'dia_sev_remedios_virgen_lujan', chain: 'DIA', name: 'DIA - C. Virgen de Luján, 42 (Los Remedios)' },
                        { id: 'dia_sev_macarena_cruz_roja', chain: 'DIA', name: 'DIA - Av. de la Cruz Roja, 38 (Macarena)' },
                        { id: 'dia_sev_nervion_eduardo_dato', chain: 'DIA', name: 'DIA - Av. de Eduardo Dato, 38 (Nervión)' },
                        { id: 'dia_sev_sta_justa_arroyo', chain: 'DIA', name: 'DIA - C. Arroyo, 52 (San Pablo-Santa Justa)' }
                    );
                } else if (city === 'Valencia') {
                    storesList.push(
                        // Mercadona Valencia
                        { id: 'merca_val_centro_roger_lauria', chain: 'Mercadona', name: 'Mercadona - C/ de Roger de Lauria, 19 (Ciutat Vella)' },
                        { id: 'merca_val_eixample_marques_turia', chain: 'Mercadona', name: 'Mercadona - Gran Via del Marqués del Túria, 52 (Eixample)' },
                        { id: 'merca_val_algiros_blasco_ibanez', chain: 'Mercadona', name: 'Mercadona - Av. de Blasco Ibáñez, 81 (Algirós)' },
                        { id: 'merca_val_benimaclet_primat_reig', chain: 'Mercadona', name: 'Mercadona - Av. del Primat Reig, 118 (Benimaclet)' },
                        { id: 'merca_val_campanar_nuevo_centro', chain: 'Mercadona', name: 'Mercadona - Av. de Pius XII, 2, CC Nuevo Centro (Campanar)' },
                        { id: 'merca_val_benicalap_corts', chain: 'Mercadona', name: 'Mercadona - Av. de les Corts Valencianes, 41 (Benicalap)' },
                        { id: 'merca_val_extramurs_sant_vicent', chain: 'Mercadona', name: 'Mercadona - C/ de Sant Vicent Màrtir, 172 (Extramurs)' },
                        { id: 'merca_val_grau_av_port', chain: 'Mercadona', name: 'Mercadona - Av. del Port, 173 (Camins al Grau)' },
                        { id: 'merca_val_grau_aqua', chain: 'Mercadona', name: 'Mercadona - C/ de Menorca, 19, CC Aqua (Camins al Grau)' },
                        { id: 'merca_val_cabanyal_reina', chain: 'Mercadona', name: 'Mercadona - C/ de la Reina, 95 (Poblats Marítims)' },
                        { id: 'merca_val_patraix_arxiduc_carlos', chain: 'Mercadona', name: 'Mercadona - C/ de l\'Arxiduc Carlos, 45 (Patraix)' },

                        // Lidl Valencia
                        { id: 'lidl_val_extramurs_perez_galdos', chain: 'Lidl', name: 'Lidl - Av. de Pérez Galdós, 65 (Extramurs)' },
                        { id: 'lidl_val_olivereta_av_cid', chain: 'Lidl', name: 'Lidl - Av. del Cid, 102 (L\'Olivereta)' },
                        { id: 'lidl_val_algiros_manuel_candela', chain: 'Lidl', name: 'Lidl - C/ del Doctor Manuel Candela, 19 (Algirós)' },
                        { id: 'lidl_val_rascanya_constitucio', chain: 'Lidl', name: 'Lidl - Av. de la Constitució, 226 (Rascanya)' },
                        { id: 'lidl_val_jesus_sant_vicent', chain: 'Lidl', name: 'Lidl - C/ de Sant Vicent Màrtir, 285 (Jesús)' },
                        { id: 'lidl_val_patraix_tres_creus', chain: 'Lidl', name: 'Lidl - Av. de les Tres Creus, 65 (Patraix)' },

                        // Carrefour Valencia
                        { id: 'car_val_quatre_carreres_saler', chain: 'Carrefour', name: 'Carrefour - C/ del Pintor Maella, 37, CC El Saler (Quatre Carreres)' },
                        { id: 'car_val_campanar_pius_xii', chain: 'Carrefour', name: 'Carrefour - Av. de Pius XII, s/n, CC Campanar (Campanar)' },
                        { id: 'car_val_extramurs_sant_vicent', chain: 'Carrefour', name: 'Carrefour Market - C/ de Sant Vicent Màrtir, 118 (Extramurs)' },
                        { id: 'car_val_extramurs_ferran_catolic', chain: 'Carrefour', name: 'Carrefour Market - Gran Via de Ferran el Catòlic, 53 (Extramurs)' },
                        { id: 'car_val_aldaia_bonaire', chain: 'Carrefour', name: 'Carrefour - Autovía del Este, Km. 345, CC Bonaire (Área Metropolitana)' },

                        // Aldi Valencia
                        { id: 'aldi_val_saidia_sagunt', chain: 'Aldi', name: 'Aldi - C/ de Sagunt, 160 (La Saïdia)' },
                        { id: 'aldi_val_grau_av_port', chain: 'Aldi', name: 'Aldi - Av. del Port, 119 (Camins al Grau)' },
                        { id: 'aldi_val_extramurs_cuenca', chain: 'Aldi', name: 'Aldi - C/ de Cuenca, 47 (Extramurs)' },
                        { id: 'aldi_val_campanar_mestre_rodrigo', chain: 'Aldi', name: 'Aldi - Av. del Mestre Rodrigo, 99 (Campanar)' },
                        { id: 'aldi_val_jesus_sant_vicent', chain: 'Aldi', name: 'Aldi - C/ de Sant Vicent Màrtir, 219 (Jesús)' },
                        { id: 'aldi_val_algiros_sants_just', chain: 'Aldi', name: 'Aldi - C/ dels Sants Just i Pastor, 146 (Algirós)' },

                        // DIA Valencia
                        { id: 'dia_val_eixample_sueca', chain: 'DIA', name: 'DIA - C/ de Sueca, 52 (Eixample - Russafa)' },
                        { id: 'dia_val_eixample_peris_valero', chain: 'DIA', name: 'DIA - Av. de Peris i Valero, 129 (Eixample)' },
                        { id: 'dia_val_extramurs_conca', chain: 'DIA', name: 'DIA - C/ de Conca, 23 (Extramurs)' },
                        { id: 'dia_val_benimaclet_emili_baro', chain: 'DIA', name: 'DIA - C/ d\'Emili Baró, 43 (Benimaclet)' },
                        { id: 'dia_val_algiros_blasco_ibanez', chain: 'DIA', name: 'DIA - Av. de Blasco Ibáñez, 125 (Algirós)' },
                        { id: 'dia_val_jesus_carteros', chain: 'DIA', name: 'DIA - C/ de Carteros, 48 (Jesús)' }
                    );
                } else if (city === 'Alicante') {
                    storesList.push(
                        // Mercadona Alicante
                        { id: 'merca_alc_centro_calderon', chain: 'Mercadona', name: 'Mercadona - C/ Calderón de la Barca, 39 (Centro - 03004)' },
                        { id: 'merca_alc_sanjuan_naciones', chain: 'Mercadona', name: 'Mercadona - Av. de las Naciones, 4 (Playa de San Juan - 03540)' },
                        { id: 'merca_alc_sanjuan_vicente_ramos', chain: 'Mercadona', name: 'Mercadona - Av. Historiador Vicente Ramos, s/n (Playa de San Juan - 03540)' },
                        { id: 'merca_alc_benalua_aguilera', chain: 'Mercadona', name: 'Mercadona - Av. de Aguilera, 55 (Benalúa)' },
                        { id: 'merca_alc_babel_rojo', chain: 'Mercadona', name: 'Mercadona - C/ Periodista Rafael González Aguilar, 19 (Babel)' },
                        { id: 'merca_alc_carolinas_garbinet', chain: 'Mercadona', name: 'Mercadona - C/ Médico Vicente Reyes, 14 (Carolinas / Garbinet)' },
                        { id: 'merca_alc_vistahermosa_denia', chain: 'Mercadona', name: 'Mercadona - Av. de Denia, 149 (Vistahermosa / La Condomina)' },

                        // Lidl Alicante
                        { id: 'lidl_alc_sanjuan_naciones', chain: 'Lidl', name: 'Lidl - Av. de las Naciones, 1 (Playa de San Juan - 03540)' },
                        { id: 'lidl_alc_granvia_alonso_cano', chain: 'Lidl', name: 'Lidl - C/ Alonso Cano, 61 (Gran Vía / Garbinet)' },
                        { id: 'lidl_alc_babel_elche', chain: 'Lidl', name: 'Lidl - Av. de Elche, 21 (Babel)' },

                        // Carrefour Alicante
                        { id: 'car_alc_sanjuan_denia', chain: 'Carrefour', name: 'Carrefour - Av. de Denia, s/n (San Juan / Vistahermosa)' },
                        { id: 'car_alc_granvia', chain: 'Carrefour', name: 'Carrefour - C/ José García Sellés, 2, CC Gran Vía (Gran Vía)' },
                        { id: 'car_alc_puerta_alicante', chain: 'Carrefour', name: 'Carrefour - Av. Alcalde Lorenzo Carbonell, s/n, CC Puerta de Alicante' },

                        // Aldi Alicante
                        { id: 'aldi_alc_sanjuan_mostoles', chain: 'Aldi', name: 'Aldi - C/ Móstoles, 2 (Playa de San Juan / Sant Joan)' },
                        { id: 'aldi_alc_vistahermosa_denia', chain: 'Aldi', name: 'Aldi - Av. de Denia, 155 (Vistahermosa)' },
                        { id: 'aldi_alc_babel_serpis', chain: 'Aldi', name: 'Aldi - C/ Río Serpis, 2 (Babel)' },

                        // DIA Alicante
                        { id: 'dia_alc_centro_segarra', chain: 'DIA', name: 'DIA - C/ Capitán Segarra, 15 (Centro / Mercado)' },
                        { id: 'dia_alc_carolinas_pio_xii', chain: 'DIA', name: 'DIA - C/ Pío XII, 25 (Carolinas)' },
                        { id: 'dia_alc_benalua_foglietti', chain: 'DIA', name: 'DIA - C/ Foglietti, 22 (Benalúa)' }
                    );
                    } else if (city === 'Asturias') {
                    storesList.push(
                        // ==========================================
                        // 1. GIJÓN
                        // ==========================================
                        // Mercadona Gijón
                        { id: 'merca_ast_gijon_calzada', chain: 'Mercadona', name: 'Mercadona - C. Maestro Amado Morán (La Calzada)', zone: 'Gijón' },
                        { id: 'merca_ast_gijon_esteban', chain: 'Mercadona', name: 'Mercadona - C. Marqués de San Esteban, 57 (Centro / Poniente)', zone: 'Gijón' },
                        { id: 'merca_ast_gijon_coto', chain: 'Mercadona', name: 'Mercadona - C. Ramón y Cajal, 41 (El Coto)', zone: 'Gijón' },
                        { id: 'merca_ast_gijon_viesques', chain: 'Mercadona', name: 'Mercadona - C. Corín Tellado, s/n (Viesques)', zone: 'Gijón' },
                        { id: 'merca_ast_gijon_llano', chain: 'Mercadona', name: 'Mercadona - C. Cangas de Onís, 9 (El Llano)', zone: 'Gijón' },

                        // Lidl Gijón
                        { id: 'lidl_ast_gijon_ochoa', chain: 'Lidl', name: 'Lidl - C. Severo Ochoa, 57 (Gijón)', zone: 'Gijón' },
                        { id: 'lidl_ast_gijon_carbonera', chain: 'Lidl', name: 'Lidl - Ctra. Carbonera, 85 (Gijón)', zone: 'Gijón' },

                        // Carrefour Gijón
                        { id: 'car_ast_gijon_fresnos', chain: 'Carrefour', name: 'Carrefour - C.C. Los Fresnos, C. Río de Oro, 3 (Gijón)', zone: 'Gijón' },
                        { id: 'car_ast_gijon_calzada', chain: 'Carrefour', name: 'Carrefour - C.C. La Calzada (Gijón)', zone: 'Gijón' },

                        // Aldi Gijón
                        { id: 'aldi_ast_gijon_roces', chain: 'Aldi', name: 'Aldi - C. Ada Byron / Roces (Gijón)', zone: 'Gijón' },

                        // DIA Gijón
                        { id: 'dia_ast_gijon_calzada', chain: 'DIA', name: 'DIA - C. Brasil, 44 (La Calzada / Gijón)', zone: 'Gijón' },
                        { id: 'dia_ast_gijon_centro', chain: 'DIA', name: 'DIA - C. Menéndez Valdés, 24 (Centro / Gijón)', zone: 'Gijón' },

                        // ==========================================
                        // 2. OVIEDO
                        // ==========================================
                        // Mercadona Oviedo
                        { id: 'merca_ast_oviedo_foncalada', chain: 'Mercadona', name: 'Mercadona - C. Foncalada, 13 (Centro / Oviedo)', zone: 'Oviedo' },
                        { id: 'merca_ast_oviedo_florida', chain: 'Mercadona', name: 'Mercadona - C. Alonso de Proaza (La Florida / Oviedo)', zone: 'Oviedo' },
                        { id: 'merca_ast_oviedo_buenavista', chain: 'Mercadona', name: 'Mercadona - C. Bermudo I El Diácono (Buenavista / El Cristo)', zone: 'Oviedo' },
                        { id: 'merca_ast_oviedo_elorza', chain: 'Mercadona', name: 'Mercadona - C. General Elorza, 68 (Oviedo)', zone: 'Oviedo' },

                        // Lidl Oviedo
                        { id: 'lidl_ast_oviedo_tenderina', chain: 'Lidl', name: 'Lidl - C. Tenderina Alta, 140 (Oviedo)', zone: 'Oviedo' },
                        { id: 'lidl_ast_oviedo_florida', chain: 'Lidl', name: 'Lidl - C. Río Dobra (La Florida / Oviedo)', zone: 'Oviedo' },

                        // Carrefour Oviedo
                        { id: 'car_ast_oviedo_prados', chain: 'Carrefour', name: 'Carrefour - C.C. Los Prados (Oviedo)', zone: 'Oviedo' },
                        { id: 'car_ast_oviedo_principado', chain: 'Carrefour', name: 'Carrefour - C.C. Parque Principado (Oviedo / Paredes)', zone: 'Oviedo' },

                        // Aldi Oviedo
                        { id: 'aldi_ast_oviedo_cristo', chain: 'Aldi', name: 'Aldi - C. Julián Clavería, 11 (El Cristo / Oviedo)', zone: 'Oviedo' },

                        // DIA Oviedo
                        { id: 'dia_ast_oviedo_uria', chain: 'DIA', name: 'DIA - C. Uría, 66 (Centro / Oviedo)', zone: 'Oviedo' },
                        { id: 'dia_ast_oviedo_acevedo', chain: 'DIA', name: 'DIA - C. Fuertes Acevedo, 45 (Oviedo)', zone: 'Oviedo' }
                    );
                } else {
                    storesList.push(
                        { id: 'merca_' + city, chain: 'Mercadona', name: `Mercadona - ${city} Centro` },
                        { id: 'car_' + city, chain: 'Carrefour', name: `Carrefour - ${city}` },
                        { id: 'lidl_' + city, chain: 'Lidl', name: `Lidl - ${city}` },
                        { id: 'aldi_' + city, chain: 'Aldi', name: `Aldi - ${city}` },
                        { id: 'dia_' + city, chain: 'DIA', name: `DIA Market - ${city}` }
                    );
                }

                CITIES_AND_STORES[city] = { name: city, stores: storesList };
            });
        }

        
const CITY_COORDS = {
            'Málaga': { lat: 36.7213, lng: -4.4214 },
            'Madrid': { lat: 40.4168, lng: -3.7038 },
            'Almería': { lat: 36.8340, lng: -2.4637 },
            'Barcelona': { lat: 41.3874, lng: 2.1686 },
            'Valencia': { lat: 39.4699, lng: -0.3763 },
            'Sevilla': { lat: 37.3891, lng: -5.9845 },
            'Bilbao': { lat: 43.2630, lng: -2.9350 },
            'Alicante': { lat: 38.3452, lng: -0.4810 },
            'Asturias': { lat: 43.4400, lng: -5.7500 }
        };

        // Coordenadas específicas para municipios más alejados de la capital
        const ZONE_COORDS = {
            'Málaga Capital': { lat: 36.7213, lng: -4.4214 },
            'Torremolinos': { lat: 36.6219, lng: -4.5000 },
            'Fuengirola': { lat: 36.5441, lng: -4.6247 },
            'Alhaurín de la Torre': { lat: 36.6631, lng: -4.5606 },
            'Cártama': { lat: 36.7114, lng: -4.6305 },
            'Rincón de la Victoria': { lat: 36.7171, lng: -4.2794 },
            'Vélez-Málaga / Torre del Mar': { lat: 36.7700, lng: -4.1000 },
            'Algarrobo / Torrox': { lat: 36.7330, lng: -3.9570 },
            'Gijón': { lat: 43.5322, lng: -5.6611 },
            'Oviedo': { lat: 43.3614, lng: -5.8493 },
            'Alcalá de Henares': { lat: 40.4819, lng: -3.3635 },
            'Terrassa - Roc Blanc': { lat: 41.5632, lng: 2.0089 }
        };

        function calcularDistanciaKm(lat1, lon1, lat2, lon2) {
            const R = 6371;
            const dLat = (lat2 - lat1) * Math.PI / 180;
            const dLon = (lon2 - lon1) * Math.PI / 180;
            const a = 
                Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
                Math.sin(dLon / 2) * Math.sin(dLon / 2);
            return R * (2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)));
        }

        
initializeActiveCitiesAndStores();
module.exports={CITIES_AND_STORES,CHAIN_OFFERS_CATALOG,CITY_COORDS,ZONE_COORDS,calcularDistanciaKm};
