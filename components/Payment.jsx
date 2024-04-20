"use client";

import Footer from "@/components/Footer";
import { Input } from "@chakra-ui/react";
import { useSearchParams } from "next/navigation";
import React, { Suspense, useEffect, useState } from "react";
import { Textarea } from "@chakra-ui/react";
import axios from "axios";
import { web_link } from "@/config_var";
import moment from "moment";
import { sha256 } from "js-sha256";

async function getIPFromAmazon() {
  const request = await axios.get("https://checkip.amazonaws.com/");
  const ipaddr = request.data;
  return ipaddr;
}

const Payment = () => {
  const searchParam = useSearchParams();
  const totalPrice = searchParam.get("total");
  let formattedDate = moment().format("yyyyMMDDHHmmss");
  let expireDate = moment().add(15, "minute").format("yyyyMMDDHHmmss");
  let txnRef = formattedDate.slice(4);
  console.log(formattedDate);
  console.log(txnRef);
  console.log(expireDate);
  const query = {
    vnpVer: "2.1.0",
    vnpCmd: "pay",
    vnpTmnCode: "96SYYDBH",
    vnpAmt: totalPrice,
    vnpIp: "",
    // vnpBank: "VNPAYQR",
    vnpCreateDate: formattedDate,
    vnpCurr: "VND",
    vnpLang: "vn",
    vnpOrderInf: "",
    vnpOrderType: 150000,
    vnpRetUrl: `${web_link}/cart/success`,
    vnpExpDate: expireDate,
    vnpTxnRef: txnRef,
    vnpSecureHash: sha256("CBSODKTUGFGPAZJBUSMTCBJZQXWQOEVE"),
  };

  const [payQuery, setPayQuery] = useState(query);

  useEffect(() => {
    const getIP = async () => {
      const userIp = await getIPFromAmazon();
      console.log("User IP: ", userIp);
      setPayQuery(old => ({ ...old, vnpIp: userIp.replace("\n", "") }));
    };
    getIP();
  }, []);

  return (
    <>
      <main className="responsive-layout py-10">
        <h1 className="text-3xl font-bold text-center">Payment Information</h1>
        <form
          action=""
          className="mt-4"
          onSubmit={async e => {
            e.preventDefault();
            console.log(payQuery);
            const payUrl = `https://sandbox.vnpayment.vn/paymentv2/vpcpay.html?vnp_Amount=${payQuery.vnpAmt}&vnp_Command=${payQuery.vnpCmd}&vnp_CreateDate=${payQuery.vnpCreateDate}&vnp_CurrCode=${payQuery.vnpCurr}&vnp_ExpireDate=${payQuery.vnpExpDate}&vnp_IpAddr=${payQuery.vnpIp}&vnp_Locale=${payQuery.vnpLang}&vnp_OrderInfo=${payQuery.vnpOrderInf}&vnp_OrderType=${payQuery.vnpOrderType}&vnp_ReturnUrl=${payQuery.vnpRetUrl}&vnp_TmnCode=${payQuery.vnpTmnCode}&vnp_TxnRef=${payQuery.vnpTxnRef}&vnp_Version=${payQuery.vnpVer}&vnp_SecureHash=${payQuery.vnpSecureHash}`;
            console.log(payUrl);
            window.location.replace(payUrl);
          }}
        >
          {/* <div>
            <label htmlFor="" className="text-lg font-semibold">
              Paying Option
            </label>
            <div className="flex justify-between mt-2">
              <div
                className={`flex flex-col justify-between items-center w-24 border-2 rounded-lg p-2 ${
                  payQuery.vnpBank == "VNPAYQR" && "bg-gray-100"
                }`}
                onClick={() => {
                  setPayQuery(old => ({ ...old, vnpBank: "VNPAYQR" }));
                }}
              >
                <div className="h-1/2 flex items-center">
                  <img src="/qr.png" alt="" />
                </div>
                <p className="text-center">QRCode</p>
              </div>
              <div
                className={`flex flex-col justify-between items-center w-24 border-2 rounded-lg p-2 ${
                  payQuery.vnpBank == "VNBANK" && "bg-gray-100"
                }`}
                onClick={() => {
                  setPayQuery(old => ({ ...old, vnpBank: "VNBANK" }));
                }}
              >
                <div className="h-1/2 flex items-center">
                  <img
                    src="https://vtcpay.vn/media2/Upload/Images/news/CMS_Paygate/Image/201602/a1_22022016114439.png"
                    alt=""
                  />
                </div>
                <p className="text-center">National Bank</p>
              </div>
              <div
                className={`flex flex-col justify-between items-center w-24 border-2 rounded-lg p-2 ${
                  payQuery.vnpBank == "INTCARD" && "bg-gray-100"
                }`}
                onClick={() => {
                  setPayQuery(old => ({ ...old, vnpBank: "INTCARD" }));
                }}
              >
                <div className="h-1/2 flex items-center">
                  <img
                    src="https://paymentsnext.com/wp-content/uploads/2018/10/Visa_Mastercard_Logo.png"
                    alt=""
                    className="h-full"
                  />
                </div>
                <p className="text-center">Inter Card</p>
              </div>
            </div>
          </div> */}
          <div className="mt-4">
            <label htmlFor="" className="text-lg font-semibold">
              Total Price
            </label>
            <Input type="number" value={totalPrice} disabled />
          </div>
          <div className="mt-4">
            <label htmlFor="" className="text-lg font-semibold">
              Message
            </label>
            <Textarea
              value={payQuery.vnpOrderInf}
              onChange={e =>
                setPayQuery(old => ({ ...old, vnpOrderInf: e.target.value }))
              }
              placeholder="Write what you want to remind"
              required
            />
          </div>
          <button className="text-white bg-black font-semibold py-2 w-full mt-4 rounded-md">
            Submit
          </button>
        </form>
      </main>
      
    </>
  );
};

export default Payment;
