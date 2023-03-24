import React, { FC, useCallback, useState } from 'react';
import { Box, Radio, RadioGroup } from '@mui/material';
import CardImg from '../../assets/images/Card.svg';
import PlusImg from '../../assets/images/Plus.svg';
import { BoxWrapper, DividerLine, Heading, SubHeading } from '../common/styles';
import { AddCardButton, PaypalLink, RadioControlWrapper } from './styles';
import { AddCardForm } from '../addCardForm';
import { AddedCard } from '../addedCard';
import { PaymentProps } from './types';
import { Card } from '../common/types';

const PaymentComponent: FC<PaymentProps> = ({
  activeCard,
  setActiveCard,
}) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [editCard, setEditCard] = useState<Card | null>(null);
  const [cards, setCards] = useState<Card[]>([]);

  const addNewCardHandler = useCallback(() => {
    setIsEditMode(true);
  }, []);

  const onCancelHandler = useCallback(() => {
    setEditCard(null);
    setIsEditMode(false);
  }, []);

  const onSubmitHandler = useCallback((card: Card) => {
    setEditCard(null);
    setIsEditMode(false);
    setCards(prevState => [...prevState, card]);
  }, []);

  const deleteHandler = useCallback((id: string) => () => {
    setCards(prevState => prevState.filter(card => card.id !== id));
  }, []);

  const editHandler = useCallback((card: Card) => () => {
    setIsEditMode(true);
    setEditCard(card);
  }, []);

  const setCardHandler = useCallback((card: Card) => () => {
    setActiveCard(card);
  }, [setActiveCard]);

  return (
    <BoxWrapper>
      <Heading>Payment</Heading>
      <SubHeading>Use Credit / Debit Card</SubHeading>
      {
        isEditMode ? (
          <AddCardForm
            editCard={editCard}
            onCancel={onCancelHandler}
            onSubmit={onSubmitHandler}
          />
        ) : (
          <RadioGroup>
            {cards.map(card => (
              <RadioControlWrapper
                isActive={activeCard?.id === card.id}
                value={card.id}
                control={<Radio/>}
                onChange={setCardHandler(card)}
                label={<AddedCard card={card} editHandler={editHandler} deleteHandler={deleteHandler}/>}
              />
            ))}
          </RadioGroup>
        )
      }

      {
        !isEditMode ? (
          <AddCardButton onClick={addNewCardHandler}>
            <Box alignItems="center" gap="20px" display="flex">
              <img src={PlusImg} alt="Add card"/>
              <img src={CardImg} width={48} alt="Card"/>
              Add new Card
            </Box>
          </AddCardButton>
        ) : null
      }

      <DividerLine/>

      <SubHeading>Or pay with</SubHeading>

      <PaypalLink
        underline="hover"
        variant="body2"
        target="_blank"
        href="https://www.paypal.com"
      >
        Paypal
      </PaypalLink>
    </BoxWrapper>
  );
};

export const Payment = React.memo(PaymentComponent);
