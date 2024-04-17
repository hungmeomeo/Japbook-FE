"use client";

import Detail from "@/components/Detail";
import Navigation from "@/components/Navigation";
import SetPassword from "@/components/SetPassword";
import ShippingAddress from "@/components/ShippingAddress";
import Sidebar from "@/components/Sidebar";
import React, { useState } from "react";

const Profile = () => {
  const [navItem, setNavItem] = useState("Addr"); // Addr | Pass | Detail
  let display;
  switch (navItem) {
    case "Addr":
      display = <ShippingAddress />;
      break;
    // case "Pass":
    //   display = <SetPassword />;
    //   break;
    case "Detail":
      display = <Detail />;
      break;
  }
  return (
    <>
      <Navigation path={["Ecommerce", "My Account"]} />
      <Sidebar navItem={navItem} setNavItem={setNavItem}>
        {display}
      </Sidebar>
    </>
  );
};

export default Profile;
