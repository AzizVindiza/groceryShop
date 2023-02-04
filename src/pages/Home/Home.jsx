import React from 'react';
import Deliver from "./Deliver/Deliver";
import Stock from "./Stock/Stock";
import New from "./New/New";
import Popular from "./Popular/Popular";
import Offer from "./Offer/Offer";
import Shop from "./Shop/Shop";
import News from "./News/News";

const Home = () => {
    return (
        <>
            <Deliver/>
            <Stock/>
            <New/>
            <Popular/>
            <Offer/>
            <Shop/>
            <News/>
        </>
    );
};

export default Home;