export interface NavItem {
  name: string;
  href: string;
  description?: string;
}

export const navigationItems: NavItem[] = [
  {
    name: 'Home',
    href: '/',
    description: 'Welcome to SCSJ-IBED PAASCU 2026',
  },
  {
    name: 'School Profile',
    href: '/school-profile',
    description: 'Overview of our institution and community',
  },
  {
    name: 'Follow-up Action',
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
    name: 'Appendices',
    href: '/appendices',
    description: 'Supporting documents and references',
  },
  {
    name: 'Summary of Ratings',
    href: '/summary-of-ratings',
    description: 'Accreditation ratings overview',
  },
];
