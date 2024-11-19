/* eslint-disable @next/next/no-img-element */
import Recipe_Card from '@/app/components/recipe_card';

async function getArea(area: string) {
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`);
    const data = await res.json();
    return data?.meals;
}



export default async function AreaPage({ params }: any) {
  const recipes = await getArea(params.area);
  return(
    <div className='text-center relative pt-5'>
      <h1 className='text-2xl font-extrabold text-test2'>{params.area}</h1>
      <div className='relative grid grid-cols-1 gap-5 p-5 md:grid-cols-2 lg:grid-cols-3'>
        {recipes?.map((recipe:any) => {
          return <Recipe_Card key={recipe.mealId} recipe={recipe} />;
        })}
      </div>
    </div>
  );
}