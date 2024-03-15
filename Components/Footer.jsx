import React from "react";

const Footer = () => {
  const productList = ["Market", "ERC20 Token", "Donations"];
  const contactList = [
    "support@ultracryp.com",
    "info@ultracryp.com",
    "Contact Us",
  ];

  const useFullLink = ["Home", "About Us", "Company Bio"];
  return (
    <footer className="text-center text-white backgroundMain lg:text-left">
      <div className="mx-6 py-10 text-center md:text-left">
        <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h6 className="md-4 flex items-center justify-center font-semibold uppercase md:justify-start">
              UltraCryp
            </h6>
            <p>
              Here uou can use rows and colums to organise your footer content
              Lorem ipsum dolor sit amet, consectetur adipisicing.
            </p>
          </div>
          <div className="">
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Products
            </h6>
            {productList.map((el, i) => (
              <p key={i}>
                <a href="/">{el}</a>
              </p>
            ))}
          </div>
          <div className="">
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Usefull Links
            </h6>
            {useFullLink.map((el, i) => (
              <p key={i}>
                <a href="/">{el}</a>
              </p>
            ))}
          </div>
          <div className="">
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Contact
            </h6>
            {contactList.map((el, i) => (
              <p key={i}>
                <a href="/">{el}</a>
              </p>
            ))}
          </div>
        </div>
        <div className="backgroundMain p-4 text-center ">
          <span>Copywrite 2024 </span>
          <a href="/" className="font-semibold">
            UltraCryp
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
