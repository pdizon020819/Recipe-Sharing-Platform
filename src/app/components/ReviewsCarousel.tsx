/* eslint-disable @next/next/no-img-element */
import { Carousel } from "react-responsive-carousel";
import { items } from "../../../public/reviews.json";
import "react-responsive-carousel/lib/styles/carousel.min.css";
    // import styles from "../styles/Responsive.module.css";
    export default function ResponsiveCarousel() {
      const { reviews } = items;
      return (
        <div >
          <Carousel
            showArrows={true}
            showIndicators={true}
            infiniteLoop={true}
            dynamicHeight={false}
            className=""
          >
            {reviews.map((item) => (
              <div key={item.id} >
                <div >
                  <img src={item.image} alt="slides" />
                </div>
                <div className="">
                  <h2>{item.name}</h2>
                  <p>{item.occupation}</p>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      );
    }