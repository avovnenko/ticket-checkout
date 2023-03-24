import { Button, FormControlLabel, Link, styled } from '@mui/material';

export const AddCardButton = styled(Button)({
  marginTop: 15,
});

export const RadioControlWrapper = styled(FormControlLabel, {
  shouldForwardProp: prop => prop !== 'isActive',
})<{ isActive: boolean }>(({ isActive }) => ({
  border: '1px solid #eee',
  padding: '15px',
  backgroundColor: isActive ? '#f2f7fb' : 'transparent',
  margin: '0 0 10px',
  alignItems: 'flex-start',
}));

export const PaypalLink = styled(Link)({
  backgroundColor: '#ffc43a',
  padding: '10px 20px',
  borderRadius: '5px',
  marginTop: '10px',
  display: 'inline-block',
});