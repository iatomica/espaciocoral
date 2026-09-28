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

export const CLINIC_INFO = {
  name: 'Espacio Coral Odontología',
  doctorName: 'Dr. Juan Pablo Dorrego',
  phoneDisplay: '(0351) 259-8438',
  phoneRaw: '03512598438',
  whatsappRaw: '5493512598438',
  facebookUrl: 'https://www.facebook.com/odontologojuanpablodorrego/',
  address: 'Coral State Loft In Tower, Blvr. Mitre 517 11 H, X5000 Córdoba',
  rating: '5.0',
  reviewCount: '+75',
  yearsExperience: '15+',
  hours: 'Lunes a Viernes de 09:00 a 19:30 hs'
};

export const SPECIALTIES: Specialty[] = [
  {
    id: 'implantes',
    title: 'Implantes Odontológicos',
    subtitle: 'Rehabilitación fija y duradera',
    description: 'Recuperá tus piezas dentales perdidas con implantes de titanio de última generación, máxima fijación y estética natural.',
    image: '/images/coral-implantes.webp',
    tags: ['Implantes Unitarios', 'Carga Inmediata', 'Regeneración Ósea']
  },
  {
    id: 'ortodoncia',
    title: 'Ortodoncia & Alineación',
    subtitle: 'Alineadores invisibles y brackets',
    description: 'Corrección estética y funcional de la mordida para jóvenes y adultos, con placas alineadoras transparentes de alta comodidad.',
    image: '/images/coral-ortodoncia.webp',
    tags: ['Alineadores Transparentes', 'Brackets Zafiro', 'Control Oclusal']
  },
  {
    id: 'blanqueamiento',
    title: 'Blanqueamiento Dental & Estética',
    subtitle: 'Sonrisas brillantes y armónicas',
    description: 'Procedimientos de aclaramiento dental en consultorio y carillas cerámicas diseñadas para devolver la luminosidad a tu sonrisa.',
    image: '/images/coral-estetica.webp',
    tags: ['Aclaramiento LED', 'Carillas Estéticas', 'Microabrasión']
  },
  {
    id: 'endodoncia',
    title: 'Endodoncia Mecanizada',
    subtitle: 'Salvamos tus piezas dentales sin dolor',
    description: 'Tratamiento de conductos radiculares con instrumental rotatorio digital de precisión, reduciendo tiempos y eliminando molestias.',
    image: '/images/coral-tech.webp',
    tags: ['Tratamiento de Conducto', 'Localizador Apical', 'Sin Dolor']
  },
  {
    id: 'cirugia',
    title: 'Cirugía Odontológica',
    subtitle: 'Intervenciones ambulatorias seguras',
    description: 'Extracción de terceros molares (muelas de juicio), apicectomías y remodelación gingival con anestesia de última generación.',
    image: '/images/coral-cirugia.webp',
    tags: ['Muelas de Juicio', 'Cirugía Menor', 'Postoperatorio Cómodo']
  },
  {
    id: 'urgencias',
    title: 'Urgencias Odontológicas',
    subtitle: 'Atención ágil ante dolor o fractura',
    description: 'Prioridad de turno para situaciones de dolor agudo, piezas fracturadas o pérdida de restauraciones. Asistencia rápida y efectiva.',
    image: '/images/coral-urgencias.webp',
    tags: ['Alivio Inmediato', 'Guardia Programada', 'Resolución Rápida']
  },
  {
    id: 'protesis',
    title: 'Prótesis Dental & Rehabilitación',
    subtitle: 'Oclusión perfecta y natural',
    description: 'Coronas estéticas libres de metal en zirconio y disilicato de litio, puentes fijos y prótesis sobre implantes de alta fidelidad.',
    image: '/images/coral-protesis.webp',
    tags: ['Coronas en Zirconio', 'Prótesis Fija', 'Rehabilitación Integral']
  },
  {
    id: 'periodoncia',
    title: 'Periodoncia & Salud Gingival',
    subtitle: 'Cuidado y prevención del soporte dental',
    description: 'Tratamiento y control de sangrado de encías, gingivitis y periodontitis mediante limpieza ultrasónica indolora.',
    image: '/images/coral-periodoncia.webp',
    tags: ['Profilaxis Ultrasónica', 'Control Periodontal', 'Salud de Encías']
  }
];

export const OBRAS_SOCIALES = [
  { name: 'Swiss Medical', badge: 'Plan Médico' },
  { name: 'Galeno', badge: 'Cobertura' },
  { name: 'Medifé', badge: 'Planes' },
  { name: 'OMINT', badge: 'Asistencia' },
  { name: 'AcaSalud', badge: 'Salud Integral' }
];

export const REVIEWS: Review[] = [
  {
    id: '1',
    name: 'Carolina M.',
    date: 'Hace 2 semanas',
    stars: 5,
    text: 'Excelente profesional el Dr. Juan Pablo Dorrego. Me realicé dos implantes y el proceso fue completamente indoloro, con una dedicación increíble. Además el consultorio en la Torre Coral State tiene unas vistas hermosas que te relajan por completo.',
    treatment: 'Implantes & Rehabilitación'
  },
  {
    id: '2',
    name: 'Mariano F.',
    date: 'Hace 1 mes',
    stars: 5,
    text: 'Fui por una urgencia con un dolor insoportable y me atendió con una rapidez y amabilidad destacable. Me explicó todo el tratamiento paso a paso y me solucionó el problema en el acto. 100% recomendable.',
    treatment: 'Urgencia & Endodoncia'
  },
  {
    id: '3',
    name: 'Luciana T.',
    date: 'Hace 2 meses',
    stars: 5,
    text: 'Hice mi blanqueamiento dental y control periódico acá. Puntualidad impecable en los turnos, instalaciones super modernas y atención personalizada de primer nivel. No cambio de odontólogo nunca más.',
    treatment: 'Blanqueamiento & Estética'
  }
];

export function getWhatsAppUrl(reason?: string): string {
  let text = 'Hola Dr. Juan Pablo Dorrego (Espacio Coral)! ';
  if (reason) {
    text += `Quisiera consultar información y coordinar un turno para *${reason}*.`;
  } else {
    text += 'Quisiera consultar por un turno en el consultorio de Torre Coral State.';
  }
  return `https://wa.me/${CLINIC_INFO.whatsappRaw}?text=${encodeURIComponent(text)}`;
}
