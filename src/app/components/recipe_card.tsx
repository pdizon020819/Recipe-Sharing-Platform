/* eslint-disable @next/next/no-img-element */
import Link from "next/link";


export default async function Recipe_Card({ recipe }: any) {
    const { idMeal, strMeal, strMealThumb, strCategory, strArea } = recipe || {};
    return (
        <div className="w-full h-fit">
            <Link href={`/recipe/${idMeal}`}>
                <div className="rounded-sm bg-gray-400">
                    <img
                    src={strMealThumb}
                    alt="Picture of the author"
                    className="w-full"
                    />
                    <h2 className="bg-gray-500">{strMeal}</h2>
                    <p>{strCategory}</p>
                    <p>{strArea}</p>
                </div>
            </Link>
        </div>
        
    )
}