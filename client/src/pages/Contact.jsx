import React from "react";
import Layout from "./../components/Layout/Layout";
import {
  BiMailSend,
  BiPhoneCall,
} from "react-icons/bi";
import { FaRegAddressCard } from "react-icons/fa";
const Contact = () => {
  return (
    <Layout title={"Contact us"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/cactus.jpg"
            alt="contactus"
            style={{ width: "50%",borderRadius:"20px",marginLeft:"80px",marginTop:"40px" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
          <p className="text-justify mt-2">
            We Would Love To Hear From You. Feel Free To Reach Out Using The
            Below Details
          </p>
          <p className="mt-3">
            <FaRegAddressCard /> : Near Old Electricity Office, Siwan
          </p>
          <p className="mt-3">
            <BiMailSend /> : info@gammavit.com
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : +919939521220
          </p>
          <p className="mt-3">GST : 10AAJCG8505A1Z8</p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
