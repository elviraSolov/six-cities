import { ChangeEvent, FormEvent, Fragment, useState } from 'react';
import { CommentAuth } from 'types/types';

type FormProps = {
  onSubmit: (formData: Omit<CommentAuth, 'id'>) => void;
};

const CommentForm = ({ onSubmit }: FormProps) => {
  const [review, setReview] = useState<string>('');
  const [rating, setRating] = useState<number>(0);

  const handleReviewChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setReview(event.target.value);
  };

  const handleRatingChange = (event: ChangeEvent<HTMLInputElement>) => {
    setRating(Number(event.target.value));
  };

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onSubmit({
      comment: review,
      rating,
    });

    setReview('');
    setRating(0);
  };

  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={handleFormSubmit}
    >
      <label
        className="reviews__label form__label"
        htmlFor="review"
      >
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        {Array.from([5, 4, 3, 2, 1], (i: number) => (
          <Fragment key={`${i}-rating`}>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              value={i}
              id={`${i}-rating`}
              type="radio"
              onChange={handleRatingChange}
            />
            <label
              className="reviews__rating-label form__rating-label"
              htmlFor={`${i}-rating`}
              title="perfect"
            >
              <svg
                className="form__star-image"
                width={37}
                height={33}
              >
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </Fragment>
        ))}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={review}
        onChange={handleReviewChange}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your
          stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={review.length < 50 || rating === 0}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default CommentForm;
