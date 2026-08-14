import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ENTREPRENEURS } from '../data/entrepreneurs';
import { useAuth } from '../context/AuthContext';
import { useRequests } from '../context/RequestsContext';
import { useListings } from '../context/ListingsContext';
import ReviewSection from '../components/ReviewSection';

export default function EntrepreneurProfile() {
  const { id } = useParams();
  const entrepreneur = ENTREPRENEURS.find((e) => e.id === Number(id));
  const { user } = useAuth();
  const { addRequest } = useRequests();
  const { listings } = useListings();
  const navigate = useNavigate();

  const dynamicListings = entrepreneur
    ? listings.filter((l) => l.entrepreneurName === entrepreneur.name)
    : [];

  const allServices = entrepreneur
    ? [
        ...entrepreneur.services,
        ...dynamicListings.map((l) => ({ name: l.name, price: l.price })),
      ]
    : [];

  const [selectedService, setSelectedService] = useState(entrepreneur?.services[0]?.name || '');
  const [submitted, setSubmitted] = useState(false);

  if (!entrepreneur) {
    return (
      <section className="max-w-3xl mx-auto px-6 py-20 text-center">
        <p className="text-black/50 mb-4">Entrepreneur not found.</p>
        <Link to="/entrepreneurs" className="text-forest font-medium hover:underline">← Back to Browse</Link>
      </section>
    );
  }

  function handleRequest() {
    if (!user) {
      navigate('/login');
      return;
    }
    addRequest({
      customerName: user.name,
      customerEmail: user.email,
      entrepreneurId: entrepreneur.id,
      entrepreneurName: entrepreneur.name,
      service: selectedService,
    });
    setSubmitted(true);
  }

  return (
    <section className="max-w-5xl mx-auto px-6 lg:px-10 py-12">
      <Link to="/entrepreneurs" className="text-sm text-forest font-medium hover:underline mb-6 inline-block">
        ← Back to Browse
      </Link>

      <div className="grid md:grid-cols-3 gap-8 mb-10">
        <img
          src={`https://picsum.photos/seed/${entrepreneur.img}/500/500`}
          alt={entrepreneur.name}
          className="w-full h-56 md:h-full object-cover rounded-2xl"
        />
        <div className="md:col-span-2">
          <p className="text-xs font-medium text-terracotta mb-1">{entrepreneur.category}</p>
          <h1 className="font-display font-semibold text-3xl mb-2">{entrepreneur.name}</h1>
          <p className="text-sm text-black/50 mb-4">{entrepreneur.location} · {entrepreneur.experience} experience</p>
          <p className="text-black/70 text-sm leading-relaxed mb-6">{entrepreneur.bio}</p>

          {submitted ? (
            <div className="border border-forest/20 bg-cream rounded-xl p-4">
              <p className="text-sm font-semibold text-forest mb-1">Request sent!</p>
              <p className="text-xs text-black/50">{entrepreneur.name} will respond to your request soon. Check your dashboard for updates.</p>
            </div>
          ) : (
            <div className="flex flex-wrap items-center gap-3">
              <select
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                className="px-4 py-2.5 text-sm border border-black/10 rounded-lg outline-none"
              >
                {allServices.map((s) => <option key={s.name}>{s.name}</option>)}
              </select>
              <button
                onClick={handleRequest}
                className="px-6 py-2.5 rounded-full bg-forest text-white font-medium hover:bg-forest-dark transition"
              >
                Request this Service
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="mb-10">
        <h2 className="font-display font-semibold text-xl mb-4">Services Offered</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {allServices.map((s) => (
            <div key={s.name} className="border border-black/5 rounded-xl p-4 flex items-center justify-between">
              <span className="font-medium text-sm">{s.name}</span>
              <span className="text-sm text-black/60">{s.price}</span>
            </div>
          ))}
        </div>
      </div>

      <ReviewSection targetType="entrepreneur" targetId={entrepreneur.id} baseRating={entrepreneur.rating} />
    </section>
  );
}