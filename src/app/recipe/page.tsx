// import PocketBase from 'pocketbase';
import Link from 'next/link';
// export const dynamic = 'auto',
//   dynamicParams = true,
//   revalidate = 0,
//   fetchCache = 'auto',
//   runtime = 'nodejs',
//   preferredRegion = 'auto'


async function getNotes() {
  // const db = new PocketBase('http://127.0.0.1:8090');
  // const result = await db.records.getList('notes');
  const res = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood', { cache: 'no-store' });
  const data = await res.json()
  return data?.meals as any[];
}

// const fetchedMeals = new Set(); // Set to store fetched meal IDs

// async function fetchRandomMeal() {
//   try {
//     const res = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
//     const data = await res.json();
//     const meal = data?.meals?.[0];
//     return meal;
//   } catch (error) {
//     console.error('Error fetching random meal:', error);
//     throw error;
//   }
// }

// async function getMultipleRandomMeals(count:any) {
//   const meals = [];
  
//   while (meals.length < count) {
//     const meal = await fetchRandomMeal();
    
//     // Check if the fetched meal is not already in the set of fetched meals
//     if (!fetchedMeals.has(meal.idMeal)) {
//       meals.push(meal);
//       fetchedMeals.add(meal.idMeal);
//     }
//   }
  
//   return meals;
// }

// // Example usage
// const numberOfMealsToFetch = 10;
// getMultipleRandomMeals(numberOfMealsToFetch)
//   .then(meals => {
//     console.log('Fetched meals:', meals);
//   })
//   .catch(error => {
//     console.error('Error fetching multiple random meals:', error);
//   });

export default async function NotesPage() {
  const notes = await getNotes();

  return(
    <div className='h-screen'>
      <h1 className='text-lg font-bold'>Recipes</h1>
      <div>
        {notes?.map((recipe) => {
          return <Recipe key={recipe.idMeal} recipe={recipe} />;
        })}
      </div>
    </div>
  );
}




function Recipe({ recipe }: any) {
  const { idMeal, strMeal, strCategory, strArea  } = recipe || {};

  return (
    <Link href={`/recipe/${idMeal}`}>
      <div>
        <h2>{idMeal}</h2>
        <h5>{strMeal}</h5>
        <p>{strCategory}</p>
        <p className='text-red-500'>{strArea}</p>
      </div>
    </Link>
  );
}