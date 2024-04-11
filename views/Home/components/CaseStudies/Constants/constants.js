const davClinicVariants = [
  'React JS',
  'Next',
  'Context',
  'React spa',
  'Redux Saga',
  'PHP',
  'Laravel',
  'Composer',
  'Mysql-8',
  'Nginx',
  'Redis',
  'Supervisor',
];
const mankanVariants = [
  'React JS',
  'Node JS',
  'Express JS',
  'PostgreSQL',
  'Elastic search',
  'MongoDB',
];
const moulkCrmVariants = [
  'React JS',
  'Redux',
  'Saga',
  'Firebase',
  'Express JS',
  'Reddis',
  'Mongo BD',
  'Elastic search',
  'PostgreSQL',
  'Node JS',
];

const moulkDeliveryVariants = ['React native', 'RX js'];

const moulkVariants = [
  'React JS',
  'Redux-Saga',
  'SCSS',
  'Ant Design',
  'Next',
  'PHP',
  'OOP',
  'LARAVEL',
  'JobQueue',
  'Mysql',
  'Docker',
  'Composer',
];

const mallsVariants = [
  'Node JS',
  'React JS',
  'Next JS',
  'Postgres',
  'PostgreSQL',
  'Elastic search',
];

const davLabVariants = ['PHP', 'OOP', 'Laravel', 'Api Integration', 'Amazon S3', 'JavaScript'];

export const StudiesList = [
  {
    id: 1,
    routName: '/dav-clinic',
    title: 'DavLab',
    variants: davLabVariants,
    description: 'caseStudiesDescPolyclinic',
    image: '/images/uploads/dav-clinic.png',
  },
  {
    id: 2,
    routName: '/dav-polyclinics',
    title: 'DavPolyclinics',
    variants: davClinicVariants,
    description: 'caseStudiesDescDav',
    image: '/images/uploads/dav-polyclinics.png',
  },
  {
    id: 3,
    routName: '/moulk-crm',
    title: 'MoulkCrm',
    variants: moulkCrmVariants,
    description: 'caseStudiesDescMoulkCrm',
    image: '/images/uploads/moulk-crm.png',
  },
  {
    id: 4,
    routName: '/moulk-delivery',
    title: 'MoulkDelivery',
    variants: moulkDeliveryVariants,
    description: 'caseStudiesDescMoulkDelivery',
    image: '/images/uploads/moulk-delivery.png',
  },
  {
    id: 5,
    routName: '/malls',
    title: 'Malls',
    variants: mallsVariants,
    description: 'caseStudiesDescMalls',
    image: '/images/uploads/malls.png',
  },
  {
    id: 6,
    routName: '/moulk',
    title: 'Moulk E-Commerce Platform',
    variants: moulkVariants,
    description: 'caseStudiesDescMoulk',
    image: '/images/uploads/moulk.png',
  },
  {
    id: 7,
    routName: '/mankan',
    title: 'Mankan',
    variants: mankanVariants,
    description: 'caseStudiesDescMankan',
    image: '/images/uploads/mankan.png',
  },
];
