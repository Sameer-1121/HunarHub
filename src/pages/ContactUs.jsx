import { useState } from 'react';

export default function ContactUs() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="max-w-2xl mx-auto px-6 lg:px-10 py-16">
      <h1 className="font-display font-semibold text-3xl mb-2">Contact Us</h1>
      <p className="text-black/50 text-sm mb-8">Have a question or feedback? We'd love to hear from you.</p>

      {submitted ? (
        <div className="border border-forest/20 bg-cream rounded-xl p-6 text-center">
          <p className="font-semibold text-forest mb-1">Thanks for reaching out!</p>
          <p className="text-sm text-black/50">We'll get back to you as soon as possible.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-black/60 mb-1">Name</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2.5 text-sm border border-black/10 rounded-lg outline-none"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-black/60 mb-1">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2.5 text-sm border border-black/10 rounded-lg outline-none"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-black/60 mb-1">Message</label>
            <textarea
              required
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-2.5 text-sm border border-black/10 rounded-lg outline-none resize-none"
            />
          </div>
          <button type="submit" className="w-full py-3 rounded-full bg-forest text-white font-medium hover:bg-forest-dark transition">
            Send Message
          </button>
        </form>
      )}
    </section>
  );
}