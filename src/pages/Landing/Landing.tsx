import {
  BookATable,
  CarouselComp,
  Chefs,
  Contacts,
  CopyRights,
  Gallery,
  MapComp,
  Menu,
  NavBar,
  OfferText,
  Title,
  VideoPlayer,
} from "./components";

import chicken from "../../assets/chicken.jpg";
import { Container } from "./styles";
import hakkaNoodles from "../../assets/hakkaNoodles.jpg";
import pannerTikka from "../../assets/panner-tikka.jpeg";
import schezwan from "../../assets/schezwan.jpg";
import foodBg from "../../assets/food-bg.jpg";
import dinning from "../../assets/dinning.jpg";
import lottie from "../../assets/Animation - 1710253872820.json";
import chef1 from "../../assets/chef-1.jpg";
import chef2 from "../../assets/chef-2.jpg";
import chef3 from "../../assets/chef-3.jpg";
import chef4 from "../../assets/chef-4.jpg";
import { menuData } from "./config/menu-config";
import { galleryData } from "./config/gallery-config";
import { openingHours } from "./config/opening-hours.config";
import { dishes } from "./config/dishes.config";

export interface LandingProps {}

let data = [
  {
    id: 1,
    source: hakkaNoodles,
    name: "HAKKA NOODLES",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias provident laborum, recusandae delectus",
    cost: "₹350.00",
  },

  {
    id: 5,
    source: pannerTikka,
    name: "PANNER TIKKA",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias provident laborum, recusandae delectus",
    cost: "₹150.00",
  },
  {
    id: 6,
    source: schezwan,
    name: "SCHEZWAN RICE",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias provident laborum, recusandae delectus",
    cost: "₹150.00",
  },
  {
    id: 7,
    source: pannerTikka,
    name: "PANNER TIKKA",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias provident laborum, recusandae delectus",
    cost: "₹150.00",
  },
  {
    id: 8,
    source: pannerTikka,
    name: "PANNER TIKKA",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias provident laborum, recusandae delectus",
    cost: "₹150.00",
  },
];

let content = [
  {
    id: 2,
    description:
      "Our commitment to excellence shines through in every ingredient, sourced from local artisans and global purveyors who share our dedication to quality. Step into our world of gastronomic wonders and discover a dining experience like no other",
  },
  {
    id: 3,
    description:
      "Explore a menu curated with care, featuring a fusion of traditional recipes and contemporary twists that redefine the art of dining. Each dish is a masterpiece, meticulously crafted by our skilled chefs to deliver an unforgettable culinary experience",
  },
];

let chefData = [
  {
    id: 1,
    source: chef1,
    name: "RICHARD NAUZ",
    title: "food chef",
  },
  {
    id: 2,
    source: chef2,
    name: "JOHANS",
    title: "food chef",
  },
  {
    id: 3,
    source: chef3,
    name: "OLIVIA",
    title: "food chef",
  },
  {
    id: 4,
    source: chef4,
    name: "HOWARD",
    title: "food chef",
  },
];

export function Landing() {
  const _renderNavBar = () => {
    return <NavBar title="SHAN'S FOOD" subTitle="RESTAURANT" />;
  };

  const _renderTitle = () => {
    return <Title title="BEST QUALITY FOOD" />;
  };

  const _renderCarousel = () => {
    return <CarouselComp child={dishes} />;
  };

  const _renderVideoPlayer = () => {
    return (
      <VideoPlayer
        backgroundImage={foodBg}
        thumbNail={dinning}
        videoUrl={"https://youtu.be/P2sO0yr7YpQ?si=wl6pyK3Dti3l1XK2"}
        content={content}
      />
    );
  };

  const _renderOfferText = () => {
    return <OfferText lottie={lottie} />;
  };

  const _renderChef = () => {
    return (
      <Chefs
        title={"OUR BEST CHEF"}
        child={chefData}
        subTitle={
          "Presenting our lineup of culinary wizards, each renowned for their mastery of the culinary arts"
        }
      />
    );
  };

  const _renderMenu = () => {
    return <Menu bgImage={foodBg} menu={menuData} />;
  };

  const _renderGallery = () => {
    return <Gallery galleryData={galleryData} />;
  };

  const _renderBookATable = () => {
    return <BookATable bgImage={foodBg} list={openingHours} />;
  };

  const _renderContacts = () => {
    return <Contacts />;
  };

  const _renderMap = () => {
    return <MapComp />;
  };

  const _renderCopyRights = () => {
    return <CopyRights />;
  };
  return (
    <>
      {_renderNavBar()}
      <Container
        style={{
          backgroundImage: `url(${chicken})`,
        }}
      >
        {_renderTitle()}
        {_renderCarousel()}
        {_renderVideoPlayer()}
        {_renderOfferText()}
        {_renderChef()}
        {_renderMenu()}
        {_renderGallery()}
        {_renderBookATable()}
        {_renderContacts()}
        {_renderMap()}
        {_renderCopyRights()}
      </Container>
    </>
  );
}

Landing.defaultProps = {};
