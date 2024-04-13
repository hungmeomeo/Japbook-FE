import React from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import Combobox from './Combobox';
import RangeSliderUI from './RangeSlider';



const Filter = () => {
  return (
    <div className="w-1/4 border-2 p-4 rounded-md flex flex-col gap-4 h-fit sticky top-5">
      <div>
        <p className="font-semibold mb-2">Book Type</p>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Both" defaultValue="Both" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="LN">Light Novel</SelectItem>
            <SelectItem value="Manga">Manga</SelectItem>
            <SelectItem value="Both">Both</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <p className="font-semibold mb-2">Genre</p>
        <Combobox />
      </div>
      <div>
        <p className="font-semibold mb-2">Price</p>
        <RangeSliderUI/>
      </div>
    </div>
  );
}

export default Filter