/* eslint-disable @next/next/no-img-element */
import Recipe_Card from '@/app/components/recipe_card';

async function getCategory(category: string) {
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
    const data = await res.json();
    return data?.meals;
}



export default async function CategoryPage({ params }: any) {
  const recipes = await getCategory(params.category);
  return(
    <div className='text-center relative pt-5'>
      <h1 className='text-xl font-bold'>{params.category}</h1>
      <div className='relative grid grid-cols-1 gap-5 p-5 md:grid-cols-2 lg:grid-cols-3'>
        {recipes?.map((recipe:any) => {
          return <Recipe_Card key={recipe.mealId} recipe={recipe} />;
        })}
      </div>
    </div>
  );
}