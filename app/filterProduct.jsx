"use client";

import React from "react";
import { useState } from "react";

const FilterProduct = ({ children }) => {
  const [myUseState, setMyUseState] = useState("This is use state");
  return <> {children}</>;
};

export default FilterProduct;
