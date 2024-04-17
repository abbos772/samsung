import React from "react";
import "../Main/Main.css";
import gaz from "../../../img/prod_26705080512.jpg";
import door from "../../../img/RF29BB8600QL_01_Stainless_Steel_SCOM_zu2pml__43133.jpg";
import waterm from "../../../img/WD53DBA900HZA1_01_Dark_Steel_SCOM.avif";
import Banner from "../Banner/Banner";
import buds from "../../../img/Q4B4B2C-86-SM-R510_001_Front_Graphite_RGB-GalleryImage-1600x1200 (1).avif";
import Home from "../../../img/Homepage_LOB_LifestyleWK_TheFrame_Desktop_1440x810.avif";
import lob from "../../../img/LOB_Bespoke-AI.avif";
import samsung1 from "../../../img/sustainability-1-dt.avif";
const Main = () => {
  const data = [
    {
      id: 1,
      url: gaz,
      title:
        "Bespoke 6 cu. ft. Smart Slide-In Gas Range with Smart Oven Camera &...",
      price: "600",
      oldprice: "1499",
    },
    {
      id: 2,
      url: gaz,
      title:
        "Bespoke 6.3 cu. ft. Smart Slide-In Electric Range with Air Said Camera &...",
      price: "600",
      oldprice: "1399",
    },
    {
      id: 3,
      url: door,
      title: "Bespoke 4 - Door French door Refrigerator (29 cu.ft) with...",
      price: "1200",
      oldprice: "2199",
    },
    {
      id: 4,
      url: door,
      title: "23 cu.ft.Bespoke 4-Door Flex Refrigerator with AL Family Hub",
      price: "1200",
      oldprice: "3899",
    },
    {
      id: 5,
      url: waterm,
      title:
        "Bespoke 5.3 cu. ft. All-In-One Al Laundry Combo Ultra Capacity...",
      price: "1100",
      oldprice: "2199",
    },
    {
      id: 6,
      url: buds,
      title: "Galaxy Buds 2 pro",
      price: "40",
      oldprice: "189.99 before eligible trade-in",
    },
  ];
  const cards = data?.map((el) => (
    <div key={el.id} className="cart">
      <div className="new">New</div>
      <img src={el.url} alt="" width={150} />
      <h4 className="card__h4">{el.title}</h4>
      <p className="card__p">Save ${el.price}</p>
      <p>From ${el.oldprice}</p>
      <ul class="sci">
        <button className="btn">Pre-order now</button>
      </ul>
    </div>
  ));
  let a = [
    "The Frame",
    "The Freestyle2en Gen MusicFrame",
    "Galaxy Book4 Ultra",
    "Galaxy Tab s9 Series",
    "Galaxy Watch 6 Series",
  ];
  let b = ["Galaxy s24 Ultra", "Galaxy s24+", "Galaxy Book4 Ultra"];
  let text3 = ["Bespoke Al", "Bespoke Ref", "Bespoke Laund"];
  return (
    <div>
      <div className="big__cart">
        <div className="cart__text">
          <a href="">For You</a>
          <a href="">Mobile&Computing</a>
          <a href="">TV&Audio</a>
          <a href="">HomeAppliances</a>
          <a href="">SamsungLive</a>
          <a href="">For Business</a>
        </div>
        <div className="carts">{cards}</div>
      </div>
      <Banner
        title={"Mobile & Computing"}
        text={a}
        samsung={"Galaxy S24 Ultra"}
        samtitle={
          " Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium molestiae eaque provident quis obcaecati fugiat perferendis "
        }
        tv={"TV & Audio"}
        text2={b}
        url={Home}
        text3={text3}
        home={"Home Appliances"}
      />
    </div>
  );
};

export default Main;
