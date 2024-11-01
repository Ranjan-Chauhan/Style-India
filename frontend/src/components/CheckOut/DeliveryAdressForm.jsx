import { Box, Button, Grid, TextField } from "@mui/material";
import React, { useState } from "react";
import AdressCard from "../Adress/AdressCard";

function DeliveryAdressForm() {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    adress: "",
    city: "",
    state: "",
    zip: "",
    phone: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("adress", user);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <div>
      <Grid container spacing={4}>
        <Grid
          xs={12}
          lg={5}
          className="border rounded-e-md shadow-md h-[30.5rem] overflow-y-scroll my-7"
        >
          <div className="p-5 py-7 border-b cursor-pointer">
            <AdressCard />
            <Button variant="contained" size="large" sx={{ mt: 2 }}>
              Deliver Here
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} lg={7}>
          <Box className="border rounded-s-md shadow-md p-5">
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="firstName"
                    name="firstName"
                    label="First Name"
                    fullWidth
                    value={user.firstName}
                    onChange={handleChange}
                    autoComplete="given-name"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="lastName"
                    name="lastName"
                    label="Last Name"
                    fullWidth
                    value={user.lastName}
                    onChange={handleChange}
                    autoComplete="given-name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    id="adress"
                    name="adress"
                    label="Adress"
                    fullWidth
                    value={user.adress}
                    onChange={handleChange}
                    autoComplete="given-name"
                    multiline
                    rows={3}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="city"
                    name="city"
                    label="City"
                    fullWidth
                    value={user.city}
                    onChange={handleChange}
                    autoComplete="given-name"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="state"
                    name="state"
                    label="State / Province / Region"
                    fullWidth
                    value={user.state}
                    onChange={handleChange}
                    autoComplete="given-name"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="zip"
                    name="zip"
                    label="Zip / Postal Code"
                    fullWidth
                    value={user.zip}
                    onChange={handleChange}
                    autoComplete="shiping postal-code"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="phone"
                    name="phone"
                    label="Phone Number"
                    fullWidth
                    value={user.phone}
                    onChange={handleChange}
                    autoComplete="given-name"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Button
                    variant="contained"
                    size="large"
                    type="submit"
                    sx={{ mt: 2 }}
                  >
                    Add Adress
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default DeliveryAdressForm;
