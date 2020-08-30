import React, { Component } from "react";
import Navbar from "../components/Layouts/Navbar";
import MainBanner from "../components/DefaultHome/MainBanner";
import OurWorks from "../components/DefaultHome/OurWorks";
import CtaArea from "../components/Common/CtaArea";
import Partner from "../components/Common/Partner";
import Footer from "../components/Layouts/Footer";
import OurServices from "../components/DefaultHome/OurServices";
import ServiceStyleTwo from "../components/DefaultHome/ServiceStyleTwo";
import WhyChooseUs from "../components/DefaultHome/WhyChooseUs";
import PricingStyleThree from "../components/Pricing/PricingStyleThree";

class Index extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <MainBanner />
        <OurServices />
        <ServiceStyleTwo />
        <WhyChooseUs />
        <Partner />
        <OurWorks />
        <PricingStyleThree />
        <CtaArea />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Index;
