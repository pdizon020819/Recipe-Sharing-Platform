// import PocketBase from 'pocketbase';
import { getRandomValues } from 'crypto';
import Link from 'next/link';
import Recipe_Card from '../components/recipe_card';
// export const dynamic = 'auto',
//   dynamicParams = true,
//   revalidate = 0,
//   fetchCache = 'auto',
//   runtime = 'nodejs',
//   preferredRegion = 'auto'


const fetchedMeals = new Set(); // Set to store fetched meal IDs


async function getMultipleRandomMeals(count: number) {
  const mealSet = [];
  
  while (mealSet.length < count) {
    try{
    //  const res = await fetch('https://www.themealdb.com/api/json/v1/1/random.php', { cache: 'no-store' });
      const res = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
      const data = await res.json();
      const meal = data?.meals?.[0];
      if (!fetchedMeals.has(meal.idMeal)) {
        mealSet.push(meal);
        fetchedMeals.add(meal.idMeal);
      }
      else{}
    } catch(error){
      console.error('Error fetching random meal:', error);
      throw error;
    }
      
  }
  return mealSet;
}



export default async function RecipesPage() {
  const meals = await getMultipleRandomMeals(10);
  return(
    <div className='h-screen text-center'>
      <h1 className='text-lg font-bold'>Recipes</h1>
      <div className='columns-3 gap-5'>
        {meals?.map((recipe) => {
          return <Recipe_Card key={recipe.idMeal} recipe={recipe} />;
        })}
      </div>
    </div>
  );
}
