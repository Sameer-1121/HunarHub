export default function AboutUs() {
  return (
    <section className="max-w-4xl mx-auto px-6 lg:px-10 py-16">
      <h1 className="font-display font-semibold text-3xl mb-4">About HunarHub</h1>
      <p className="text-black/60 text-sm leading-relaxed mb-6">
        HunarHub is a digital marketplace built to give local micro-entrepreneurs — cobblers, potters, tailors,
        artisans, and small vendors — the digital visibility they've long been missing. Millions of skilled workers
        rely on foot traffic and word-of-mouth alone, which limits their income and growth.
      </p>
      <p className="text-black/60 text-sm leading-relaxed mb-10">
        We connect these entrepreneurs directly with customers who want to discover and support local talent —
        no middlemen, no barriers, just skills meeting demand.
      </p>

      <div className="grid sm:grid-cols-3 gap-6 mb-10">
        <div className="border border-black/5 rounded-xl p-5 text-center">
          <p className="font-display font-bold text-2xl mb-1">10,000+</p>
          <p className="text-xs text-black/50">Registered Entrepreneurs</p>
        </div>
        <div className="border border-black/5 rounded-xl p-5 text-center">
          <p className="font-display font-bold text-2xl mb-1">50,000+</p>
          <p className="text-xs text-black/50">Happy Customers</p>
        </div>
        <div className="border border-black/5 rounded-xl p-5 text-center">
          <p className="font-display font-bold text-2xl mb-1">4.8 ⭐</p>
          <p className="text-xs text-black/50">Average Rating</p>
        </div>
      </div>

      <h2 className="font-display font-semibold text-xl mb-3">Our Mission</h2>
      <p className="text-black/60 text-sm leading-relaxed">
        To digitally empower every local micro-entrepreneur, preserve traditional skills, and build stronger,
        more self-reliant local economies — one connection at a time.
      </p>
    </section>
  );
}