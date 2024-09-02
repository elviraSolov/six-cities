import OfferCard from './offer-card/OfferCard';
import { Offer } from '../../types/offer';

type OffersListProps = {
  offers: Offer[];
}

function OffersList({ offers }: OffersListProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      { offers.map((offer) =>
        (
          <OfferCard
            key={ offer.id }
            {...offer}
          />
        )
      )}
    </div>
  );
}

export default OffersList;
