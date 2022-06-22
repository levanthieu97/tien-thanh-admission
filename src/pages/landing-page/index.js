import React from "react";
import {
  HeaderComponent,
  BannerComponent,
  MarqueeComponent,
  AnnouncementsComponent,
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
      <AnnouncementsComponent/>
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
