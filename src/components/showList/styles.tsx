import { Button, Chip, ListItem, styled } from '@mui/material';

export const ListWrapper = styled('div')({
  marginBottom: '25px',
});

export const TicketButton = styled(Button)({
  borderRadius: '50%',
  minWidth: '0',
  width: '50px',
  height: '50px',
});

export const TicketsAmount = styled(Chip)({
  borderRadius: '50%',
  width: '50px',
  height: '50px',
});

export const SubmitButton = styled(Button)({
  marginTop: '15px',
  backgroundColor: 'green',
});

export const ShowButton = styled(Button, {
  shouldForwardProp: prop => prop !== 'isActive',
})<{ isActive: boolean }>(({ isActive }) => ({
  backgroundColor: isActive ? 'blue' : 'initial',
  color: isActive ? 'white' : 'initial',
  '&:hover': {
    backgroundColor: isActive ? 'blue' : 'initial',
  },
}));

export const ShowListItem = styled(ListItem)({
  marginBottom: '10px',
});
