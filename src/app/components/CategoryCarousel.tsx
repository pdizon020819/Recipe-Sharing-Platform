/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './carousel.css'


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
        showStatus={false}
        infiniteLoop={true}
        dynamicHeight={false}
        className="p-4"
      >
        {categories.map((category:any) => (
          
          <div key={category.strCategory} >
            <p className='text-test4 pb-3'>{category.strCategory}</p>
            <Link
            href={`/categories/${category.strCategory}`}
            className="h-full">
              
                <img className='max-h-44 max-w-72 px-8 pb-10 md:max-h-60 md:max-w-96' src={category.strCategoryThumb} alt="" />

            </Link>
          </div>

        ))}
      </Carousel>
    </div>
  );
}