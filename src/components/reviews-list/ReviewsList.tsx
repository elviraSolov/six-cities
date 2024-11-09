import { Comment, CommentAuth } from 'types/types';
import ReviewItem from './review-item/ReviewItem';
import CommentForm from '@components/comment-form/CommentForm';
import { useAppSelector } from '@hooks/useAppSelector';
import { AuthorizationStatus } from '@const';
import { getAuthorizationStatus } from '@store/user-process/selectors';

type ReviewsListProps = {
  comments: Comment[];
  onSubmit: (formData: Omit<CommentAuth, 'id'>) => void;
};

const ReviewsList = ({ comments, onSubmit }: ReviewsListProps): JSX.Element => {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  if (comments.length === 0) {
    return (
      <section className="property__reviews reviews">
        {authorizationStatus === AuthorizationStatus.Auth && <CommentForm onSubmit={onSubmit} />}
      </section>
    );
  }

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">
        Reviews &middot; <span className="reviews__amount">{comments.length}</span>
      </h2>
      <ul className="reviews__list">
        {comments.map((comment) => (
          <ReviewItem
            key={(comment as { id: number }).id}
            {...comment}
          />
        ))}
      </ul>
      {authorizationStatus === AuthorizationStatus.Auth && <CommentForm onSubmit={onSubmit} />}
    </section>
  );
};

export default ReviewsList;
