import { Delivery, Fee, Card, Tickets } from '../common/types';

export type TotalProps = {
  activeCard: Card | null;
  tickets: Tickets[];
  fees?: Fee[];
  delivery?: Delivery;
}