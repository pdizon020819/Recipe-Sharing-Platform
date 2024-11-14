/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";


async function getCategories() {
    const res = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
    const data = await res.json();
    return data?.categories;
  }

export default async function CategoryCarousel() {
  const categories = await getCategories();
 
  return (
    <div className="p-4">
      <Carousel
        showArrows={true}
        showIndicators={true}
        infiniteLoop={true}
        dynamicHeight={false}
        className="p-4"
      >
        {categories.map((category:any) => (
          <Link 
            key={category.strCategory} 
            href={`/categories/${category.strCategory}`}
            className="">
            <div>
              <p>{category.strCategory}</p>
              <img className='max-h-44' src={category.strCategoryThumb} alt="" />
            </div>
          </Link>
        ))}
      </Carousel>
    </div>
  );
}