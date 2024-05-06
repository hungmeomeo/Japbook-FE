import React, { useEffect, useState } from "react";
import OrderContent from "./order/OrderContent";
import OrderItem from "./order/OrderItem";
import axios from "axios";
import { be_url } from "@/config_var";
import Cookies from "js-cookie";
import {v4 as uuid} from "uuid"

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];

const CustomerOrderList = () => {
  const [orderList, setOrderList] = useState([])
  useEffect(() => {
    const getOrders = async () => {
      const userOrderList = await axios.get(`${be_url}/user/${Cookies.get("userId")}/checkOrder`)
      setOrderList(userOrderList.data)
    }
    getOrders()
  }, [])



  console.log(orderList)


  return (
    <div className="mt-4 py-4 md:mt-0 md:pl-10 flex flex-col">
      <p className="font-semibold text-lg">Your Order List</p>
      <OrderContent>
        {
          orderList.map(order => (
            <OrderItem key={uuid()} order={order}/>
          ))
        }
      </OrderContent>
    </div>
  );
};

export default CustomerOrderList;
