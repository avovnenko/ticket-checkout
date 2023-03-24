export type Fee = {
  name: string;
  price: number;
  oneTime?: boolean;
}

export type Delivery = {
  name: string;
  price: number;
}

export type Card = {
  id: string,
  name: string,
  cardNumber: string,
  expirationDate: string,
  securityCode: string,
  address: string,
  city: string,
  state: string,
  postalCode: string,
  phoneNumber: string
}

export type Show = {
  id: number,
  name: string,
  price: number
}

export type Tickets = {
  amount: number,
} & Show;