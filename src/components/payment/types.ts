import { Card } from '../common/types';

export type PaymentProps = {
  activeCard: Card | null;
  setActiveCard: (card: Card) => void;
}