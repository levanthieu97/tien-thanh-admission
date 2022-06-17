import React from "react";
import {
  HeaderComponent,
  BannerComponent,
  MarqueeComponent,
  IntroduceComponent,
  GiftComponent,
  ProductComponent,
  InformationComponent,
  ProductCarousel,
  CommentComponent,
  AboutUsComponent,
  FooterComponent
} from "../../component";
const LadingPage = (props) => {
  
  return (
    <React.Fragment>
      <HeaderComponent />
      <MarqueeComponent />
      <BannerComponent />
      <GiftComponent />
      <ProductComponent />
      <IntroduceComponent />
      <InformationComponent />
      <ProductCarousel/>
      <CommentComponent/>
      <AboutUsComponent/>
      <FooterComponent/>
    </React.Fragment>
  );
};

export default React.memo(LadingPage);
