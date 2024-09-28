import { Fragment } from 'react';
import { Review } from 'types/review';

type ReviewProps = {
  review: Review;
}

function ReviewItem({ review }: ReviewProps): JSX.Element {
  return (
    <Fragment>
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={review.authorAvatar} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {review.authorName}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{'width': '80%'}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">{review.reviewText}</p>
        <time className="reviews__time" dateTime="2019-04-24">April 2019</time>
      </div>
    </Fragment>
  );
}

export default ReviewItem;
