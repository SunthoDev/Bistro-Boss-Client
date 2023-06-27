import React, { useState } from 'react';
import "./OurShop.css"
import CoverBanner from '../OurMenuAllSeection/OurMenuBannerCover/CoverBanner';
import shopBanner from "../../assets/shop/banner2.jpg"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../Hooks/useMenu';
import ShopCard from '../OurShopAllSection/ShopCard/ShopCard';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const OurShop = () => {

    let categories = ["salad", "pizza", "soup", "dessert", "drinks"]
    let { category } = useParams()
    let initialIndex = categories.indexOf(category)

    let [tabIndex, setTabIndex] = useState(initialIndex)
    let [menu] = useMenu()
    let drinks = menu.filter(offer => offer.category === "drinks")
    let desserts = menu.filter(des => des.category === "dessert")
    let pizzas = menu.filter(pizza => pizza.category === "pizza")
    let salads = menu.filter(salad => salad.category === "salad")
    let soups = menu.filter(sou => sou.category === "soup")


    return (
        <div className=''>
            <Helmet>
                <title>Bistro Boss || Our Shop</title>
            </Helmet>


            <CoverBanner menuImg={shopBanner} title={"OUR SHOP"} pa={"Would you like to try a dish?"}></CoverBanner>

            <div className="mx-4 md:mx-32 mt-14">

                <div className="title px-4 md:px-0 w-full md:w-1/4 mx-auto mb-6">
                    <p>------Don't miss------</p>
                    <h3>TODAY'S OFFER</h3>
                </div>

                <div className="text-center my-14">
                    <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                        <TabList>
                            <Tab>Salad</Tab>
                            <Tab>pizza</Tab>
                            <Tab>soups</Tab>
                            <Tab>desserts</Tab>
                            <Tab>drinks</Tab>
                        </TabList>

                        <TabPanel>

                            <div className="grid md:grid-cols-3 gap-5">
                                {
                                    salads.map(item => <ShopCard
                                        key={item._id}
                                        item={item}
                                    ></ShopCard>)
                                }
                            </div>

                        </TabPanel>

                        <TabPanel>
                            <div className="grid md:grid-cols-3 gap-5">
                                {
                                    pizzas.map(item => <ShopCard
                                        key={item._id}
                                        item={item}
                                    ></ShopCard>)
                                }
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="grid md:grid-cols-3 gap-5">
                                {
                                    soups.map(item => <ShopCard
                                        key={item._id}
                                        item={item}
                                    ></ShopCard>)
                                }
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="grid md:grid-cols-3 gap-5">
                                {
                                    desserts.map(item => <ShopCard
                                        key={item._id}
                                        item={item}
                                    ></ShopCard>)
                                }
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="grid md:grid-cols-3 gap-5">
                                {
                                    drinks.map(item => <ShopCard
                                        key={item._id}
                                        item={item}
                                    ></ShopCard>)
                                }
                            </div>
                        </TabPanel>
                    </Tabs>
                </div>

            </div>

        </div>
    );
};

export default OurShop;