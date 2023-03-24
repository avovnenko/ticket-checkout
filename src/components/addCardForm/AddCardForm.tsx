import React, { FC, FormEvent, useCallback, useId } from 'react';
import { Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { AddCardFormProps } from './types';

const AddCardFormComponent: FC<AddCardFormProps> = ({
  editCard,
  onCancel,
  onSubmit,
}) => {
  const id = useId();

  const submitHandler = useCallback((e: FormEvent<HTMLFormElement> | any) => {
    e.preventDefault();
    console.log(e.target['card-number'].value);
    onSubmit({
      id,
      cardNumber: e.target['card-number'].value,
      name: e.target['name'].value,
      address: e.target['address'].value,
      city: e.target['city'].value,
      expirationDate: e.target['exp-date'].value,
      phoneNumber: e.target['phone'].value,
      postalCode: e.target['postal-code'].value,
      state: e.target['state'].value,
      securityCode: e.target['sec-code'].value,
    });
  }, [id, onSubmit]);

  return (
    <form onSubmit={submitHandler}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <TextField
            defaultValue={editCard?.name}
            label="Name on Card"
            id="name"
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            defaultValue={editCard?.cardNumber}
            label="Card Number"
            id="card-number"
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <TextField
                defaultValue={editCard?.expirationDate}
                label="Expiration Date"
                id="exp-date"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                defaultValue={editCard?.securityCode}
                label="Security Code"
                id="sec-code"
                fullWidth
                required
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <TextField
            defaultValue={editCard?.address}
            label="Address"
            id="address"
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <TextField
                defaultValue={editCard?.city}
                label="City"
                id="city"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel id="state-label">State</InputLabel>
                <Select
                  defaultValue={editCard?.state}
                  label="State"
                  id="state"
                  labelId="state-label"
                  name="state"
                  fullWidth
                >
                  <MenuItem value={1}>State 1</MenuItem>
                  <MenuItem value={2}>State 2</MenuItem>
                  <MenuItem value={3}>State 3</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <TextField
                defaultValue={editCard?.postalCode}
                label="Postal Code"
                id="postal-code"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                defaultValue={editCard?.phoneNumber}
                label="Phone Number"
                id="phone"
                fullWidth
                required
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={4} textAlign="center">
              <Button
                variant="contained"
                fullWidth
                onClick={onCancel}
              >
                Cancel
              </Button>
            </Grid>
            <Grid item xs={4} textAlign="center">
              <Button
                variant="contained"
                fullWidth
                type="submit"
              >
                Add new card
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
};

export const AddCardForm = React.memo(AddCardFormComponent);
