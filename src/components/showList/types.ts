import { Tickets } from '../common/types';

export type ShowListProps = {
  tickets: Tickets[],
  setTickets: (setValueFunc: (tickets: Tickets[]) => Tickets[]) => void,
}