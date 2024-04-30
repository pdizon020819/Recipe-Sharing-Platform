/* eslint-disable @next/next/no-img-element */
import Link from "next/link";


export default async function Recipe_Card({ recipe }: any) {
    const { idMeal, strMeal, strMealThumb, strCategory, strArea } = recipe || {};
    return (
        <div className="w-full flex overflow-auto border-2 border-black rounded-xl mb-10">
            <Link href={`/recipe/${idMeal}`}>
                <div className="relative">
                    <div>
                        <img
                        src={strMealThumb}
                        alt={strMeal}
                        className="w-full"
                        />
                    </div>
                    <div className="text-start absolute bottom-0 w-full">
                        <div className="bg-black w-full min-h-20 opacity-75"></div>
                        <div className="absolute left-4 top-2">
                            <h2 className="font-bold text-xl text-white">{strMeal}</h2>
                            <div className="flex flex-row">
                                <p className="bg-green-900 rounded-full px-2 mr-2 text-white hover:bg-green-500">{strCategory}</p>
                                <p className="bg-yellow-700 rounded-full px-2 text-white hover:bg-yellow-500">{strArea}</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </Link>
        </div>
        
    )
}