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

async function getRandomCategories(){
  const res = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php', { cache: 'no-store' });
  const data = await res.json()
  var categories = data.categories
  var randomCategory = categories[Math.floor(Math.random()*categories.length)].strCategory;
  return randomCategory
}

async function getMeals(randomCategory: string) {
  // const db = new PocketBase('http://127.0.0.1:8090');
  // const result = await db.records.getList('notes');
  const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${randomCategory}`, { cache: 'no-store' });
  const data = await res.json()
  return data?.meals as any[];
}


export default async function RecipesPage() {
  const randomCategory = await getRandomCategories();
  const meals = await getMeals(randomCategory);

  return(
    <div className='h-screen'>
      <h1 className='text-lg font-bold'>Recipes</h1>
      
      <div>
        {meals?.map((recipe) => {
          return <Recipe_Card key={recipe.idMeal} recipe={recipe} />;
        })}
      </div>
    </div>
  );
}
