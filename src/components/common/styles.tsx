import { Divider, styled } from '@mui/material';

export const Heading = styled('h3')({
  fontWeight: 'bold',
  marginBottom: '16px',
  fontSize: 20,
});

export const SubHeading = styled('h4')({
  fontSize: 16,
  fontWeight: 600,
  marginBottom: '8px',
});

export const BoxWrapper = styled('div')({
  borderRadius: '5px',
  border: '1px solid rgb(191, 191, 191)',
  padding: '15px',
});

export const HelpText = styled('p')({
  fontSize: 14,
  color: 'rgba(38, 38, 38, 0.65)',
});

export const DividerLine = styled(Divider)({
  margin: '15px 0',
});