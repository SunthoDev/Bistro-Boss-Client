import React, { useEffect } from 'react';
import "./OurMenu.css"
import { Helmet } from 'react-helmet-async';
import CoverBanner from '../OurMenuAllSeection/OurMenuBannerCover/CoverBanner';
import menuImg from "../../assets/menu/menu-xx.png"
import useMenu from '../../Hooks/useMenu';
import MenuCategory from '../OurMenuAllSeection/MenuCategory/MenuCategory';
import dessert from"../../assets/menu/dessert-bg.jpeg"
import pizza from"../../assets/menu/pizza-bg.jpg"
import salad from"../../assets/menu/salad-bg.jpg"
import soup from"../../assets/menu//soup-bg.jpg"

const OurMenu = () => {

    let [menu] = useMenu()

    let offered = menu.filter(offer => offer.category ==="offered")
    let desserts = menu.filter(des => des.category === "dessert")
    let pizzas = menu.filter(pizza => pizza.category === "pizza")
    let salads = menu.filter(salad => salad.category === "salad")
    let soups = menu.filter(sou => sou.category === "soup")

    return (
        <div className="">

            {/* dynamic title use */}
            <Helmet>
                <title>Bistro Boss || Order Menu</title>
            </Helmet>

            {/* component use  */}
            <CoverBanner menuImg={menuImg} title={"OUR MENU"} pa={"Would you like to try a dish?"}></CoverBanner>

            {/* title use  */}

            <div className="mx-4 md:mx-32 mt-14">
                <div className="title px-4 md:px-0 w-full md:w-1/4 mx-auto mb-6">
                    <p>------Don't miss------</p>
                    <h3>TODAY'S OFFER</h3>
                </div>
            </div>


            {/* offered menu items use  */}
            <div className="mx-4 md:mx-32">
                <MenuCategory items={offered}></MenuCategory>
            </div>

            {/* desserts menu items use  */}
            <CoverBanner menuImg={dessert} title={"DESSERTS"} pa={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}></CoverBanner>

            <div className="mx-4 md:mx-32">
                <MenuCategory items={desserts} title={"dessert"}></MenuCategory>
            </div>

            {/* pizzas menu items use  */}
            <CoverBanner menuImg={pizza} title={"PIZZA"} pa={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}></CoverBanner>

            <div className="mx-4 md:mx-32">
                <MenuCategory items={pizzas} title={"pizza"}></MenuCategory>
            </div>

            {/* salads menu items use  */}
            <CoverBanner menuImg={salad} title={"SALADS"} pa={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}></CoverBanner>

            <div className="mx-4 md:mx-32">
                <MenuCategory items={salads}  title={"salad"}></MenuCategory>
            </div>

            {/* soups menu items use  */}
            <CoverBanner menuImg={soup} title={"SOUPS"} pa={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}></CoverBanner>

            <div className="mx-4 md:mx-32">
                <MenuCategory items={soups} title={"soup"}></MenuCategory>
            </div>

        </div>
    );
};

export default OurMenu;