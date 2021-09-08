import "./App.scss";
import Main from "./components/Main";
import PackagesDiscover from "./components/PackagesDiscover";
import PromotionPlayer from "./components/PromotionPlayer";
import SlickSlider from "./components/SlickSlider";
import Species from "./components/Species";
import SpeciesGroup from "./components/SpeciesGroup";
import SpeciesSubscribeButton from "./components/SpeciesSubscribeButton";
import WatchIcons from "./components/WatchIcons";
import Footer from "./layouts/Footer";
import Navi from "./layouts/Navi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Banner from "./layouts/Banner";

const bannerData=[
  {
    id:1,
    bannerUrl:"img/banner.jpeg"
  },
  {
    id:2,
    bannerUrl:"img/banner2.jpeg"
  },
  {
    id:3,
    bannerUrl:"img/banner3.jpeg"
  },
  {
    id:4,
    bannerUrl:"img/banner4.jpeg"
  },
]

const sliderData=[
  {
    id:1,
    sliderUrl:"img/anasayfakampanyabanner1.jpg",
    sliderTopTitle:"Smart Tv",
    sliderBottomTitle:"TV+ her ekranda"
  },
  {
    id:2,
    sliderUrl:"img/anasayfakampanyabanner2.jpg",
    sliderTopTitle:"Abone Ol",
    sliderBottomTitle:"Smart TV, Web, Mobil, Tablet"
  },
  {
    id:3,
    sliderUrl:"img/anasayfakampanyabanner3.jpeg",
    sliderTopTitle:"The Pembrokeshire Murders",
    sliderBottomTitle:"The Pembrokeshire Murders tüm bölümleriyle sadece TV+'ta."
  },
  {
    id:4,
    sliderUrl:"img/anasayfakampanyabanner4.jpeg",
    sliderTopTitle:"Two Weeks to Live",
    sliderBottomTitle:"Tüm bölümleriyle sadece TV+'ta"
  },
  {
    id:5,
    sliderUrl:"img/anasayfakampanyabanner5.jpeg",
    sliderTopTitle:"The End of the Storm",
    sliderBottomTitle:"Liverpool'un 2019-2020 yılındaki şampiyonluk hikayesinin anlatıldığı bu belgeseli Türkçe dublaj, alt yazılı ve İngilizce olarak TV+'ta izleyebilirsiniz."
  },
  {
    id:6,
    sliderUrl:"img/anasayfakampanyabanner6.jpeg",
    sliderTopTitle:"Judas and the Black Messiah",
    sliderBottomTitle:"Oscar ödüllü filmler TV+'ta"
  },
  {
    id:7,
    sliderUrl:"img/anasayfakampanyabanner7.jpeg",
    sliderTopTitle:"Wrong Man",
    sliderBottomTitle:"Masumiyetini kanıtlamaya çalışan 3 hayat..."
  },
  {
    id:8,
    sliderUrl:"img/anasayfakampanyabanner8.jpeg",
    sliderTopTitle:"The Bay",
    sliderBottomTitle:"Tüm bölümleriyle sadece TV+'ta"
  },
  {
    id:9,
    sliderUrl:"img/anasayfakampanyabanner9.jpeg",
    sliderTopTitle:"Blinded: Those Who Kill",
    sliderBottomTitle:"Blinded: Those Who Kill dizisi TV+ ayrıcalığıyla sizlerle! Türkçe dublaj, alt yazılı veya İngilizce olarak Blinded: Those Who Kill izlemek için hemen tıklayın!"
  },
  {
    id:10,
    sliderUrl:"img/anasayfakampanyabanner10.jpeg",
    sliderTopTitle:"Wonder Woman 1984",
    sliderBottomTitle:"Wonder Woman 1984 filmini Türkçe dublaj ve alt yazılı seçenekleriyle izlemek için tıklayın! Wonder Woman 1984 TV+’ta sizi bekliyor!"
  },
]

const watchData = [
  {
    id: 1,
    title: "Her Yerden İzle",
    imgUrl: "img/1.png",
    description:
      "TV ekranında başka bir yayın devam ederken, tabletin ya da telefonunda başka bir yayın izleyebilirsin.",
  },
  {
    id: 2,
    title: "4K Ultra HD",
    imgUrl: "img/2.png",
    description: "Yayınları 4K Ultra HD kalitesinde izle.",
  },
  {
    id: 3,
    title: "Kaydet İzle",
    imgUrl: "img/3.png",
    description:
      "İzlemeye vaktinin olmadığı yayınları kaydet, dilediğin zaman izle.",
  },
  {
    id: 4,
    title: "Kotadan Düşmez",
    imgUrl: "img/4.png",
    description: "Yayınlar devam ederken, internet kotan eksilmez.",
  },
  {
    id: 5,
    title: "Durdur Geri Al İzle",
    imgUrl: "img/5.png",
    description:
      "Yayını istediğin gibi durdurabilir ya da kaçırdığın bölümleri geri alıp izleyebilirsin.",
  },
];

const speciesData = [
  {
    speciesId: 1,
    speciesImgUrl: "img/film.png",
    speciesUrl: "https://tvplus.com.tr/film",
  },
  {
    speciesId: 2,
    speciesImgUrl: "img/dizi.png",
    speciesUrl: "https://tvplus.com.tr/dizi",
  },
  {
    speciesId: 3,
    speciesImgUrl: "img/spor.png",
    speciesUrl: "https://tvplus.com.tr/spor",
  },
  {
    speciesId: 4,
    speciesImgUrl: "img/belgesel.png",
    speciesUrl: "https://tvplus.com.tr/belgesel",
  },
  {
    speciesId: 5,
    speciesImgUrl: "img/cocuk.png",
    speciesUrl: "https://tvplus.com.tr/cocuk",
  },
  {
    speciesId: 6,
    speciesImgUrl: "img/tv.png",
    speciesUrl: "https://tvplus.com.tr/tv",
  },
];

const App = () => {
  return (
    <div className="App">
      <Navi />
      <Banner bannerData={bannerData}/>
      <div className="container-body">
        <SlickSlider sliderData={sliderData}/>
        <Main />
        <WatchIcons watchData={watchData} />
      </div>
      <div>
        <PackagesDiscover />
      </div>
      <div>
        <PromotionPlayer />
      </div>
      <div>
        <SpeciesGroup speciesData={speciesData} />
        <SpeciesSubscribeButton />
      </div>
      <Footer />
    </div>
  );
};

export default App;
