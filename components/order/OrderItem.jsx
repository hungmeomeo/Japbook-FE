import moment from 'moment'
import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Divider,
} from "@chakra-ui/react";
import OrderProduct from "./OrderProduct";

const OrderItem = ({ order}) => {
  console.log("Inside order item ", order)
  return (
    <AccordionItem>
      <h2>
        <AccordionButton>
          <div className="flex pr-4">
            <div className="w-40 cursor-default">
              <p className="text-left">{order._id.slice(2, 10)}</p>
            </div>
            <div className="w-24 cursor-default">
              <p>{moment(order.orderdate).format("DD/MM/yyyy")}</p>
            </div>
            <div className="w-40 flex justify-end cursor-default">
              <p>{order.onDelivery ? "On Delivery" : "Delivered"}</p>
            </div>
          </div>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
        <div className="flex flex-col gap-2">
          {order.cart1.map(book => (
            <OrderProduct product={book} />
          ))}
          <Divider />
          <div className='flex flex-col items-end'>
            <div className="flex justify-between font-semibold w-full">
              <p>Total Price:</p>
              <p>{order.totalPrice}</p>
            </div>
            <p className='text-xs text-gray-400'>Including shipping fee and tax</p>
          </div>
        </div>
      </AccordionPanel>
    </AccordionItem>
  );
};

export default OrderItem;
