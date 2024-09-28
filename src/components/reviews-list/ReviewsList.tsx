import { Review } from 'types/review';
import ReviewItem from './review-item/ReviewItem';

type ReviewListProps = {
  reviews: Review[];
}

function ReviewsList({reviews}: ReviewListProps): JSX.Element {
  return (
    <ul className="reviews__list">
      {
        reviews.map((review: Review) => (
          <li
            className="reviews__item"
            key={review.id}
          >
            <ReviewItem review={review}/>
          </li>
        ))
      }
    </ul>
  );
}

export default ReviewsList;
