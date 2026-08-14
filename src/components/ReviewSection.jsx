import { useState } from 'react';
import { Star } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useReviews } from '../context/ReviewsContext';
import { Link } from 'react-router-dom';

export default function ReviewSection({ targetType, targetId, baseRating }) {
  const { user } = useAuth();
  const { getReviews, addReview } = useReviews();
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const reviews = getReviews(targetType, targetId);
  const allRatings = [baseRating, ...reviews.map((r) => r.rating)];
  const avgRating = (allRatings.reduce((a, b) => a + b, 0) / allRatings.length).toFixed(1);

  function handleSubmit(e) {
    e.preventDefault();
    addReview({ targetType, targetId, customerName: user.name, rating, comment });
    setComment('');
    setSubmitted(true);
  }

  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <h2 className="font-display font-semibold text-xl">Reviews</h2>
        <span className="flex items-center gap-1 text-sm font-medium text-terracotta">
          <Star size={14} fill="currentColor" /> {avgRating} ({allRatings.length} ratings)
        </span>
      </div>

      {user ? (
        <form onSubmit={handleSubmit} className="border border-black/10 rounded-xl p-4 mb-6 space-y-3">
          <div>
            <label className="block text-xs font-medium text-black/60 mb-1">Your Rating</label>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((n) => (
                <button key={n} type="button" onClick={() => setRating(n)}>
                  <Star size={20} className={n <= rating ? 'text-terracotta' : 'text-black/20'} fill={n <= rating ? 'currentColor' : 'none'} />
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="block text-xs font-medium text-black/60 mb-1">Your Review</label>
            <textarea
              required
              rows={3}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Share your experience..."
              className="w-full px-4 py-2.5 text-sm border border-black/10 rounded-lg outline-none resize-none"
            />
          </div>
          <button type="submit" className="px-5 py-2 rounded-full bg-forest text-white text-sm font-medium hover:bg-forest-dark transition">
            Submit Review
          </button>
          {submitted && <p className="text-xs text-forest">Thanks for your review!</p>}
        </form>
      ) : (
        <p className="text-sm text-black/50 mb-6">
          <Link to="/login" className="text-forest font-medium hover:underline">Log in</Link> to leave a review.
        </p>
      )}

      {reviews.length === 0 ? (
        <p className="text-sm text-black/40">No reviews yet. Be the first to share your experience.</p>
      ) : (
        <div className="space-y-4">
          {reviews.map((r) => (
            <div key={r.id} className="border-b border-black/5 pb-4">
              <div className="flex items-center justify-between mb-1">
                <p className="font-medium text-sm">{r.customerName}</p>
                <span className="flex items-center gap-0.5 text-terracotta">
                  {Array.from({ length: r.rating }).map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
                </span>
              </div>
              <p className="text-sm text-black/60">{r.comment}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}