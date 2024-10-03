import OfferCard from './offer-card/OfferCard';
import { Offer } from 'types/offer';
import { useState } from 'react';
import Map from '@components/map/Map';
import { Location } from 'types/city';
import { useAppSelector } from '@hooks/useAppSelector';

function OffersList(): JSX.Element {
  const activeCity = useAppSelector((state) => state.city);
  const offers = useAppSelector((state) => state.offers);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeOffer, setActiveOffer] = useState<number | null>(null);

  const handleCardMouseMove = (id: number) => {
    setActiveOffer(id);
  };

  const handleCardMouseLeave = () => {
    setActiveOffer(null);
  };

  const [selectedPoint, setSelectedPoint] = useState<Location | undefined>(undefined);

  const onPointHover = (point: Location) => {
    setSelectedPoint(point);
  };

  return (
    <div className="cities__places-container container">
      {offers.length === 0 ? (
        <div className="cities__places-container cities__places-container--empty container">
          <section className="cities__no-places">
            <div className="cities__status-wrapper tabs__content">
              <b className="cities__status">No places to stay available</b>
              <p className="cities__status-description">We could not find any property available at the moment in {activeCity.name}</p>
            </div>
          </section>
          <div className="cities__right-section"></div>
        </div>
      ) : (
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{offers.length} places to stay in {activeCity.name}</b>
          <form className="places__sorting" action="#" method="get">
            <span className="places__sorting-caption">Sort by</span>
            <span className="places__sorting-type" tabIndex={0}>
              Popular
              <svg className="places__sorting-arrow" width="7" height="4">
                <use xlinkHref="#icon-arrow-select"></use>
              </svg>
            </span>
            <ul className="places__options places__options--custom places__options--opened">
              <li className="places__option places__option--active" tabIndex={0}>Popular</li>
              <li className="places__option" tabIndex={0}>Price: low to high</li>
              <li className="places__option" tabIndex={0}>Price: high to low</li>
              <li className="places__option" tabIndex={0}>Top rated first</li>
            </ul>
          </form>
          <div className="cities__places-list places__list tabs__content">
            {offers.map((offer) =>
              (
                <OfferCard
                  key={offer.id}
                  {...offer}
                  onMouseMove={handleCardMouseMove}
                  onMouseLeave={handleCardMouseLeave}
                />
              )
            )}
          </div>
        </section>
      )}
      <Map
        city={activeCity}
        points={offers.map((offer: Offer) => offer.location)}
        selectedPoint={selectedPoint}
        onPointHover={onPointHover}
        mapClass={'cities__right-section'}
      />
    </div>
  );
}

export default OffersList;
