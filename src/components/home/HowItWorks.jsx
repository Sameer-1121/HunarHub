import { Search, Users, CalendarCheck, CheckCircle2, Gift, Star } from 'lucide-react';

const STEPS = [
  { step: 1, title: 'Explore', desc: 'Search for services or products you need', Icon: Search },
  { step: 2, title: 'Connect', desc: 'View profiles and contact entrepreneurs', Icon: Users },
  { step: 3, title: 'Book / Order', desc: 'Place service request or order products', Icon: CalendarCheck },
  { step: 4, title: 'Confirm', desc: 'Entrepreneur accepts your request', Icon: CheckCircle2 },
  { step: 5, title: 'Complete', desc: 'Service delivered or product received', Icon: Gift },
  { step: 6, title: 'Review', desc: 'Rate and give feedback to support growth', Icon: Star },
];

export default function HowItWorks() {
  return (
    <section className="bg-cream/50 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-12">
          <p className="text-xs tracking-wide text-terracotta font-medium mb-2">⟿ Process ⟿</p>
          <h2 className="font-display font-semibold text-3xl">How HunarHub Works</h2>
        </div>

        <div className="flex flex-wrap justify-center items-start gap-x-2 gap-y-10">
          {STEPS.map((s, i) => (
            <div key={s.step} className="flex items-start">
              <div className="flex flex-col items-center text-center w-36">
                <span className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center mb-4">
                  <s.Icon size={22} className="text-forest" strokeWidth={1.5} />
                </span>
                <p className="text-sm font-semibold mb-1">{s.step}. {s.title}</p>
                <p className="text-xs text-black/50 leading-relaxed">{s.desc}</p>
              </div>
              {i < STEPS.length - 1 && (
                <span className="text-black/20 mt-7 hidden sm:block">→</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}