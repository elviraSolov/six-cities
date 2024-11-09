import ReviewsList from '@components/reviews-list/ReviewsList';
import Map from '@components/map/Map';
import OfferCard from '@components/offers-list/offer-card/OfferCard';
import Header from '@components/header/Header';
import { useAppSelector } from '@hooks/useAppSelector';
import Spinner from '@components/spinner/Spinner';
import { useParams } from 'react-router-dom';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { fetchComments, fetchNearbyOffers, fetchOffer, postComment } from '@store/action';
import { useEffect, useState } from 'react';
import { CommentAuth } from 'types/types';
import { getComments, getIsOfferLoading, getNearbyOffers, getOffer } from '@store/site-data/selectors';

const OfferPage = (): JSX.Element | null => {
  const [activeOffer, setActiveOffer] = useState<number | null>(null);

  const handleCardMouseMove = (id: number) => {
    setActiveOffer(id);
  };

  const handleCardMouseLeave = () => {
    setActiveOffer(null);
  };

  const params = useParams();

  const dispatch = useAppDispatch();

  const isOfferLoading = useAppSelector(getIsOfferLoading);
  const offer = useAppSelector(getOffer);
  const nearbyOffers = useAppSelector(getNearbyOffers);
  const comments = useAppSelector(getComments);

  const onFormSubmit = (formData: Omit<CommentAuth, 'id'>) => {
    dispatch(postComment({ id, ...formData }));
  };

  useEffect(() => {
    const { id } = params;
    if (id) {
      const parsedId = Number(id);
      dispatch(fetchOffer(parsedId));
      dispatch(fetchNearbyOffers(parsedId));
      dispatch(fetchComments(parsedId));
    }
  }, [params, dispatch]);

  if (!offer) {
    return null;
  }

  if (isOfferLoading) {
    return <Spinner />;
  }

  const STARS_COUNT = 5;
  const MAX_PERCENT_STARS_WIDTH = 100;

  const {
    id,
    images,
    isPremium,
    title,
    rating,
    type,
    bedrooms,
    maxAdults,
    price,
    goods,
    host,
    description,
    city,
    location,
  } = offer;

  const locations = nearbyOffers.map(({ id: nearbyId, location: nearbyLocation }) => ({
    id: nearbyId,
    ...nearbyLocation,
  }));
  locations.push({ id, ...location });

  return (
    <body>
      <div className="page">
        <Header />

        <main className="page__main page__main--property">
          <section className="property">
            <div className="property__gallery-container container">
              <div className="property__gallery">
                {images.map((image: string) => (
                  <div
                    key={image}
                    className="property__image-wrapper"
                  >
                    <img
                      className="property__image"
                      src={image}
                      alt="Studio"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="property__container container">
              <div className="property__wrapper">
                {isPremium && (
                  <div className="property__mark">
                    <span>Premium</span>
                  </div>
                )}
                <div className="property__name-wrapper">
                  <h1 className="property__name">{title}</h1>
                  <button
                    className="property__bookmark-button button"
                    type="button"
                  >
                    <svg
                      className="property__bookmark-icon"
                      width="31"
                      height="33"
                    >
                      <use xlinkHref="#icon-bookmark"></use>
                    </svg>
                    <span className="visually-hidden">To bookmarks</span>
                  </button>
                </div>
                <div className="property__rating rating">
                  <div className="property__stars rating__stars">
                    <span style={{ width: `${(MAX_PERCENT_STARS_WIDTH * rating) / STARS_COUNT}%` }}></span>
                    <span className="visually-hidden">Rating</span>
                  </div>
                  <span className="property__rating-value rating__value">{rating}</span>
                </div>
                <ul className="property__features">
                  <li className="property__feature property__feature--entire">{type}</li>
                  <li className="property__feature property__feature--bedrooms">{bedrooms} Bedrooms</li>
                  <li className="property__feature property__feature--adults">Max {maxAdults} adults</li>
                </ul>
                <div className="property__price">
                  <b className="property__price-value">&euro;{price}</b>
                  <span className="property__price-text">&nbsp;night</span>
                </div>
                <div className="property__inside">
                  <h2 className="property__inside-title">What&apos;s inside</h2>
                  <ul className="property__inside-list">
                    {goods.map((good) => (
                      <li className="property__inside-item">{good}</li>
                    ))}
                  </ul>
                </div>
                <div className="property__host">
                  <h2 className="property__host-title">Meet the host</h2>
                  <div className="property__host-user user">
                    <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                      <img
                        className="property__avatar user__avatar"
                        src="img/avatar-angelina.jpg"
                        width="74"
                        height="74"
                        alt="Host avatar"
                      />
                    </div>
                    <span className="property__user-name">{host.name}</span>
                    {host.isPro && <span className="property__user-status">Pro</span>}
                  </div>
                  <div className="property__description">
                    <p className="property__text">{description}</p>
                  </div>
                </div>
                <ReviewsList
                  onSubmit={onFormSubmit}
                  comments={comments}
                />
              </div>
            </div>
            <Map
              city={city}
              points={locations}
              activeOffer={activeOffer}
              mapClass={'property__map'}
            />
          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              <div className="near-places__list places__list">
                {nearbyOffers.map((offer) => (
                  <OfferCard
                    key={offer.id}
                    {...offer}
                    onMouseMove={handleCardMouseMove}
                    onMouseLeave={handleCardMouseLeave}
                  />
                ))}
              </div>
            </section>
          </div>
        </main>
      </div>
    </body>
  );
};

export default OfferPage;
