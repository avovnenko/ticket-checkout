import React, { FC, useCallback, useEffect, useState } from 'react';
import { List, Grid } from '@mui/material';
import { ListWrapper, ShowButton, ShowListItem, SubmitButton, TicketButton, TicketsAmount } from './styles';
import { SubHeading } from '../common/styles';
import { Show } from '../common/types';
import { ShowListProps } from './types';

const SHOW_LIST: Show[] = [
  {
    id: 1,
    name: 'Madonna',
    price: 100,
  },
  {
    id: 2,
    name: 'Maroon 5',
    price: 200,
  },
  {
    id: 3,
    name: 'Stevie Nicks',
    price: 300,
  },
];

const ShowListComponent: FC<ShowListProps> = ({
  tickets,
  setTickets,
}) => {
  const [ticketCount, setTicketCount] = useState(1);
  const [selectedShow, setSelectedShow] = useState<Show | null>(null);

  const setCurrentShowHandler = useCallback((show: Show) => () => {
    setSelectedShow(show);
  }, []);

  const setTicketCountHandler = useCallback((action: 'add' | 'remove') => () => {
    if (action === 'add') {
      setTicketCount(prevState => prevState + 1);
    } else {
      setTicketCount(prevState => prevState - 1);
    }
  }, []);

  const addTickets = useCallback(() => {
    if (selectedShow) {
      const foundTicket = tickets.find(ticket => ticket.id === selectedShow.id);
      if (foundTicket) {
        setTickets(prevTickets => prevTickets.map(ticket =>
          ticket.id === selectedShow.id ? {
            ...ticket,
            amount: ticketCount,
          } : ticket,
        ));
      } else {
        setTickets(prevTickets => (
          [
            ...prevTickets,
            {
              amount: ticketCount,
              ...selectedShow,
            },
          ]
        ));
      }
      setSelectedShow(null);
    }
  }, [selectedShow, setTickets, ticketCount, tickets]);

  useEffect(() => {
    if (selectedShow) {
      const foundShowTickets = tickets.find(ticket => selectedShow.id === ticket.id);
      if (foundShowTickets) {
        setTicketCount(foundShowTickets.amount);
      } else {
        setTicketCount(1);
      }
    }
  }, [selectedShow]);

  return (
    <ListWrapper>
      <List>
        {
          SHOW_LIST.map(show => (
            <ShowListItem disablePadding key={show.id}>
              <ShowButton
                isActive={selectedShow?.id === show.id}
                variant="outlined"
                onClick={setCurrentShowHandler(show)}
              >
                {show.name}
              </ShowButton>
            </ShowListItem>
          ))
        }
      </List>

      {
        selectedShow
          ? (
            <Grid container>
              <Grid item>
                <SubHeading>Selected show: {selectedShow.name}</SubHeading>
                <Grid container spacing={2}>
                  <Grid item>
                    <TicketButton
                      variant="contained"
                      disabled={ticketCount === 1}
                      onClick={setTicketCountHandler('remove')}
                    >
                      -
                    </TicketButton>
                  </Grid>
                  <Grid item>
                    <TicketsAmount label={ticketCount}/>
                  </Grid>
                  <Grid item>
                    <TicketButton
                      variant="contained"
                      onClick={setTicketCountHandler('add')}
                    >
                      +
                    </TicketButton>
                  </Grid>
                </Grid>

                <SubmitButton
                  variant="contained"
                  onClick={addTickets}
                >
                  Submit
                </SubmitButton>
              </Grid>
            </Grid>
          )
          : null
      }
    </ListWrapper>
  );
};

export const ShowList = React.memo(ShowListComponent);