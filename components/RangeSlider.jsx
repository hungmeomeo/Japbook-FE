import React, { useState } from "react";
import {
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
} from "@chakra-ui/react";

const RangeSliderUI = () => {
  const [val, setVal] = useState([10, 30]);
  return (
    <>
      <RangeSlider
        onChange={newVal => {
          setVal(newVal);
        }}
        aria-label={["min", "max"]}
        defaultValue={[10, 30]}
      >
        <RangeSliderTrack>
          <RangeSliderFilledTrack />
        </RangeSliderTrack>
        <RangeSliderThumb index={0} className="z-0" />
        <RangeSliderThumb index={1} className="z-0" />
      </RangeSlider>
      <div className="flex justify-between">
        <p>${val[0]}</p>
        <p>${val[1]}</p>
      </div>
    </>
  );
};

export default RangeSliderUI;
