'use cliet'

import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input
} from "@chakra-ui/react";

const ShippingAddress = () => {
  const [shippingForm, setShippingForm] = useState({address: "", city: "", district: "", ward: ""})
  console.log(shippingForm)
  return (
    <div className="pl-10">
      <p className="font-semibold text-lg">Shipping Address</p>
      <form action="" className="flex flex-col gap-4 mt-6">
        <FormControl>
          <FormLabel>Street Address</FormLabel>
          <Input
            name="address"
            type="text"
            value={shippingForm.address}
            onChange={(e) => {
              setShippingForm(old => ({
                ...old,
                [e.target.name]: e.target.value,
              }));
            }}
          />
        </FormControl>
        <FormControl>
          <FormLabel>City</FormLabel>
          <Input
            name="city"
            type="text"
            value={shippingForm.city}
            onChange={(e) => {
              setShippingForm(old => ({
                ...old,
                [e.target.name]: e.target.value,
              }));
            }}
          />
        </FormControl>
        <div className="flex gap-4">
          <FormControl>
            <FormLabel>District</FormLabel>
            <Input
              name="district"
              type="text"
              value={shippingForm.district}
              onChange={(e) => {
                setShippingForm(old => ({
                  ...old,
                  [e.target.name]: e.target.value,
                }));
              }}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Ward</FormLabel>
            <Input
              name="ward"
              type="text"
              value={shippingForm.ward}
              onChange={(e) => {
                setShippingForm(old => ({
                  ...old,
                  [e.target.name]: e.target.value,
                }));
              }}
            />
          </FormControl>
        </div>
        <button className="font-medium bg-black text-white px-4 py-2 w-fit rounded-lg">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default ShippingAddress;
