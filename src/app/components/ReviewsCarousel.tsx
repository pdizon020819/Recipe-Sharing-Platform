/* eslint-disable @next/next/no-img-element */
import { Carousel } from "react-responsive-carousel";
import { items } from "../../../public/items.json";
import "react-responsive-carousel/lib/styles/carousel.min.css";
    // import styles from "../styles/Responsive.module.css";
    export default function ReviewsCarousel() {
      const { reviews } = items;
      return (
        <div >
          <Carousel
            showArrows={true}
            showIndicators={true}
            showStatus={false}
            infiniteLoop={true}
            dynamicHeight={false}
            className=""
          >
            {reviews.map((item) => (
              <div key={item.id} >
                <div className="w-24 mx-auto" >
                  <img className="aspect-square rounded-full" src={item.image} alt="slides" />
                </div>
                <div className="text-test4 p-2">
                  <h2>{item.name}</h2>
                  <p className="text-sm opacity-80">{item.occupation}</p>
                  <p className="pb-8 pt-2 px-7 text-start md:text-lg md:px-14">{item.review}</p>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      );
    }