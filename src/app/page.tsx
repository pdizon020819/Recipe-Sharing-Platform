"use client";
import React, { useEffect, useState, ReactDOM } from "react";
import { HiOutlineChevronDoubleDown } from "react-icons/hi2";
import CategoryCarousel from "./components/CategoryCarousel";
import ReviewsCarousel from "./components/ReviewsCarousel";
import FavoriteRecipes from "./components/FavoriteRecipes";

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
      {/* CTA */}
      <section className="h-full bg-test4">
        <div className="text-start py-14 px-4">
          <p className="text-lg">
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
          <h1 className="text-test4 font-bold text-center block p-3">
            Categories
          </h1>
        </div>
        <CategoryCarousel></CategoryCarousel>
      </section>
      {/* favorites */}
      <section className="bg-test4">
        <div>
          <div className="text-start py-14 px-4">
            <p className="font-bold text-lg text-test2">
              Explore Our Handpicked Selection of Featured Recipes
            </p>
            <p>
              From timeless classics to seasonal delights, discover culinary
              inspiration for every palate.
            </p>
          </div>
          <FavoriteRecipes />
        </div>
      </section>
      {/* reviews */}
      <section className="bg-test2">
        <p className="text-test4 block font-bold text-center p-3">Cuisine Connoisseur Reviews</p>
        <ReviewsCarousel />
      </section>
    </main>
  );
}
