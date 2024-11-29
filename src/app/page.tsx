/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState, ReactDOM } from "react";
import { HiOutlineChevronDoubleDown } from "react-icons/hi2";
import CategoryCarousel from "./components/CategoryCarousel";
import ReviewsCarousel from "./components/ReviewsCarousel";
import FavoriteRecipes from "./components/FavoriteRecipes";
// import CookingSVG  from "../../public/cooking-stew-svgrepo-com.svg";

async function getCategories() {
  const res = await fetch(
    "https://www.themealdb.com/api/json/v1/1/categories.php"
  );
  const data = await res.json();
  return data?.categories;
}

// eslint-disable-next-line @next/next/no-async-client-component
export default function Home() {
  return (
    <main>
      {/* main title */}
      <section className="relative h-screen bg-[url('../../public/food-bg.jpg')] bg-cover ">
        <div className="absolute h-full w-full bg-black opacity-40"></div>
        <div className="absolute flex flex-col w-full h-full justify-center items-center p-2 pb-8">
          <div className="text-start max-w-[500px] px-5">
            <h1 className="text-6xl font-bold text-red-50">
              Discover Your Next Favorite Recipe
            </h1>
            <h2 className="text-gray-50 text-xl">
              Unlock a World of Flavors with Easy-to-Follow Delicious Recipes
            </h2>
          </div>
          <p className="text-7xl text-red-300 mt-2">
            <HiOutlineChevronDoubleDown />
          </p>
        </div>
      </section>
      {/* Intro */}
      <section className="h-full bg-test4">
        <div className="text-start py-14 px-4 md:px-14 lg:px-44 lg:py-24">
          <p className="text-lg lg:text-xl">
            Welcome to{" "}
            <span className="text-test2 font-bold">The Recipe Room</span>! Your
            go-to destination for delicious and easy-to-follow recipes. Whether
            you’re a seasoned chef or just starting in the kitchen, our curated
            collection of dishes promises to inspire and delight. Discover new
            flavors, perfect your cooking skills, and bring joy to your meals
            with our expert tips and culinary creations.
          </p>
        </div>
      </section>
      {/* categories section */}
      <section className="bg-test2">
        <div>
          <h1 className="text-test4 font-bold text-center block p-3 md:text-2xl">
            Categories
          </h1>
        </div>
        <div className="md:px-24 lg:px-44">
          <CategoryCarousel></CategoryCarousel>
        </div>
      </section>
      {/* favorites */}
      <section className="bg-test4">
        <div className="md:grid md:grid-cols-12">
          <div className="text-start py-14 px-4 md:px-14 md:my-auto md:col-span-6 lg:col-span-7 lg:px-24 lg:text-lg">
            <p className="font-bold text-lg text-test2">
              Explore Our Handpicked Selection of Featured Recipes
            </p>
            <p>
              From timeless classics to seasonal delights, discover culinary
              inspiration for every palate.
            </p>
          </div>
          <div className="md:col-span-6 lg:col-span-5">
            <FavoriteRecipes />
          </div>
        </div>
      </section>
      {/* reviews */}
      <section className="bg-test2 md:p-14 lg:p-24">
        <p className="text-test4 block font-bold text-center p-3 md:text-2xl">
          Cuisine Connoisseur Reviews
        </p>
        <ReviewsCarousel />
      </section>
    </main>
    
  );
}
