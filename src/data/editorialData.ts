import heroMarinaImg from '../assets/images/hero_tuxpan_marina_1794509763145.jpg';
import estateVillaImg from '../assets/images/estate_villa_barra_norte_1794509763207.jpg';
import portMaritimeImg from '../assets/images/port_tuxpan_maritime_1794509763229.jpg';
import tourismLobosImg from '../assets/images/tourism_isla_lobos_1794509763271.jpg';
import commercePavilionImg from '../assets/images/commerce_coastal_pavilion_1794509763630.jpg';

import type {
  EditorialArticle,
  PortFacilityMetric,
  PropertyListing,
  TourismExperience,
} from '../types/editorial';

export const EXCHANGE_RATE_MXN_USD = 19.8;

export const HERO_FEATURE = {
  mastheadDateline: 'Edición Veracruz · Otoño 2026 · 20°57′N 97°24′O',
  kicker: 'CRÓNICA DE INVERSIÓN Y TERRITORIO',
  title: 'Tuxpan: El umbral marítimo del Golfo donde converge el capital patrimonial',
  subtitle:
    'A menos de tres horas del Valle de México, la desembocadura del río Tuxpan articula infraestructura portuaria de gran calado, reservas frente al mar y hospitalidad náutica de baja densidad.',
  image: heroMarinaImg,
  imageAlt:
    'Marina residencial y malecón arquitectónico de piedra caliza al atardecer sobre el río Tuxpan, Veracruz.',
  figureCaption: 'Fig. 1 — Malecón ribereño y dársena náutica en la margen norte del río Tuxpan.',
  kpis: [
    { label: 'Calado operativo', value: '15.0 m', detail: 'Canal de acceso marítimo' },
    { label: 'Tránsito a CDMX', value: '2 h 45 min', detail: 'Autopista México–Tuxpan' },
    { label: 'Plusvalía histórica', value: '+14.8 %', detail: 'Corredor Barra Norte anual' },
    { label: 'Portafolio activo', value: '6 activos', detail: 'Verificación registral vigente' },
  ],
};

export const EDITORIAL_ARTICLES: EditorialArticle[] = [
  {
    id: 'corredor-maritimo-cdmx',
    kicker: 'INFRAESTRUCTURA PORTUARIA',
    title: 'La salida natural al Atlántico: por qué el puerto de Tuxpan redefine la logística del centro del país',
    subtitle:
      'Con un calado de 15 metros y enlace carretero directo hacia el Altiplano, las terminales especializadas de Tuxpan capturan cadenas de suministro de alto valor.',
    author: 'Alejandro Domínguez',
    authorRole: 'Editor de Infraestructura y Comercio',
    publishedAt: '14 de octubre de 2026',
    readTime: '6 min de lectura',
    coordinates: '20°58′12″N 97°19′44″O',
    image: portMaritimeImg,
    imageAlt:
      'Vista aérea al amanecer de la terminal portuaria de aguas profundas en la desembocadura del río Tuxpan.',
    figureCaption:
      'Fig. 2 — Terminal multipropósito y patios intermodales en el recinto portuario de Tuxpan.',
    leadQuote:
      'La ventaja geográfica no se improvisa: cada kilómetro ahorrado entre el muelle y la planta industrial se traduce en resiliencia financiera.',
    sections: [
      {
        paragraphs: [
          'Durante décadas, el comercio exterior del centro de México dependió de rutas montañosas prolongadas hacia puertos saturados. La consolidación de la autopista México–Tuxpan transformó esa ecuación logística al reducir el recorrido terrestre a menos de tres horas desde el anillo industrial metropolitano.',
          'Hoy, las terminales de contenedores, carga rodada y fluidos energéticos ubicadas en la bocana del río Tuxpan operan con estándares internacionales de eficiencia. Su diseño en dársena interior protege las maniobras ante marejadas del Golfo y permite programar ventanas de atraque de alta certidumbre.',
        ],
      },
      {
        heading: 'Efecto multiplicador sobre suelo comercial y servicios',
        paragraphs: [
          'El dinamismo portuario ha detonado una demanda sostenida de parques logísticos, recintos fiscalizados estratégicos y alojamiento ejecutivo de estancia media. Zonas anteriormente reservadas a uso agrícola de baja intensidad ahora integran corredores de uso mixto con infraestructura subterránea.',
          'Para el inversionista patrimonial, el atractivo radica en la convergencia entre renta industrial indexada y apreciación de tierra costera escasa. A diferencia de enclaves puramente turísticos, Tuxpan sostiene su actividad económica los doce meses del año.',
        ],
      },
    ],
    marginNotes: [
      {
        anchor: '01 · Dársena Profunda',
        title: 'Capacidad de atraque',
        body: 'Recibe buques Post-Panamax con una profundidad de diseño de 15.0 metros en canal principal.',
      },
      {
        anchor: '02 · Conectividad',
        title: 'Distancia al Altiplano',
        body: '295 km por autopista de altas especificaciones hasta el norte de la Ciudad de México.',
      },
      {
        anchor: '03 · Reserva Territorial',
        title: 'Suelo industrial',
        body: 'Más de 420 hectáreas con vocación logística adyacentes al kilómetro 6 de la carretera a la barra.',
      },
    ],
    relatedInterest: 'Infraestructura y Parques Logísticos',
  },
  {
    id: 'arquitectura-travertino-barra-norte',
    kicker: 'BIENES RAÍCES',
    title: 'Arquitectura de costa cálida: el auge de las residencias de baja densidad en Barra Norte',
    subtitle:
      'Materiales minerales locales, ventilación cruzada y privacidad frente al Golfo consolidan un nuevo estándar residencial entre coleccionistas de segundas residencias.',
    author: 'Valeria Montesinos',
    authorRole: 'Curadora de Arquitectura y Bienes Raíces',
    publishedAt: '8 de octubre de 2026',
    readTime: '5 min de lectura',
    coordinates: '20°59′40″N 97°18′22″O',
    image: estateVillaImg,
    imageAlt:
      'Villa residencial minimalista en piedra travertino con alberca infinita frente al Golfo de México.',
    figureCaption:
      'Fig. 3 — Pabellón residencial en Barra Norte diseñado con piedra travertino y madera tropical certificada.',
    leadQuote:
      'El verdadero lujo en el trópico mexicano consiste en construir poco, respetar la duna costera y dejar que la brisa del Golfo resuelva el confort.',
    sections: [
      {
        paragraphs: [
          'Lejos de las torres densas que han saturado otros litorales del país, Barra Norte en Tuxpan privilegia lotes amplios con frentes de playa superiores a veinte metros lineales. Esta escala permite proyectar casas horizontales que dialogan con la vegetación de palma real y uva de mar.',
          'Los estudios de arquitectura contemporánea que hoy firman residencias en la zona apuestan por travertinos sin pulir, maderas de parota tratadas al aceite y celosías que tamizan la luz matutina sin bloquear el horizonte marino.',
        ],
      },
      {
        heading: 'Liquidez en renta vacacional de segmento alto',
        paragraphs: [
          'La cercanía con la Ciudad de México, Puebla y Querétaro impulsa tasas de ocupación superiores al 68 % durante fines de semana largos y temporada de arrecife, permitiendo rendimientos netos competitivos sin comprometer el uso familiar de la propiedad.',
        ],
      },
    ],
    marginNotes: [
      {
        anchor: '01 · Normativa',
        title: 'Baja densidad',
        body: 'Predios residenciales con restricción de altura y amplios retiros hacia la zona federal marítima.',
      },
      {
        anchor: '02 · Plusvalía',
        title: 'Incremento por m²',
        body: 'Crecimiento anual compuesto de 14.8 % en lotes urbanizados con frente de mar o acceso a marina.',
      },
    ],
    relatedInterest: 'Residencial Frente de Playa',
  },
  {
    id: 'isla-lobos-santuario-nautico',
    kicker: 'TURISMO NÁUTICO',
    title: 'Isla de Lobos y la cultura de navegación privada en el norte de Veracruz',
    subtitle:
      'Un sistema arrecifal prístino a cuarenta minutos de navegación convierte a la ribera tuxpeña en base predilecta para embarcaciones deportivas.',
    author: 'Mateo Herrera',
    authorRole: 'Corresponsal Náutico y de Hospitalidad',
    publishedAt: '2 de octubre de 2026',
    readTime: '4 min de lectura',
    coordinates: '21°28′15″N 97°13′35″O',
    image: tourismLobosImg,
    imageAlt:
      'Aguas turquesas cristalinas del arrecife de Isla de Lobos con un velero fondeado frente al cayo de arena blanca.',
    figureCaption:
      'Fig. 4 — Fondeadero protegido en aguas someras de Isla de Lobos, al noreste de Tuxpan.',
    leadQuote:
      'Navegar desde el río Tuxpan hacia mar abierto ofrece uno de los contrastes ecológicos más notables de la costa oriental mexicana.',
    sections: [
      {
        paragraphs: [
          'Pocas ciudades costeras cuentan con un estuario navegable de aguas calmas ideal para resguardar embarcaciones de hasta sesenta pies y, al mismo tiempo, acceso inmediato a un parque arrecifal coralino de visibilidad extraordinaria.',
          'Durante los meses de primavera y verano, el trayecto hacia Isla de Lobos atrae a entusiastas del buceo, la vela y la pesca deportiva responsable, consolidando una demanda creciente por clubes náuticos privados y muelles con servicios completos.',
        ],
      },
    ],
    marginNotes: [
      {
        anchor: '01 · Travesía',
        title: 'Tiempo de navegación',
        body: '45 a 60 minutos en embarcación de crucero desde la desembocadura del río Tuxpan.',
      },
      {
        anchor: '02 · Conservación',
        title: 'Acceso regulado',
        body: 'Área Natural Protegida con cupo diario controlado para preservar praderas marinas y coral.',
      },
    ],
    relatedInterest: 'Hospitalidad y Clubes Náuticos',
  },
  {
    id: 'comercio-urbano-pabellones-mixtos',
    kicker: 'COMERCIO REGIONAL',
    title: 'La transformación comercial del bulevar ribereño: arquitectura de usos mixtos y servicio corporativo',
    subtitle:
      'La llegada de firmas navieras, operadores energéticos y comercio especializado impulsa plazas boutique con patios sombreados y terrazas frente al río.',
    author: 'Elena Santamaría',
    authorRole: 'Analista de Desarrollo Urbano',
    publishedAt: '25 de septiembre de 2026',
    readTime: '5 min de lectura',
    coordinates: '20°57′18″N 97°24′05″O',
    image: commercePavilionImg,
    imageAlt:
      'Pabellón comercial boutique con columnatas de piedra caliza crema, jardín central y terrazas sombreadas.',
    figureCaption:
      'Fig. 5 — Corredor comercial de nueva generación con columnatas térmicas y comercio curado.',
    leadQuote:
      'El comercio de alta gama en ciudades portuarias prósperas nace donde el visitante corporativo y la comunidad local comparten el mismo espacio público.',
    sections: [
      {
        paragraphs: [
          'El crecimiento de la economía marítima en el norte de Veracruz ha elevado el estándar de los espacios de reunión profesional, gastronomía contemporánea y oficinas boutique. Los nuevos desarrollos comerciales sustituyen la nave cerrada convencional por galerías abiertas al paisaje tropical.',
          'Estas piezas urbanas combinan locales de planta baja para gastronomía y banca patrimonial con niveles superiores destinados a despachos legales, consultoría aduanal y residencias ejecutivas.',
        ],
      },
    ],
    marginNotes: [
      {
        anchor: '01 · Demanda',
        title: 'Ocupación comercial',
        body: '94 % de colocación en locales prime sobre el eje del Bulevar Jesús Reyes Heroles.',
      },
    ],
    relatedInterest: 'Lotes Comerciales y Uso Mixto',
  },
];

export const PROPERTY_LISTINGS: PropertyListing[] = [
  {
    id: 'villa-barra-norte-01',
    code: 'TXP-BR-014',
    title: 'Residencia Mirador del Golfo',
    zone: 'Barra Norte · Km 4.5',
    category: 'Frente de Playa',
    priceMxn: 28500000,
    areaSqm: 1420,
    roiPercent: 14.2,
    horizonYears: 5,
    legalStatus: 'Escritura Pública · Libre de Gravamen',
    summary:
      'Residencia contemporánea en travertino con 28 metros lineales de frente al mar, alberca infinita climatizada y terraza volada en madera tropical.',
    image: estateVillaImg,
    imageAlt: 'Residencia Mirador del Golfo en piedra travertino frente al mar en Barra Norte.',
    highlights: [
      '28 m de frente de playa privado con acceso controlado',
      '5 recámaras en suite más pabellón de huéspedes independiente',
      'Sistema fotovoltaico híbrido y cisterna de captación pluvial',
    ],
    specs: [
      { label: 'Superficie de terreno', value: '1,420 m²' },
      { label: 'Construcción cubierta', value: '680 m²' },
      { label: 'Frente costero', value: '28.0 m' },
      { label: 'Rendimiento estimado', value: '14.2 % anual' },
      { label: 'Régimen jurídico', value: 'Escritura Pública' },
      { label: 'Coordenadas', value: '20°59′44″N 97°18′19″O' },
    ],
  },
  {
    id: 'marina-residence-02',
    code: 'TXP-MN-021',
    title: 'Conjunto Dársena del Río',
    zone: 'Ribera Norte · Río Tuxpan',
    category: 'Residencial Náutico',
    priceMxn: 19400000,
    areaSqm: 960,
    roiPercent: 13.6,
    horizonYears: 5,
    legalStatus: 'Escritura Pública · Concesión de Muelle',
    summary:
      'Propiedad ribereña con atraque privado para embarcación de hasta 55 pies, casa club arquitectónica y salida directa a aguas profundas.',
    image: heroMarinaImg,
    imageAlt: 'Conjunto Dársena del Río con malecón de piedra y muelles privados sobre el río Tuxpan.',
    highlights: [
      'Muelle privado con toma eléctrica de 50 A y agua potable',
      'A 12 minutos de navegación de la bocana hacia Isla de Lobos',
      'Seguridad perimetral 24 horas y administración hotelera opcional',
    ],
    specs: [
      { label: 'Superficie de terreno', value: '960 m²' },
      { label: 'Construcción cubierta', value: '510 m²' },
      { label: 'Eslora máxima de atraque', value: '55 pies' },
      { label: 'Rendimiento estimado', value: '13.6 % anual' },
      { label: 'Régimen jurídico', value: 'Escritura + Concesión' },
      { label: 'Coordenadas', value: '20°57′38″N 97°21′10″O' },
    ],
  },
  {
    id: 'pabellon-reyes-heroles-03',
    code: 'TXP-CM-008',
    title: 'Pabellón Comercial Caleta',
    zone: 'Bulevar Ribereño · Zona Centro',
    category: 'Desarrollo Mixto',
    priceMxn: 34800000,
    areaSqm: 2150,
    roiPercent: 15.8,
    horizonYears: 6,
    legalStatus: 'Escritura Pública · Uso de Suelo Mixto',
    summary:
      'Complejo boutique de dos niveles con locales gastronómicos en patio central y ocho suites ejecutivas para directivos portuarios y navieros.',
    image: commercePavilionImg,
    imageAlt: 'Pabellón Comercial Caleta con columnatas de piedra caliza y terraza.',
    highlights: [
      'Contratos de arrendamiento corporativo vigentes al 88 %',
      '24 cajones de estacionamiento sombreados en subsuelo ligero',
      'Fachada arquitectónica en piedra caliza con mantenimiento mínimo',
    ],
    specs: [
      { label: 'Superficie de terreno', value: '2,150 m²' },
      { label: 'Área rentable (GLA)', value: '1,640 m²' },
      { label: 'Unidades comerciales', value: '6 locales + 8 suites' },
      { label: 'Rendimiento estimado', value: '15.8 % anual' },
      { label: 'Régimen jurídico', value: 'Escritura Pública' },
      { label: 'Coordenadas', value: '20°57′14″N 97°24′11″O' },
    ],
  },
  {
    id: 'macrolote-portuario-04',
    code: 'TXP-LG-032',
    title: 'Macrolote Corredor Puerto Norte',
    zone: 'Acceso Terminal Portuaria · Km 6',
    category: 'Lotes Comerciales',
    priceMxn: 42000000,
    areaSqm: 12500,
    roiPercent: 16.4,
    horizonYears: 4,
    legalStatus: 'Escritura Pública · Dictamen Industrial',
    summary:
      'Reserva territorial estratégica a pie de vía rápida portuaria, apta para patio de contenedores, centro de distribución o recinto fiscalizado.',
    image: portMaritimeImg,
    imageAlt: 'Corredor logístico junto a las terminales portuarias de Tuxpan.',
    highlights: [
      'Frente de 110 metros sobre vialidad de alto tonelaje',
      'Factibilidad eléctrica de media tensión y drenaje pluvial industrial',
      'Enlace directo sin cruce urbano hacia la autopista México–Tuxpan',
    ],
    specs: [
      { label: 'Superficie total', value: '12,500 m²' },
      { label: 'Frente carretero', value: '110.0 m' },
      { label: 'Distancia a muelle', value: '3.2 km' },
      { label: 'Rendimiento estimado', value: '16.4 % anual' },
      { label: 'Régimen jurídico', value: 'Escritura Pública' },
      { label: 'Coordenadas', value: '20°58′25″N 97°20′08″O' },
    ],
  },
  {
    id: 'lote-arrecife-sur-05',
    code: 'TXP-BP-019',
    title: 'Terreno Frente de Mar Playa Azul',
    zone: 'Barra Sur · Playa Azul',
    category: 'Frente de Playa',
    priceMxn: 14900000,
    areaSqm: 1850,
    roiPercent: 12.9,
    horizonYears: 5,
    legalStatus: 'Escritura Pública · ZOFEMAT en Trámite Cedido',
    summary:
      'Predio plano frente al mar de arena dorada ideal para hotel boutique de 12 llaves o residencia familiar con cancha y club privado.',
    image: tourismLobosImg,
    imageAlt: 'Litoral cristalino y playa virgen frente a lote patrimonial en Barra Sur.',
    highlights: [
      '35 metros lineales de frente directo al Golfo de México',
      'Topografía estable sobre cota segura de marea',
      'Factibilidad de subdivisión en hasta tres villas independientes',
    ],
    specs: [
      { label: 'Superficie de terreno', value: '1,850 m²' },
      { label: 'Frente de playa', value: '35.0 m' },
      { label: 'Coeficiente COS / CUS', value: '0.45 / 0.90' },
      { label: 'Rendimiento estimado', value: '12.9 % anual' },
      { label: 'Régimen jurídico', value: 'Escritura Pública' },
      { label: 'Coordenadas', value: '20°55′10″N 97°19′42″O' },
    ],
  },
  {
    id: 'residencia-isla-idolo-06',
    code: 'TXP-MN-027',
    title: 'Club & Lotes Estero del Ídolo',
    zone: 'Isla del Ídolo · Ribera Sur',
    category: 'Residencial Náutico',
    priceMxn: 11800000,
    areaSqm: 1100,
    roiPercent: 13.1,
    horizonYears: 5,
    legalStatus: 'Escritura Pública · Condominio Náutico',
    summary:
      'Lote residencial urbanizado dentro de coto privado rodeado de manglar protegido, con rampa náutica común y casa club frente al estero.',
    image: estateVillaImg,
    imageAlt: 'Arquitectura residencial serena rodeada de vegetación costera en Estero del Ídolo.',
    highlights: [
      'Entorno de privacidad absoluta con acceso controlado por agua y tierra',
      'Instalaciones subterráneas, fibra óptica y planta de tratamiento propia',
      'Alta demanda entre navegantes y propietarios de yates de fin de semana',
    ],
    specs: [
      { label: 'Superficie de terreno', value: '1,100 m²' },
      { label: 'Frente de canal', value: '22.0 m' },
      { label: 'Cuota de mantenimiento', value: '$6,500 MXN/mes' },
      { label: 'Rendimiento estimado', value: '13.1 % anual' },
      { label: 'Régimen jurídico', value: 'Condominio Escriturado' },
      { label: 'Coordenadas', value: '20°56′02″N 97°21′55″O' },
    ],
  },
];

export const PORT_FACILITY_METRICS: PortFacilityMetric[] = [
  {
    id: 'tpt',
    terminal: 'Terminal Portuaria Tuxpan (TPT)',
    sector: 'Contenedores y Carga General',
    draftMeters: 15.0,
    capacityLabel: '750,000 TEU/año',
    transitCdmx: '2 h 45 min',
    annualGrowth: '+11.4 %',
    status: 'Operación Continua',
  },
  {
    id: 'tml',
    terminal: 'Terminal Marítima de Fluidos Norte',
    sector: 'Hidrocarburos y Químicos Limpios',
    draftMeters: 14.5,
    capacityLabel: '2.4 M ton/año',
    transitCdmx: '2 h 50 min',
    annualGrowth: '+8.2 %',
    status: 'Operación Continua',
  },
  {
    id: 'autos',
    terminal: 'Muelle Ro-Ro Golfo Oriental',
    sector: 'Automotriz y Maquinaria Pesada',
    draftMeters: 13.8,
    capacityLabel: '185,000 unidades/año',
    transitCdmx: '2 h 40 min',
    annualGrowth: '+14.6 %',
    status: 'Expansión Fase II',
  },
  {
    id: 'parque-km6',
    terminal: 'Parque Logístico Kilómetro 6',
    sector: 'Recinto Fiscalizado y Última Milla',
    draftMeters: 15.0,
    capacityLabel: '140,000 m² techados',
    transitCdmx: '2 h 35 min',
    annualGrowth: '+16.1 %',
    status: 'Disponibilidad Activa',
  },
];

export const TOURISM_EXPERIENCES: TourismExperience[] = [
  {
    id: 'expedicion-isla-lobos',
    kicker: 'SANTUARIO ARRECIFAL',
    title: 'Travesía Privada a Isla de Lobos',
    location: 'Arrecife Isla de Lobos · 45 min mar adentro',
    category: 'Náutico y Arrecifes',
    season: 'Marzo — Septiembre',
    duration: 'Jornada completa (7 h)',
    coordinates: '21°28′15″N 97°13′35″O',
    summary:
      'Navegación matutina en yate o velero hacia el cayo coralino más septentrional de Veracruz, con buceo de baja profundidad y almuerzo de costa a bordo.',
    details:
      'Incluye zarpe desde marina privada en el río Tuxpan, capitán certificado, equipo de esnórquel y permisos de ingreso al área protegida.',
    image: tourismLobosImg,
    imageAlt: 'Isla de Lobos y velero sobre aguas turquesas de arrecife.',
    highlights: [
      'Visibilidad submarina promedio de 18 a 24 metros en temporada calma',
      'Banco de arena blanca protegido ideal para fondeo familiar',
      'Avistamiento frecuente de tortuga carey y delfines nariz de botella',
    ],
  },
  {
    id: 'navegacion-rio-tuxpan',
    kicker: 'MARINA Y ESTUARIO',
    title: 'Navegación al Ocaso por el Río Tuxpan',
    location: 'Ribera Norte y Bocana del Estuario',
    category: 'Náutico y Arrecifes',
    season: 'Todo el año',
    duration: 'Tarde privada (3.5 h)',
    coordinates: '20°57′45″N 97°20′12″O',
    summary:
      'Recorrido panorámico desde los astilleros históricos hasta los canales de manglar de Tampamachoco con degustación de destilados y mariscos.',
    details:
      'Diseñado para inversionistas y huéspedes que desean conocer los frentes fluviales, muelles privados y reservas de tierra desde el agua.',
    image: heroMarinaImg,
    imageAlt: 'Yates y malecón iluminado por la luz dorada del atardecer en el río Tuxpan.',
    highlights: [
      'Aguas tranquilas protegidas los 365 días del año',
      'Inspección directa de predios ribereños con frente de canal',
      'Cierre en terraza privada sobre el malecón gastronómico',
    ],
  },
  {
    id: 'club-playa-barra-norte',
    kicker: 'HOSPITALIDAD COSTERA',
    title: 'Estancia Arquitectónica en Barra Norte',
    location: 'Corredor Playa Barra Norte',
    category: 'Hospitalidad y Playa',
    season: 'Todo el año',
    duration: 'Fin de semana (3 días)',
    coordinates: '20°59′40″N 97°18′22″O',
    summary:
      'Casas frente al mar con servicio de concierge, chef privado y camas balinesas sobre playas de pendiente suave y oleaje amable.',
    details:
      'Ideal para escapadas desde Ciudad de México o Puebla con conectividad directa y privacidad frente a desarrollos de baja escala.',
    image: estateVillaImg,
    imageAlt: 'Villa frente al mar con alberca infinita en Barra Norte, Tuxpan.',
    highlights: [
      'Trayecto de puerta a puerta inferior a 3 horas desde Polanco o Santa Fe',
      'Playas amplias sin saturación comercial ni vendedores ambulantes',
      'Servicio curado de masajes frente al mar y fogatas nocturnas',
    ],
  },
  {
    id: 'mesa-huasteca-contemporanea',
    kicker: 'GASTRONOMÍA DE AUTOR',
    title: 'Mesa Huasteca y Mariscos del Golfo',
    location: 'Pabellones del Bulevar Ribereño',
    category: 'Gastronomía y Cultura',
    season: 'Todo el año',
    duration: 'Experiencia culinaria (2.5 h)',
    coordinates: '20°57′18″N 97°24′05″O',
    summary:
      'Cocina de producto local: robalo a la talla en hoja santa, jaiba suave de laguna, bocoles artesanales y café de altura de la sierra vecina.',
    details:
      'Selección de mesas privadas y terrazas con arquitectura en piedra caliza pensadas para cenas de negocios y encuentros culturales.',
    image: commercePavilionImg,
    imageAlt: 'Terraza arquitectónica sombreada con mesas para gastronomía regional.',
    highlights: [
      'Pesca del día suministrada por cooperativas certificadas de Tamiahua y Tuxpan',
      'Cava curada con etiquetas mexicanas del Valle de Guadalupe y Parras',
      'Salones reservados para reuniones de consejo e inversionistas',
    ],
  },
];
