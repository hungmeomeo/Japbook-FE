import { useRouter } from "next/navigation";
import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import OrderProducts from "./OrderProducts";

const OrderItem = ({ orderId, orderDate, ordateState }) => {
  const router = useRouter();
  return (
    <AccordionItem>
      <h2>
        <AccordionButton>
          <div className="flex pr-4">
            <div className="w-48 cursor-default">
              <p className="text-left">Order Id</p>
            </div>
            <div className="w-24 cursor-default">
              <p>24/10/2024</p>
            </div>
            <div className="w-40 flex justify-end cursor-default">
              <p>On Delivery</p>
            </div>
          </div>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
        <div className="flex flex-col gap-2">
          <OrderProducts />
          <OrderProducts />
          <OrderProducts />
          <OrderProducts />
          <OrderProducts />
        </div>
      </AccordionPanel>
    </AccordionItem>
    // <div className="w-full p-4 flex border rounded-lg hover:bg-slate-100">
    //   <div className="w-32 cursor-default">
    //     <p>Order Id</p>
    //   </div>
    //   <div className="w-24 cursor-default">
    //     <p>24/10/2024</p>
    //   </div>
    //   <div className="w-40 flex justify-end cursor-default">
    //     <p>On Delivery</p>
    //   </div>
    // </div>
  );
};

export default OrderItem;
