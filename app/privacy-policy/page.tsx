import LegalPage from '@/components/LegalPage';
import { seo } from '@/lib/seo';

export const metadata = seo({
  title: 'Privacy Policy | Procor Compliance Solutions LLP',
  description: 'How Procor Compliance Solutions LLP collects, uses, shares and protects personal data under the IT Act, 2000 and the DPDP Act, 2023, and how to exercise your rights.',
  path: '/privacy-policy/',
});
export default function Page() { return <LegalPage slug="privacy-policy" />; }
