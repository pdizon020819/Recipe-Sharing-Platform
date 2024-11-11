import { HiOutlineChevronDoubleDown } from "react-icons/hi2";

export default function Home() {
  return (
    <main>
      {/* main title */}
      <section className="h-screen bg-[url('../../public/food-bg.jpg')] bg-cover">
        <div className="absolute h-full w-full bg-black opacity-40"></div>
        <div className="absolute flex flex-col w-full h-full justify-center items-center p-2 pb-8 z-100">
          <h1 className="text-6xl font-bold text-red-300">Discover Your Next Favorite Recipe</h1>
          <h2 className="text-gray-200 text-xl">Unlock a World of Flavors with Easy-to-Follow Delicious Recipes</h2>
          <p className="text-7xl text-red-400 mt-2"><HiOutlineChevronDoubleDown/></p>
        </div>
      </section>
      {/* categories section */}
      <section>

      </section>
      {/* handpicked recipes */}
      {/* reviews */}
      {/* CTA */}
    </main>
  );
}
