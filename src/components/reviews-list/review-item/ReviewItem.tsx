import { Comment } from 'types/types';
import { formatDate } from '@utils';

const STARS_COUNT = 5;
const MAX_PERCENT_STARS_WIDTH = 100;

const ReviewItem = ({ comment, date, rating, user }: Comment): JSX.Element => (
  <li className="reviews__item">
    <div className="reviews__user user">
      <div className="reviews__avatar-wrapper user__avatar-wrapper">
        <img
          className="reviews__avatar user__avatar"
          src={user.avatarUrl}
          width="54"
          height="54"
          alt="Reviews avatar"
        />
      </div>
      <span className="reviews__user-name">{user.name}</span>
    </div>
    <div className="reviews__info">
      <div className="reviews__rating rating">
        <div className="reviews__stars rating__stars">
          <span style={{ width: `${(MAX_PERCENT_STARS_WIDTH * rating) / STARS_COUNT}%` }}></span>
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
      <p className="reviews__text">{comment}</p>
      <time
        className="reviews__time"
        dateTime={date}
      >
        {formatDate(date)}
      </time>
    </div>
  </li>
);

export default ReviewItem;
