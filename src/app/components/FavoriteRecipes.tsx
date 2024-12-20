/* eslint-disable @next/next/no-img-element */
import { Carousel } from "react-responsive-carousel";
import { items } from "../../../public/items.json";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Link from "next/link";
    // import styles from "../styles/Responsive.module.css";
    export default function FavoriteRecipes() {
      const { favorites } = items;
      return (
        <div >
          <Carousel
            showArrows={true}
            showIndicators={false}
            infiniteLoop={true}
            dynamicHeight={false}
            className=""
            thumbWidth={0}
            showThumbs={false}
            swipeable={true}
          >
            {favorites.map((item) => (
              <Link key={item.idMeal} href={`/recipe/${item.idMeal}`} >
                <div >
                  <img src={item.strMealThumb} alt="slides" />
                  <p className="legend">{item.strMeal}</p>
                </div>
              </Link>
            ))}
          </Carousel>
        </div>
      );
    }