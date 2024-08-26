type PlaceCardProps = {
  name: string;
  image: string;
  type: string;
  price: number;
  stars: number;
  bookmark?: boolean;
  premium?: boolean;
}

function PlaceCard(props: PlaceCardProps): JSX.Element {
  return (
    <article className="cities__place-card place-card">
      { props.premium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={ props.image } width="260" height="200" alt="Place image" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{ props.price }</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button button ${ props.bookmark ? 'place-card__bookmark-button--active' : '' }`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">{ props.bookmark ? 'In bookmarks' : 'To bookmarks'}</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ 'width': `${20 * props.stars}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{ props.name }</a>
        </h2>
        <p className="place-card__type">{ props.type }</p>
      </div>
    </article>
  );
}

export default PlaceCard;
