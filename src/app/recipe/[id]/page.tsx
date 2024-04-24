async function getRecipe(mealId: string) {
  const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}` );
  const data = await res.json();
  return data?.meals[0];
}

export default async function RecipePage({ params }: any) {
  const recipe = await getRecipe(params.id);
  return (
    <div>
      <div>
        <h3>{recipe.strMeal}</h3>
        <h5>{recipe.strCategory}</h5>
        <p>{recipe.strInstructions}</p>
      </div>
    </div>
  );
}