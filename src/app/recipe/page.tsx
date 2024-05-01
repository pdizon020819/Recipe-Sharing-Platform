import Recipe_Card from '../components/recipe_card';


async function getMultipleRandomMeals(count: number) {
  const mealSet = [];
  const fetchedMeals = new Set(); // Set to store fetched meal IDs
  while (mealSet.length < count) {
      const res = await fetch('https://www.themealdb.com/api/json/v1/1/random.php', { cache: 'no-store' });
      const data = await res.json();
      const meal = data?.meals?.[0];
      if (!fetchedMeals.has(meal.idMeal)) {
        mealSet.push(meal);
        fetchedMeals.add(meal.idMeal);
      }
  }
  return mealSet;
}



export default async function RecipesPage() {
  const meals = await getMultipleRandomMeals(15);
  return(
    <div className='text-center relative pt-5'>
      <h1 className='text-xl font-bold'>Recipes from around the world</h1>
      <div className='relative inline-block columns-1 gap-10 p-10 md:columns-2 lg:columns-3'>
        {meals?.map((recipe) => {
          return <Recipe_Card key={recipe.idMeal} recipe={recipe} />;
        })}
      </div>
    </div>
  );
}
