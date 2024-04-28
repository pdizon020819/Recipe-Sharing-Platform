async function getRecipe(mealId: string) {
  const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}` );
  const data = await res.json();
  return data?.meals[0];
}

export default async function RecipePage({ params }: any) {
  const recipe = await getRecipe(params.id);
  const ingredients = [];
  
  // Extract ingredients and measurements
  for (let i = 1; i <= 20; i++) {
    const ingredient = recipe[`strIngredient${i}`];
    const measure = recipe[`strMeasure${i}`];
    // Stop when ingredient is empty
    if (!ingredient || ingredient.trim() === '') break;
    ingredients.push({ ingredient, measure });
  }
  return (
    <div>
      <div>
        <h3 className="text-2xl">{recipe.strMeal}</h3>
        <div className="flex flex-row">
          <h5 className="bg-green-500 rounded-full px-2 mr-2 hover:bg-green-900">{recipe.strCategory}</h5>
          <h5 className="bg-yellow-500 rounded-full px-2 hover:bg-yellow-600">{recipe.strArea}</h5>
        </div>
        <div className='relative inline-block columns-1 gap-5 p-10 md:columns-2 lg:columns-3'>
        <ul>
          {ingredients.map((item, index) => (
            <li key={index}>{item.ingredient}: {item.measure}</li>
          ))}
        </ul>
      </div>
        <p>{recipe.strInstructions}</p>
      </div>
    </div>
  );
}