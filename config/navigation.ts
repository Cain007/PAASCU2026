export interface NavItem {
  name: string;
  href?: string;
  description?: string;
  children?: Array<{
    name: string;
    href: string;
    description?: string;
  }>;
}

export const navigationItems: NavItem[] = [
  {
    name: 'Home',
    href: '/',
    description: 'Welcome to SCC Biñan PAASCU 2026',
  },
  {
    name: 'SCCB PAASCU Resurvey Visit',
    children: [
      {
        name: 'School Profile',
        href: '/school-profile',
        description: 'Overview of our institution and community',
      },
      {
        name: 'Follow-up Actions',
        href: '/follow-up-action',
        description: 'Action plans and implementation updates',
      },
      {
        name: 'Analysis of the School',
        href: '/analysis-of-the-school',
        description: 'Comprehensive institutional analysis',
      },
      {
        name: 'Conclusion',
        href: '/conclusion',
        description: 'Summary findings and recommendations',
      },
      {
        name: 'Summary of Appendices',
        href: '/appendices',
        description: 'Supporting documents and references',
      },
      {
        name: 'Summary of Ratings',
        href: '/summary-of-ratings',
        description: 'Accreditation ratings overview',
      },
    ],
  },
  {
    name: 'Other Resources for Accreditation',
    href: '/other-resources-for-accreditation',
  },
  {
    name: 'School Manuals',
    href: '/school-manuals',
  },
  {
    name: 'Directress/Principal Message',
    href: '/directress-principal-message',
  },
];
