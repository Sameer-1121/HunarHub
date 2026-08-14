import { HeartHandshake, ShieldCheck, MousePointerClick } from 'lucide-react';

const REASONS = [
  { title: 'Support Local Talent', desc: 'Empower local skills and traditional crafts', Icon: HeartHandshake },
  { title: 'Quality You Can Trust', desc: 'Verified entrepreneurs and quality services', Icon: ShieldCheck },
  { title: 'Easy & Convenient', desc: 'Book services or shop products in just a few clicks', Icon: MousePointerClick },
];

export default function WhyChooseUs() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-10 py-16 grid lg:grid-cols-2 gap-12 items-center">
      <div>
        <h2 className="font-display font-semibold text-3xl mb-8">Why Choose HunarHub?</h2>
        <div className="space-y-6">
          {REASONS.map((item) => (
            <div key={item.title} className="flex items-start gap-4">
              <span className="w-11 h-11 rounded-full bg-cream flex items-center justify-center shrink-0">
                <item.Icon size={20} className="text-terracotta" strokeWidth={1.5} />
              </span>
              <div>
                <p className="font-semibold text-sm mb-0.5">{item.title}</p>
                <p className="text-xs text-black/50">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex justify-center">
        <div className="w-64 h-64 rounded-full overflow-hidden ring-4 ring-cream">
          <img src="https://picsum.photos/seed/customer-app/400/400" alt="Customer using HunarHub" className="w-full h-full object-cover" />
        </div>
        <img src="https://picsum.photos/seed/potter-avatar/100/100" alt="" className="w-16 h-16 rounded-full object-cover absolute top-0 left-0 ring-4 ring-white" />
        <img src="https://picsum.photos/seed/tailor-avatar/100/100" alt="" className="w-16 h-16 rounded-full object-cover absolute top-4 right-0 ring-4 ring-white" />
        <img src="https://picsum.photos/seed/cobbler-avatar/100/100" alt="" className="w-16 h-16 rounded-full object-cover absolute bottom-0 right-6 ring-4 ring-white" />
      </div>
    </section>
  );
}