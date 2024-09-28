export type User = {
  id: number;
  name: string;
  avatarUrl: string;
  isPro: boolean;
}

export type Review = {
  id: number;
  user: User;
  date: string;
  rating: number;
  review: string;
}
