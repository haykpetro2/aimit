import DesignIcon from '../../../svgs/DesignIcon';
import DevelopmentIcon from '../../../svgs/DevelopmentIcon';
import MarketingIcon from '../../../svgs/MarketingIcon';
import CloudIcon from '../../../svgs/CloudIcon';
import SupportIcon from '../../../svgs/SupportIcon';

export const childShowLength = 4;

export const serviceList = [
  {
    id: 1,
    title: 'serviceDesign',
    routName: 'design',
    Icon: DesignIcon,
    child: ['Web & desktop design', 'Redisgn', 'Mobile app design'],
  },
  {
    id: 2,
    title: 'development',
    routName: 'development',
    Icon: DevelopmentIcon,
    child: ['Websites', 'CRM', 'eCommerce', 'Web portals'],
  },
  {
    id: 3,
    title: 'marketing',
    routName: 'marketing',
    Icon: MarketingIcon,
    child: ['SEO', 'PPC', 'SMM'],
  },
  {
    id: 4,
    title: 'Cloud DevOps',
    routName: 'cloud-devops',
    Icon: CloudIcon,
    child: ['cloud Migration', 'cloud-Native', 'cloud Leadership'],
  },
  {
    id: 5,
    title: 'support',
    routName: 'support',
    Icon: SupportIcon,
    child: ['Technical', 'Content'],
  },
];

export const routList = [
  {
    id: 1,
    href: '/case-studies',
    title: 'caseStudies',
  },
  {
    id: 2,
    href: '/about-us',
    title: 'aboutUs',
  },
  {
    id: 3,
    href: '/team',
    title: 'Team',
  },
  {
    id: 4,
    href: '/blog',
    title: 'blog',
  },
  {
    id: 5,
    href: '/careers',
    title: 'careers',
  },
  {
    id: 6,
    href: '/contact-us',
    title: 'contactUs',
  },
];
