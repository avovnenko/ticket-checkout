import { Card } from '../common/types';

export type AddCardFormProps = {
  editCard: Card | null,
  onCancel: () => void,
  onSubmit: (cards: Card) => void,
}