import OfferCard from './offer-card/OfferCard';
import { useState } from 'react';
import Map from '@components/map/Map';
import { useAppSelector } from '@hooks/useAppSelector';
import SortingList from '@components/sorting-list/SortingList';
import { setOffersSorting } from '@store/action';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { SortName } from 'types/types';
import Spinner from '@components/spinner/Spinner';
import { getCity, getSorting } from '@store/site-process/selectors';
import { getIsOffersLoading, selectOffers } from '@store/site-data/selectors';

const OffersList = (): JSX.Element => {
  const activeCity = useAppSelector(getCity);
  const offers = useAppSelector(selectOffers);
  const activeSorting = useAppSelector(getSorting);

  const dispatch = useAppDispatch();

  const [activeOffer, setActiveOffer] = useState<number | null>(null);

  const isOffersLoading = useAppSelector(getIsOffersLoading);

  const handleCardMouseMove = (id: number) => {
    setActiveOffer(id);
  };

  const handleCardMouseLeave = () => {
    setActiveOffer(null);
  };

  const onSortingChange = (name: SortName) => {
    dispatch(setOffersSorting(name));
  };

  if (isOffersLoading) {
    return <Spinner />;
  }

  if (offers.length === 0) {
    return (
      <div className="cities__places-container cities__places-container--empty container">
        <section className="cities__no-places">
          <div className="cities__status-wrapper tabs__content">
            <b className="cities__status">No places to stay available</b>
            <p className="cities__status-description">
              We could not find any property available at the moment in {activeCity.name}
            </p>
          </div>
        </section>
        <div className="cities__right-section"></div>
      </div>
    );
  }
  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">
          {offers.filter((offer) => offer.city.name === activeCity.name).length} places to stay in{' '}
          {activeCity.name}
        </b>
        <SortingList
          onChange={onSortingChange}
          activeSorting={activeSorting}
        />
        <div className="cities__places-list places__list tabs__content">
          {offers
            .filter((offer) => offer.city.name === activeCity.name)
            .map((offer) => (
              <OfferCard
                key={offer.id}
                {...offer}
                onMouseMove={handleCardMouseMove}
                onMouseLeave={handleCardMouseLeave}
              />
            ))}
        </div>
      </section>

      <Map
        city={activeCity}
        points={offers.map(({ id, location }) => ({ id, ...location }))}
        activeOffer={activeOffer}
        mapClass={'cities__right-section'}
      />
    </div>
  );
};

export default OffersList;
