export interface Specialty {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  tags: string[];
}

export interface Review {
  id: string;
  name: string;
  date: string;
  stars: number;
  text: string;
  treatment: string;
}

export interface ValuePillar {
  id: string;
  title: string;
  desc: string;
  iconName: 'stethoscope' | 'leaf' | 'handshake' | 'book';
}

export const CLINIC_INFO = {
  name: 'Odontología Eco San Telmo',
  brandName: 'Odontología Eco',
  slogan: 'Cuidar tu sonrisa y el planeta, es amor propio',
  phoneDisplay: '011 15-5863-3597',
  phoneRaw: '0111558633597',
  whatsappRaw: '5491158633597',
  address: 'Estados Unidos 693, Cdad. Autónoma de Buenos Aires',
  neighborhood: 'San Telmo, Ciudad Autónoma de Buenos Aires',
  postalCode: 'C1101AAM',
  website: 'https://odontologiaeco.com/',
  rating: '5.0',
  reviewCount: '+65',
  yearsExperience: '12+',
  hours: 'Lunes a Viernes de 09:00 a 19:00 hs',
  mapQueryUrl: 'https://maps.google.com/?q=Estados+Unidos+693,+San+Telmo,+Buenos+Aires'
};

export const VALUE_PILLARS: ValuePillar[] = [
  {
    id: 'excelencia',
    title: 'Excelencia Profesional',
    desc: 'Odontólogos especializados con formación continua y equipamiento de precisión para diagnósticos rigurosos.',
    iconName: 'stethoscope'
  },
  {
    id: 'ecologia',
    title: 'Compromiso Ecológico',
    desc: 'Odontología sustentable: reducción activa de residuos plásticos, biomateriales y respeto por el medio ambiente.',
    iconName: 'leaf'
  },
  {
    id: 'atencion',
    title: 'Atención Personalizada',
    desc: 'Atención cálida y sin apuros. Evaluamos cada caso de forma integral entendiendo tus tiempos y necesidades.',
    iconName: 'handshake'
  },
  {
    id: 'educacion',
    title: 'Educación al Paciente',
    desc: 'Te explicamos cada paso del tratamiento con total claridad y promovemos hábitos de prevención duraderos.',
    iconName: 'book'
  }
];

export const SPECIALTIES: Specialty[] = [
  {
    id: 'estetica',
    title: 'Estética Dental & Blanqueamiento',
    subtitle: 'Sonrisas luminosas y armónicas',
    description: 'Carillas y aclaramiento dental con geles seguros que cuidan tu esmalte y devuelven la luminosidad natural de tus dientes.',
    image: '/images/coral-estetica.webp',
    tags: ['Blanqueamiento Seguro', 'Carillas Estéticas', 'Biocompatible']
  },
  {
    id: 'ortodoncia',
    title: 'Ortodoncia & Alineadores Invisibles',
    subtitle: 'Alineación moderna y discreta',
    description: 'Corrección estética y funcional de tu mordida con placas alineadoras transparentes y cómodas para tu rutina diaria.',
    image: '/images/coral-ortodoncia.webp',
    tags: ['Alineadores Transparentes', 'Control Oclusal', 'Estética']
  },
  {
    id: 'implantes',
    title: 'Implantes Odontológicos',
    subtitle: 'Rehabilitación fija y duradera',
    description: 'Recuperá tus piezas dentales con implantes de titanio de máxima pureza biológica, función masticatoria óptima y estética idéntica a tus dientes naturales.',
    image: '/images/coral-implantes.webp',
    tags: ['Implantes Biocompatibles', 'Carga Inmediata', 'Integración Ósea']
  },
  {
    id: 'protesis',
    title: 'Rehabilitación & Prótesis Libres de Metal',
    subtitle: 'Zirconio y cerámicas puras',
    description: 'Coronas, incrustaciones y puentes diseñados con materiales de alta estética que respetan tus encías y no generan toxicidad.',
    image: '/images/coral-protesis.webp',
    tags: ['Coronas en Zirconio', 'Libre de Metal', 'Armonía Gingival']
  },
  {
    id: 'endodoncia',
    title: 'Endodoncia Mecanizada sin dolor',
    subtitle: 'Salvamos tus piezas dentales',
    description: 'Tratamiento de conductos con instrumental rotatorio digital de última tecnología, reduciendo tiempos clínicos al mínimo.',
    image: '/images/coral-tech.webp',
    tags: ['Tratamiento de Conducto', 'Localizador Digital', 'Sin Dolor']
  },
  {
    id: 'periodoncia',
    title: 'Periodoncia & Profilaxis Consciente',
    subtitle: 'Salud de encías y prevención',
    description: 'Limpiezas ultrasónicas no invasivas y tratamiento de gingivitis para mantener las bases de tu sonrisa firmes y saludables.',
    image: '/images/coral-periodoncia.webp',
    tags: ['Limpieza Ultrasónica', 'Cuidado de Encías', 'Prevención']
  },
  {
    id: 'cirugia',
    title: 'Cirugía Odontológica Menor',
    subtitle: 'Extracciones atraumáticas y seguras',
    description: 'Extracción de muelas de juicio y procedimientos gingivales con anestesia localizada de efecto prolongado y excelente postoperatorio.',
    image: '/images/coral-cirugia.webp',
    tags: ['Muelas de Juicio', 'Técnica Atraumática', 'Rápida Recuperación']
  },
  {
    id: 'urgencias',
    title: 'Urgencias Odontológicas',
    subtitle: 'Respuesta inmediata ante dolor o fractura',
    description: 'Prioridad de turno para situaciones de dolor agudo, roturas o pérdida de restauraciones en pleno San Telmo.',
    image: '/images/coral-urgencias.webp',
    tags: ['Alivio Inmediato', 'Guardia de Turno', 'Resolución en el Día']
  }
];

export const OBRAS_SOCIALES = [
  { name: 'OSDE', badge: 'Planes y Reintegros' },
  { name: 'Swiss Medical', badge: 'Cobertura Odontológica' },
  { name: 'Galeno', badge: 'Asistencia y Reintegro' },
  { name: 'Medifé', badge: 'Planes Médicos' },
  { name: 'OMINT', badge: 'Salud Integral' }
];

export const REVIEWS: Review[] = [
  {
    id: '1',
    name: 'Florencia V.',
    date: 'Hace 1 semana',
    stars: 5,
    text: 'Hermoso espacio en pleno San Telmo. Tienen una calidez única para atenderte y me encantó la conciencia ecológica que tienen con los materiales y los residuos. Me hicieron un blanqueamiento y quedé feliz con los resultados.',
    treatment: 'Blanqueamiento & Limpieza'
  },
  {
    id: '2',
    name: 'Matías L.',
    date: 'Hace 3 semanas',
    stars: 5,
    text: 'Fui por una urgencia que no me dejaba dormir y me recibieron enseguida en Estados Unidos 693. Cero dolor, explicaciones súper claras de lo que me iban haciendo y un trato super empático. Muy recomendables.',
    treatment: 'Urgencia & Tratamiento de Conducto'
  },
  {
    id: '3',
    name: 'Valeria R.',
    date: 'Hace 1 mes',
    stars: 5,
    text: 'Me coloqué implantes y coronas sin metal. Desde la primera consulta me explicaron todo con paciencia. Sentís que te cuidan de verdad y no te intentan vender tratamientos innecesarios. El lema de cuidar la sonrisa y el planeta lo cumplen al 100%.',
    treatment: 'Implantes & Prótesis Zirconio'
  }
];

export function getWhatsAppUrl(reason?: string): string {
  let text = 'Hola Odontología Eco San Telmo! ';
  if (reason) {
    text += `Quisiera consultar información y coordinar un turno para *${reason}*.`;
  } else {
    text += 'Quisiera consultar por disponibilidad de turnos en el consultorio de San Telmo (Estados Unidos 693).';
  }
  return `https://wa.me/${CLINIC_INFO.whatsappRaw}?text=${encodeURIComponent(text)}`;
}
