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
  AboutUsComponent
} from "../../component";
const LadingPage = (props) => {
  console.log(props);

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
    </React.Fragment>
  );
};

export default React.memo(LadingPage);
