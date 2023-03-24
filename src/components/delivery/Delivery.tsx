import React from 'react';
import { BoxWrapper, Heading, HelpText, SubHeading } from '../common/styles';

const DeliveryComponent = () => {
  return (
    <BoxWrapper>
      <Heading>Delivery</Heading>
      <SubHeading>Mobile - Free</SubHeading>
      <HelpText>
        Your phone's your ticket. Locate your tickets in your account - or in your app. When you go mobile, your
        tickets will not be emailed to you or available for print.
      </HelpText>
    </BoxWrapper>
  );
};

export const Delivery = React.memo(DeliveryComponent);