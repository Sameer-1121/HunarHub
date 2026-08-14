import { Link } from 'react-router-dom';

export default function CtaBanner() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-10 pb-16">
      <div className="relative overflow-hidden rounded-2xl bg-terracotta px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-white text-center sm:text-left">
          <h3 className="font-display font-semibold text-2xl mb-2">Join HunarHub Today</h3>
          <p className="text-white/80 text-sm max-w-md">
            Be a part of a community that values skills, supports local businesses, and builds a stronger tomorrow.
          </p>
        </div>
        <div className="flex gap-3 shrink-0">
          <Link to="/signup" className="px-5 py-2.5 rounded-full bg-white text-terracotta text-sm font-semibold hover:bg-cream transition">
            Join as Entrepreneur
          </Link>
          <Link to="/entrepreneurs" className="px-5 py-2.5 rounded-full border border-white text-white text-sm font-semibold hover:bg-white/10 transition">
            Explore Now
          </Link>
        </div>
      </div>
    </section>
  );
}