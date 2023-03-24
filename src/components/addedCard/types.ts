import { Card } from '../common/types';

export type AddedCardProps = {
  card: Card,
  editHandler: (card: Card) => () => void,
  deleteHandler: (id: string) => () => void,
}