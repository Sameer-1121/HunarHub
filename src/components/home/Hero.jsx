import { Link } from 'react-router-dom';
import { UserCheck, CalendarCheck, ShieldCheck, Users } from 'lucide-react';

export default function Hero() {
  return (
    <section className="bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14 lg:py-20 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-block text-xs font-medium text-terracotta bg-cream-deep px-3 py-1 rounded-full mb-5">
            ✦ Empowering Local Talent
          </span>
          <h1 className="font-display font-semibold text-4xl sm:text-5xl leading-[1.1] mb-5">
            Support Local.<br />
            <span className="text-terracotta">Empower Lives.</span>
          </h1>
          <p className="text-black/60 text-base leading-relaxed mb-8 max-w-md">
            HunarHub connects you with talented local micro-entrepreneurs.
            Book services, buy handmade products, and support traditional skills.
          </p>
          <div className="flex flex-wrap gap-3 mb-10">
            <Link to="/entrepreneurs" className="px-6 py-3 rounded-full bg-forest text-white font-medium hover:bg-forest-dark transition">
              Explore Services
            </Link>
            <Link to="/products" className="px-6 py-3 rounded-full border border-black/15 font-medium hover:bg-black/5 transition">
              Shop Products
            </Link>
          </div>
          <div className="flex flex-wrap gap-8 text-sm text-black/70">
            <div className="flex items-center gap-2"><UserCheck size={18} className="text-forest" /> Trusted Local Entrepreneurs</div>
            <div className="flex items-center gap-2"><CalendarCheck size={18} className="text-forest" /> Easy Service Bookings</div>
            <div className="flex items-center gap-2"><ShieldCheck size={18} className="text-forest" /> Secure &amp; Safe Transactions</div>
          </div>
        </div>

        <div className="relative">
          <div className="grid grid-cols-3 gap-3">
            <div className="col-span-2 row-span-2 rounded-2xl overflow-hidden aspect-[4/5]">
              <img src="https://picsum.photos/seed/cobbler-craft/500/620" alt="Cobbler at work" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden aspect-square">
              <img src="https://picsum.photos/seed/potter-craft/300/300" alt="Potter shaping clay" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden aspect-square">
              <img src="https://picsum.photos/seed/tailor-craft/300/300" alt="Tailor stitching" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 lg:left-8 lg:translate-x-0 bg-white rounded-2xl shadow-lg px-5 py-3 flex items-center gap-3">
            <span className="w-10 h-10 rounded-full bg-forest text-white flex items-center justify-center shrink-0">
              <Users size={18} />
            </span>
            <div className="leading-tight">
              <p className="font-semibold text-sm">10,000+</p>
              <p className="text-xs text-black/50">Local Entrepreneurs<br />Trust HunarHub</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}