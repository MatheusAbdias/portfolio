import React from "react";
import Navbar from "./Navbar";
import MailForm from "./MailForm";

const Footer = () => {
  return (
    <div className="border-t mt-10">
      <Navbar className="flex-col gap-5" />
      <MailForm />
    </div>
  );
};

export default Footer;
