import { Link } from 'react-router-dom';

const QUICK_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Explore Entrepreneurs', to: '/entrepreneurs' },
  { label: 'Services', to: '/entrepreneurs' },
  { label: 'Products', to: '/products' },
  { label: 'How It Works', to: '/#how-it-works' },
  { label: 'About Us', to: '/about' },
  { label: 'Contact Us', to: '/contact' },
];

const CATEGORY_LINKS = ['Cobbler', 'Potter (Kumhar)', 'Tailor', 'Artisan', 'Woodcraft', 'Jewelry', 'Small Vendors'];
const ENTREPRENEUR_LINKS = [
  { label: 'Register Now', to: '/signup' },
  { label: 'Entrepreneur Login', to: '/login' },
  { label: 'How to Join', to: '/signup' },
  { label: 'Help Center', to: '/contact' },
  { label: 'Resources', to: '/about' },
];
const SUPPORT_LINKS = [
  { label: 'Help & FAQ', to: '/contact' },
  { label: 'Terms & Conditions', to: '/about' },
  { label: 'Privacy Policy', to: '/about' },
  { label: 'Refund Policy', to: '/about' },
  { label: 'Contact Support', to: '/contact' },
];

const SOCIAL_ICONS = [
  { name: 'Facebook', path: 'M13.5 21v-7.5h2.5l.4-3H13.5V8.5c0-.87.24-1.46 1.5-1.46h1.6V4.36C16.3 4.25 15.32 4 14.2 4 11.87 4 10.3 5.4 10.3 8.2v2.3H7.8v3h2.5V21h3.2Z' },
  { name: 'Instagram', path: 'M8 3h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm4 3.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm0 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM17.5 6.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z' },
  { name: 'Twitter', path: 'M20 6.4c-.6.27-1.2.45-1.87.53a3.28 3.28 0 0 0 1.43-1.8c-.63.37-1.32.64-2.06.79A3.24 3.24 0 0 0 12 8.6c0 .26.03.5.08.74a9.2 9.2 0 0 1-6.7-3.4 3.24 3.24 0 0 0 1 4.33 3.2 3.2 0 0 1-1.47-.4v.04c0 1.58 1.12 2.9 2.62 3.2a3.3 3.3 0 0 1-1.46.06 3.25 3.25 0 0 0 3.03 2.26A6.5 6.5 0 0 1 4 16.6a9.17 9.17 0 0 0 4.97 1.46c5.96 0 9.22-4.94 9.22-9.22l-.01-.42A6.6 6.6 0 0 0 20 6.4Z' },
  { name: 'LinkedIn', path: 'M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM3 10h4v11H3V10Zm7 0h3.8v1.5h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.5 4.78 5.76V21h-4v-5.02c0-1.2-.02-2.75-1.68-2.75-1.68 0-1.94 1.3-1.94 2.66V21h-4V10Z' },
  { name: 'YouTube', path: 'M21.6 7.7a2.7 2.7 0 0 0-1.9-1.9C18 5.3 12 5.3 12 5.3s-6 0-7.7.5A2.7 2.7 0 0 0 2.4 7.7 28 28 0 0 0 2 12a28 28 0 0 0 .4 4.3 2.7 2.7 0 0 0 1.9 1.9c1.7.5 7.7.5 7.7.5s6 0 7.7-.5a2.7 2.7 0 0 0 1.9-1.9c.3-1.4.4-2.9.4-4.3a28 28 0 0 0-.4-4.3ZM10 15V9l5.2 3-5.2 3Z' },
];

function FooterColumn({ title, links }) {
  return (
    <div>
      <p className="font-semibold text-white mb-4 text-sm">{title}</p>
      <ul className="space-y-2.5">
        {links.map((l) => (
          <li key={l.label}>
            <Link to={l.to} className="hover:text-white transition">{l.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-forest-dark text-white/70 text-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14 grid sm:grid-cols-2 lg:grid-cols-5 gap-10">
        <div>
          <p className="font-display font-semibold text-lg text-white mb-1">HunarHub</p>
          <p className="text-xs text-white/40 mb-4">Skills. Services. Support Local.</p>
          <p className="text-xs leading-relaxed mb-5">
            HunarHub is a digital marketplace empowering micro-entrepreneurs and connecting them with customers worldwide.
          </p>
          <div className="flex gap-3">
            {SOCIAL_ICONS.map((s) => (
              <span key={s.name} className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition cursor-pointer">
                <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor" aria-label={s.name}>
                  <path d={s.path} />
                </svg>
              </span>
            ))}
          </div>
        </div>

        <FooterColumn title="Quick Links" links={QUICK_LINKS} />
        <FooterColumn
          title="Categories"
          links={[
            ...CATEGORY_LINKS.map((c) => ({ label: c, to: `/entrepreneurs?category=${encodeURIComponent(c)}` })),
            { label: 'View All', to: '/entrepreneurs' },
          ]}
        />
        <FooterColumn title="For Entrepreneurs" links={ENTREPRENEUR_LINKS} />
        <FooterColumn title="Support" links={SUPPORT_LINKS} />
      </div>

      <div className="border-t border-white/10 px-6 lg:px-10 py-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-white/40">
        <p>© 2025 HunarHub. All rights reserved.</p>
        <p>Made with ❤️ for local communities</p>
      </div>
    </footer>
  );
}