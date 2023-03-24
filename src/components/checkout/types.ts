import { Tickets, Delivery as DeliveryType, Fee } from '../common/types';

export type CheckoutProps = {
  tickets: Tickets[],
  fees: Fee[],
  delivery: DeliveryType,
}