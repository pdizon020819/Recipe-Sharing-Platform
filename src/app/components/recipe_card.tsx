/* eslint-disable @next/next/no-img-element */
import Link from "next/link";


export default async function Recipe_Card({ recipe }: any) {
    const { idMeal, strMeal, strMealThumb } = recipe || {};
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
                        <div className="bg-black w-full h-20 opacity-75 p-4"></div>
                        <div className="absolute left-4 top-2">
                            <p className="font-bold lg:text-lg text-white">{strMeal}</p>
                        </div>
                    </div>
                    
                </div>
            </Link>
        </div>
        
    )
}