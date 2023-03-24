import React, { FC } from 'react';
import { Button, TextField } from '@mui/material';
import { AddedCardProps } from './types';

const AddedCardComponent: FC<AddedCardProps> = ({
  card,
  deleteHandler,
  editHandler,
}) => {
  return (
    <>
      <p>Card - {card.cardNumber.slice(-4)}</p>
      <p>{card.name} | exp. {card.expirationDate}</p>
      <p>
        <Button
          variant="text"
          onClick={editHandler(card)}
        >
          Edit
        </Button>
        |
        <Button
          variant="text"
          onClick={deleteHandler(card.id)}
        >
          Delete
        </Button>
      </p>
      <p>
        <TextField label="Security Code" id="sec-code" fullWidth/>
      </p>
    </>
  );
};

export const AddedCard = React.memo(AddedCardComponent);