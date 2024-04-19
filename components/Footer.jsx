import React from 'react'

const Footer = ({bgColor}) => {
  return (
    <footer className={`responsive-layout py-20 flex justify-between bg-[${bgColor}]`}>
      <div className="w-1/4">
        <div className="flex gap-2 font-bold text-xl items-center">
          <img src="/logo-footer.png" alt="" />
          <p>JapBook</p>
        </div>
        <p className="text-[#5C5F6A] mt-4">
          This is an ecommerce website used for the project in the ecommerce
          course
        </p>
        <div className="flex gap-4 mt-2">
          <img src="/Github.png" alt="" />
          <img src="/Instagram.png" alt="" />
          <img src="/Youtube.png" alt="" />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-x-8 gap-y-4">
        <div>
          <h4 className="text-[#5C5F6A] mb-6">SUPPORT</h4>
        </div>
        <div>
          <h4 className="text-[#5C5F6A]">COMPANY</h4>
        </div>
        <div>
          <h4 className="text-[#5C5F6A]">SHOP</h4>
        </div>
        <div>
          <p>FAQ</p>
        </div>
        <div>
          <p>About Us</p>
        </div>
        <div>
          <p>My Account</p>
        </div>
        <div>
          <p>Terms of use</p>
        </div>
        <div>
          <p>Contact</p>
        </div>
        <div>
          <p>Checkout</p>
        </div>
        <div>
          <p>Privacy Policy</p>
        </div>
        <div>
          <p>Career</p>
        </div>
        <div>
          <p>Cart</p>
        </div>
      </div>
      <div>
        <h4 className="text-[#5C5F6A]">ACCEPTED PAYMENTs</h4>
        <div className="flex gap-2 mt-4">
          <img src="/Mastercard.png" alt="" />
          <img src="/Amex.png" alt="" />
          <img src="/Visa.png" alt="" />
        </div>
      </div>
    </footer>
  );
}

export default Footer