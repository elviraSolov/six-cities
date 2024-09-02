import OfferCard from './offer-card/OfferCard';
import { Offer } from '../../types/offer';
import { useState } from 'react';

type OffersListProps = {
  offers: Offer[];
}

function OffersList({ offers }: OffersListProps): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeOffer, setActiveOffer] = useState<number | null>(null);

  const handleCardMouseMove = (id: number) => {
    setActiveOffer(id);
  };

  const handleCardMouseLeave = () => {
    setActiveOffer(null);
  };

  return (
    <div className="cities__places-list places__list tabs__content">
      { offers.map((offer) =>
        (
          <OfferCard
            key={ offer.id }
            {...offer}
            onMouseMove={handleCardMouseMove}
            onMouseLeave={handleCardMouseLeave}
          />
        )
      )}
    </div>
  );
}

export default OffersList;
