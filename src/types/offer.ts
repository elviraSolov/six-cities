export type Offer = {
  id: number;
  name: string;
  image: string;
  type: 'Apartment' | 'Room' | 'House' | 'Hotel';
  price: number;
  stars: number;
  isBookmark?: boolean;
  isPremium?: boolean;
  city: {
    name: string;
  };
};
