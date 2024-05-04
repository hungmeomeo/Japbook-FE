import React, { useEffect, useState } from 'react'
import { FilterDispatch } from '@/context/Context';
import { useContext } from 'react';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Combobox from './Combobox';
import RangeSliderUI from './RangeSlider';
import axios from 'axios';
import { be_url } from '@/config_var';



const Filter = () => {
  // const dispatch = useContext(FilterDispatch)
  // const [genreList, setList] = useState([])
  // useEffect(() => {
  //   const createGenreList = async () => {
  //     const fetchList = await axios.get(`${be_url}/genre`);
  //     setList(fetchList.data);
  //   };
  //   createGenreList();
  // }, []);
  return (
    <div className="w-3/5 md:w-1/4 bg-white border-2 p-4 rounded-md flex flex-col gap-4 h-fit md:sticky top-5">
      {/* <div>
        <p className="font-semibold mb-2">Book Type</p>
        <Select
          onValueChange={selectVal => dispatch({ type: "FilterBookType", bookType: selectVal })}
          className="outline-none"
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Both" defaultValue="Both" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Light Novel">Light Novel</SelectItem>
            <SelectItem value="Manga">Manga</SelectItem>
            <SelectItem value="Both">Both</SelectItem>
          </SelectContent>
        </Select>
      </div> */}
      <div>
        <p className="font-semibold mb-2">Genre</p>
        <Combobox/>
      </div>
      <div>
        <p className="font-semibold mb-2">Price</p>
        <RangeSliderUI />
      </div>
    </div>
  );
}

export default Filter