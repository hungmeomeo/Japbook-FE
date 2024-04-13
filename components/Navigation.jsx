import React from 'react'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react";
import { ChevronRightIcon } from 'lucide-react';
import { v4 as uuidv4 } from "uuid";

const Navigation = ({path}) => {
  return (
    <div className="w-full xl:px-40 lg:px-24 md:px-10 py-14 bg-[#F6F6F6]">
      <h2 className="font-bold text-2xl">{path[path.length-1]}</h2>
      <Breadcrumb
        spacing="8px"
        separator={<ChevronRightIcon color="#5F5C6A" />}
      >
        {path.map((ele, idx) => {
          return (
            <BreadcrumbItem key={uuidv4()} isCurrentPage={false}>
              <BreadcrumbLink href="#">{ele}</BreadcrumbLink>
            </BreadcrumbItem>
          );
        })}
      </Breadcrumb>
    </div>
  );
}

export default Navigation