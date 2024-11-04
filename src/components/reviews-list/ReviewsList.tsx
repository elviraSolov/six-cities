import { Comment } from 'types/types';
import ReviewItem from './review-item/ReviewItem';
import CommentForm from '@components/comment-form/CommentForm';
import { useAppSelector } from '@hooks/useAppSelector';
import { AuthorizationStatus } from '@const';

type ReviewsListProps = {
  comments: Comment[];
};

const ReviewsList = ({ comments }: ReviewsListProps): JSX.Element => {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">
        Reviews &middot; <span className="reviews__amount">{comments.length}</span>
      </h2>
      <ul className="reviews__list">
        {comments.map((comment: Comment) => (
          <ReviewItem
            key={comment.id}
            comment={comment}
          />
        ))}
      </ul>
      {authorizationStatus === AuthorizationStatus.Auth && <CommentForm />}
    </section>
  );
};

export default ReviewsList;
