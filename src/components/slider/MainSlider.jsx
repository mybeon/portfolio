import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import phoneSvg from "../../images/bi_phone.svg";
import pcSvg from "../../images/pc-icon.svg";
import moneySvg from "../../images/money-svg.svg";
import analSvg from "../../images/carbon_analytics.svg";
import auditSvg from "../../images/audit-svg.svg";
import arrow from "../../images/arrow1.svg";
import SlideFrag from "./Slide-frag";

const MainSlider = () => {
  return (
    <Splide
      className="main-slider"
      options={{
        perPage: 4,
        gap: "4rem",
        rewind: true,
        pagination: false,
        autoplay: true,
        interval: 1500,
        rewindSpeed: 2000,
        speed: 2000,
        perMove: 1,

        breakpoints: {
          1200: {
            perPage: 3,
          },
          800: {
            perPage: 1,
            arrows: false,
            pagination: true,
          },
        },
      }}
      renderControls={() => (
        <div className="splide__arrows">
          <div className="splide__arrow--prev prev-arrow global-arrow">
            <img src={arrow} alt="" />
          </div>
          <div className="splide__arrow--next next-arrow global-arrow">
            <img src={arrow} alt="" />
          </div>
        </div>
      )}
    >
      <SplideSlide>
        <SlideFrag
          img={pcSvg}
          text="modern designs optimized for performance &amp; search ingines"
          title="design &amp; development"
        />
      </SplideSlide>
      <SplideSlide>
        <SlideFrag
          img={moneySvg}
          text="Seamless Integration of eCommerce platforms &amp; payment gateways."
          title="E-commerce"
        />
      </SplideSlide>
      <SplideSlide>
        <SlideFrag
          img={analSvg}
          text="Get insights into who is browsing your site and make smarter decisions."
          title="analytics"
        />
      </SplideSlide>
      <SplideSlide>
        <SlideFrag
          img={phoneSvg}
          title="mobile responsive"
          text="Make your website accessible to all users, regardless of their device."
        />
      </SplideSlide>
      <SplideSlide>
        <SlideFrag
          img={auditSvg}
          text="Improve your page performance, SEO &amp; user experience?"
          title="audit"
        />
      </SplideSlide>
    </Splide>
  );
};

export default MainSlider;
