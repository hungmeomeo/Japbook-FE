"use client";

import Footer from "@/components/Footer";
import Payment from "@/components/Payment";
import { Suspense } from "react";
// import { Input } from "@chakra-ui/react";
// import { useSearchParams } from "next/navigation";
// import React, { Suspense, useEffect, useState } from "react";
// import { Textarea } from "@chakra-ui/react";
// import axios from "axios";
// import { web_link } from "@/config_var";
// import moment from "moment";
// import { sha256 } from "js-sha256";
// import Payment from "@/components/Payment";

// async function getIPFromAmazon() {
//   const request = await axios.get("https://checkip.amazonaws.com/");
//   const ipaddr = request.data;
//   return ipaddr;
// }

const VnPayMethod = () => {
  // const searchParam = useSearchParams();
  // const totalPrice = searchParam.get("total");
  // let formattedDate = moment().format("yyyyMMDDHHmmss");
  // let expireDate = moment().add(15, "minute").format("yyyyMMDDHHmmss");
  // let txnRef = formattedDate.slice(4);
  // console.log(formattedDate);
  // console.log(txnRef);
  // console.log(expireDate);
  // const query = {
  //   vnpVer: "2.1.0",
  //   vnpCmd: "pay",
  //   vnpTmnCode: "96SYYDBH",
  //   vnpAmt: totalPrice,
  //   vnpIp: "",
  //   // vnpBank: "VNPAYQR",
  //   vnpCreateDate: formattedDate,
  //   vnpCurr: "VND",
  //   vnpLang: "vn",
  //   vnpOrderInf: "",
  //   vnpOrderType: 150000,
  //   vnpRetUrl: `${web_link}/cart/success`,
  //   vnpExpDate: expireDate,
  //   vnpTxnRef: txnRef,
  //   vnpSecureHash: sha256("CBSODKTUGFGPAZJBUSMTCBJZQXWQOEVE"),
  // };

  // const [payQuery, setPayQuery] = useState(query);

  // useEffect(() => {
  //   const getIP = async () => {
  //     const userIp = await getIPFromAmazon();
  //     console.log("User IP: ", userIp);
  //     setPayQuery(old => ({ ...old, vnpIp: userIp.replace("\n", "") }));
  //   };
  //   getIP();
  // }, []);

  return (
    <Suspense>
      <Payment/>
      <Footer bgColor={"#F6F6F6"} />
    </Suspense>
  );
};

export default VnPayMethod;
