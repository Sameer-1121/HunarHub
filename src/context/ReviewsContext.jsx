import { createContext, useContext, useState, useEffect } from 'react';

const ReviewsContext = createContext(null);

export function ReviewsProvider({ children }) {
  const [reviews, setReviews] = useState(() => {
    const stored = localStorage.getItem('hunarhub_reviews');
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem('hunarhub_reviews', JSON.stringify(reviews));
  }, [reviews]);

  function addReview({ targetType, targetId, customerName, rating, comment }) {
    const newReview = {
      id: Date.now(),
      targetType,
      targetId,
      customerName,
      rating,
      comment,
      createdAt: new Date().toISOString(),
    };
    setReviews((prev) => [newReview, ...prev]);
    return newReview;
  }

  function getReviews(targetType, targetId) {
    return reviews.filter((r) => r.targetType === targetType && r.targetId === targetId);
  }

  return (
    <ReviewsContext.Provider value={{ reviews, addReview, getReviews }}>
      {children}
    </ReviewsContext.Provider>
  );
}

export function useReviews() {
  return useContext(ReviewsContext);
}