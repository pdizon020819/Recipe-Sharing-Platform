/* eslint-disable @next/next/no-img-element */
import Link from "next/link";


export default async function Recipe_Card({ recipe }: any) {
    const { idMeal, strMeal, strMealThumb, strCategory, strArea } = recipe || {};
    return (
        <div className="w-full flex overflow-auto border-2 border-black rounded-xl mb-5">
            <Link href={`/recipe/${idMeal}`}>
                <div className="relative">
                    <div>
                        <img
                        src={strMealThumb}
                        alt={strMeal}
                        className="w-full"
                        />
                    </div>
                    <div className="text-start absolute bottom-0 bg-black w-full opacity-80 p-5">
                        <h2 className="font-bold text-lg text-white">{strMeal}</h2>
                        <div className="flex flex-row">
                            <p className="bg-green-500 rounded-full px-2 mr-2">{strCategory}</p>
                            <p className="bg-yellow-500 rounded-full px-2">{strArea}</p>
                        </div>
                    </div>
                    
                </div>
            </Link>
        </div>
        
    )
}