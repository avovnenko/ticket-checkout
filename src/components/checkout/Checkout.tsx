import React, { FC, useState } from 'react';
import { Delivery } from '../delivery';
import { Payment } from '../payment';
import { Total } from '../total';
import { LeftWrapper, RightWrapper, Wrapper } from './styles';
import { CheckoutProps } from './types';
import { Card } from '../common/types';

const CheckoutComponent: FC<CheckoutProps> = ({
  tickets,
  fees,
  delivery,
}) => {
  const [activeCard, setActiveCard] = useState<Card | null>(null);

  return (
    <Wrapper>
      <LeftWrapper>
        <Delivery/>
        <Payment setActiveCard={setActiveCard} activeCard={activeCard}/>
      </LeftWrapper>
      <RightWrapper>
        <Total
          tickets={tickets}
          fees={fees}
          delivery={delivery}
          activeCard={activeCard}
        />
      </RightWrapper>
    </Wrapper>
  );
};

export const Checkout = React.memo(CheckoutComponent);
