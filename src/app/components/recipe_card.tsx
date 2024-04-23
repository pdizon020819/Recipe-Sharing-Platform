import Link from "next/link";

export default function Recipe_Card({ recipe }: any) {
    const { idMeal, strMeal, strCategory, strArea  } = recipe || {};
    return (
        <Link href={`/recipe/${idMeal}`}>
            <div>
                <h2>{idMeal}</h2>
                <h5>{strMeal}</h5>
                <p>{strCategory}</p>
                <p>{strArea}</p>
            </div>
        </Link>
    )
}