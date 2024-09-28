import { Link } from 'react-router-dom';
import { Offer } from 'types/offer';

const STARS_COUNT = 5;
const MAX_PERCENT_STARS_WIDTH = 100;

type OfferCardProps = Offer & {
  onMouseMove: (id: number) => void;
  onMouseLeave: () => void;
  place?: string;
}

const OfferCard = ({
  id,
  name,
  image,
  type,
  price,
  stars,
  isBookmark,
  isPremium,
  onMouseMove,
  onMouseLeave,
  place,
}: OfferCardProps): JSX.Element => {
  const handleMouseMove = () => {
    onMouseMove(id);
  };

  return (
    <Link to={`offer/${id}` } className={`${place === 'favorites' ? 'favorites__locations-items' : ''}`}>
      <article className={`place-card ${place === 'favorites' ? 'favorites__card' : 'cities__place-card'}`}
        onMouseMove={handleMouseMove}
        onMouseLeave={onMouseLeave}
      >
        {isPremium && (
          <div className="place-card__mark">
            <span>Premium</span>
          </div>
        )}
        <div className={`place-card__image-wrapper ${place === 'favorites' ? 'favorites__image-wrapper' : 'cities__image-wrapper'}`}>
          <a href="#">
            <img
              className="place-card__image"
              src={image}
              width={place === 'favorites' ? '150' : '260'}
              height={place === 'favorites' ? '110' : '200'} alt="Place image"
            />
          </a>
        </div>
        <div className={`place-card__info ${place === 'favorites' ? 'favorites__card-info' : ''}`}>
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">&euro;{price}</b>
              <span className="place-card__price-text">&#47;&nbsp;night</span>
            </div>
            <button className={`place-card__bookmark-button button ${isBookmark ? 'place-card__bookmark-button--active' : '' }`} type="button">
              <svg className="place-card__bookmark-icon" width="18" height="19">
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">{isBookmark ? 'In bookmarks' : 'To bookmarks'}</span>
            </button>
          </div>
          <div className="place-card__rating rating">
            <div className="place-card__stars rating__stars">
              <span style={{'width': `${(MAX_PERCENT_STARS_WIDTH * stars) / STARS_COUNT}%`}}></span>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <h2 className="place-card__name">
            <a href="#">{name}</a>
          </h2>
          <p className="place-card__type">{type}</p>
        </div>
      </article>
    </Link>
  );
};

export default OfferCard;
