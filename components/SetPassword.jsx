import React from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
} from "@chakra-ui/react";

const SetPassword = () => {
  return (
    <div className="pl-10">
      <p className="font-semibold text-lg">Change Password</p>
      <form
        onSubmit={e => {
          e.preventDefault();
          console.log(e);
        }}
        action=""
        className="flex flex-col gap-4 mt-6"
      >
        <FormControl>
          <FormLabel>New Password</FormLabel>
          <Input name="pwd" type="password" required />
        </FormControl>
        <FormControl>
          <FormLabel>Confirm Password</FormLabel>
          <Input name="re_pwd" type="password" required />
        </FormControl>
        <button className="font-medium bg-black text-white px-4 py-2 w-fit rounded-lg">
          Change password
        </button>
      </form>
    </div>
  );
};

export default SetPassword;
