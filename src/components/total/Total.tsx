import React, { FC, useMemo } from 'react';
import { AccordionDetails, AccordionSummary, Button, Grid } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import { BoxWrapper, HelpText, SubHeading } from '../common/styles';
import { AccordionBlock, TotalHeading } from './styles';
import { TotalProps } from './types';

const TotalComponent: FC<TotalProps> = ({
  activeCard,
  tickets,
  fees,
  delivery,
}) => {
  const ticketsAmount = useMemo(() => {
    return tickets.reduce((acc, ticket) => acc + ticket.amount, 0);
  }, [tickets]);

  const totalAmount = useMemo(() => {
    const ticketsTotal = tickets.reduce(
      (acc, ticket) =>
        acc + ticket.amount * ticket.price, 0);

    const feesTotal = fees ? fees.reduce(
        (acc, fee) =>
          acc + fee.price * (fee.oneTime ? 1 : ticketsAmount), 0)
      : 0;

    return ticketsTotal + feesTotal;
  }, [tickets, fees, ticketsAmount]);

  return (
    <BoxWrapper>
      {
        tickets.length > 0 ? (
          <>
            <AccordionBlock>
              <AccordionSummary expandIcon={<ExpandMore/>}>
                <TotalHeading>
                  <Grid container justifyContent="space-between">
                    <Grid item>
                      Total
                    </Grid>
                    <Grid item>
                      ${totalAmount}
                    </Grid>
                  </Grid>
                </TotalHeading>
              </AccordionSummary>
              <AccordionDetails>
                <SubHeading>Tickets</SubHeading>
                {
                  tickets.map(ticket => (
                    <Grid container justifyContent="space-between" spacing={2} marginBottom="15px">
                      <Grid item>
                        {ticket.name}: ${ticket.price.toFixed(2)} x {ticket.amount}
                      </Grid>
                      <Grid item>
                        ${ticket.amount * ticket.price}
                      </Grid>
                    </Grid>
                  ))
                }
                {fees ? (
                  <>
                    <SubHeading>Fees</SubHeading>
                    {
                      fees.map(fee => (
                        <Grid container justifyContent="space-between" spacing={2} marginBottom="15px">
                          <Grid item>
                            {fee.name}: ${fee.price.toFixed(2)}{fee.oneTime ? '' : ` x ${ticketsAmount}`}
                          </Grid>
                          <Grid item>
                            ${(fee.oneTime ? 1 : ticketsAmount) * fee.price}
                          </Grid>
                        </Grid>
                      ))
                    }
                  </>
                ) : null}

                {
                  delivery ? (
                    <>
                      <SubHeading>Delivery</SubHeading>
                      <Grid container justifyContent="space-between" spacing={2} marginBottom="15px">
                        <Grid item>
                          {delivery.name}
                        </Grid>
                        <Grid item>
                          {delivery.price > 0 ? delivery.price.toFixed(2) : 'Free'}
                        </Grid>
                      </Grid>
                    </>
                  ) : null
                }
              </AccordionDetails>
            </AccordionBlock>
            <Button variant="contained" fullWidth disabled={!activeCard}>Place Order</Button>
          </>
        ) : (
          <HelpText>Add tickets to see breakdown</HelpText>
        )
      }
    </BoxWrapper>
  );
};

export const Total = React.memo(TotalComponent);
