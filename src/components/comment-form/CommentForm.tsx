import { ChangeEvent, Fragment, useState } from 'react';

const CommentForm = () => {
  const [review, setReview] = useState<string>('');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [rating, setRating] = useState<number | null>(null);

  const handleReviewChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setReview(event.target.value);
  };

  const handleRatingChange = (event: ChangeEvent<HTMLInputElement>) => {
    setRating(Number(event.target.value));
  };

  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
    >
      <label
        className="reviews__label form__label"
        htmlFor="review"
      >
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        {Array.from([5, 4, 3, 2, 1], (i: number) =>
          (
            <Fragment key={`${i}-stars`}>
              <input
                className="form__rating-input visually-hidden"
                name="rating"
                value={i}
                id={`${i}-stars`}
                type="radio"
                onChange={handleRatingChange}
              />
              <label
                className="reviews__rating-label form__rating-label"
                htmlFor={`${i}-stars`}
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
          )
        )}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review" name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={review}
        onChange={handleReviewChange}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default CommentForm;
