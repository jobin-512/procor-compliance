import LegalPage from '@/components/LegalPage';
import { seo } from '@/lib/seo';

export const metadata = seo({
  title: 'Terms & Conditions | Procor Compliance Solutions LLP',
  description: 'Terms governing use of procor.co.in: information-only content, how engagements work, intellectual property, third-party links, liability and governing law.',
  path: '/terms/',
});
export default function Page() { return <LegalPage slug="terms" />; }
