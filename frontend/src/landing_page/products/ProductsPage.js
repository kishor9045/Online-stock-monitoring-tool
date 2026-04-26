import Hero from "./Hero.js";
import LeftSection from "./LeftSection.js";
import RightSection from "./RightSection.js";
import Universe from "./Universe.js";

export default function ProductsPage(){
    return(
        < >
            <Hero/>
            <LeftSection imageURL="/media/images/kite.png" productTitle="Kite" productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices." firstLink="/" secondLink="/" googlePlay="/" appStore="/"/>
            <RightSection imageURL="/media/images/console.png" productTitle="Console" productDescription="The central dashboard for your Tradexa account. Gain insights into your trades and investments with in-depth reports and visualisations." link="/"/>
            <LeftSection imageURL="/media/images/coin.png" productTitle="Coin" productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices." firstLink="/" secondLink="/" googlePlay="/" appStore="/"/>
            <RightSection imageURL="/media/images/kiteconnect.png" productTitle="Kite Connect API" productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase." link="/"/>
            <LeftSection imageURL="/media/images/varsity.png" productTitle="Varsity mobile" productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go." firstLink="/" secondLink="/" googlePlay="/" appStore="/"/>
            <Universe/>
        </>
    )
}