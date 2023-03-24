import React, { useState } from 'react';
import { Checkout } from './components/checkout';
import { ShowList } from './components/showList';
import { MainWrapper } from './styles';
import { Delivery, Fee, Tickets } from './components/common/types';

const fees: Fee[] = [
  {
    name: 'Service Fee',
    price: 16,
  },
  {
    name: 'Facility Charge',
    price: 4,
  },
  {
    name: 'Order Processing Fee',
    price: 5.75,
    oneTime: true,
  },
];

const delivery: Delivery = {
  name: 'Mobile',
  price: 0,
};

function App () {
  const [tickets, setTickets] = useState<Tickets[]>([]);

  return (
    <MainWrapper>
      <ShowList tickets={tickets} setTickets={setTickets}/>
      <Checkout tickets={tickets} fees={fees} delivery={delivery}/>
    </MainWrapper>
  );
}

export default App;
