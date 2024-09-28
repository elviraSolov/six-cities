import { Review } from 'types/review';
import ReviewItem from './review-item/ReviewItem';
import CommentForm from '@components/comment-form/CommentForm';

type ReviewsListProps = {
  reviews: Review[];
}

function ReviewsList({reviews}: ReviewsListProps): JSX.Element {
  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {
          reviews.map((review: Review) => (
            <ReviewItem
              key={review.id}
              review={review}
            />
          ))
        }
      </ul>
      <CommentForm />
    </section>

  );
}

export default ReviewsList;
