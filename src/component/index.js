import CommonActions from "../common/CommonActions";

export const HeaderComponent = CommonActions.lazyWithPreload(() => import('./header-component'));
export const BannerComponent = CommonActions.lazyWithPreload(() => import('./banner-component'));
export const RegisterInfoComponent = CommonActions.lazyWithPreload(() => import('./register-info-component'));
export const MarqueeComponent = CommonActions.lazyWithPreload(() => import('./marquee-component'));
export const IntroduceComponent = CommonActions.lazyWithPreload(() => import('./introduce-component'));
export const GiftComponent = CommonActions.lazyWithPreload(() => import('./gift-component'));
export const ProductComponent = CommonActions.lazyWithPreload(() => import('./product-component'));
export const InformationComponent = CommonActions.lazyWithPreload(() => import('./information-component'));
export const ProductCarousel = CommonActions.lazyWithPreload(() => import('./product-carousel-component'));
export const CommentComponent = CommonActions.lazyWithPreload(() => import('./comment-component'));
export const AboutUsComponent = CommonActions.lazyWithPreload(() => import('./about-us-component'));


