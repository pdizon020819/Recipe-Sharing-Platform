/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

async function getRecipe(mealId: string) {
  const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}` );
  const data = await res.json();
  return data?.meals[0];
}


export default async function RecipePage({ params }: any) {
  const recipe = await getRecipe(params.id);
  const ingredients = [];
  const instructionsWithLineBreaks = recipe.strInstructions.replace(/\r\n\r\n|\r/g, '<br /><br />');
  
  // Extract ingredients and measurements
  for (let i = 1; i <= 20; i++) {
    const ingredient = recipe[`strIngredient${i}`];
    const measure = recipe[`strMeasure${i}`];
    // Stop when ingredient is empty
    if (!ingredient || ingredient.trim() === '') break;
    ingredients.push({ ingredient, measure });
  }
  return (
    <>
      <div className="p-5">
        <div className="flex flex-col lg:flex-row-reverse">
          <img
            src={recipe.strMealThumb}
            alt={recipe.strMeal}
            className="size-full px-10 basis-1/4 mx-auto md:size-1/2"
          />
          <div className="basis-2/3 p-5">
            <div>
              <h3 className="text-3xl font-black">{recipe.strMeal}</h3>
              <div className="flex flex-row">
                <Link href={`/categories/${recipe.strCategory}`} className="bg-green-900 rounded-full px-2 mr-2 text-white hover:bg-green-500">{recipe.strCategory}</Link>
                <h5 className="bg-yellow-700 rounded-full px-2 text-white hover:bg-yellow-500">{recipe.strArea}</h5>
              </div>
            </div>
            <div className='mx-auto px-20 columns-1 gap-5 p-10 md:columns-2'>
              <ul>
                {ingredients.map((item, index) => (
                  <li className="mb-2" key={index}>{item.measure} {item.ingredient}</li>
                ))}
              </ul>
            </div>
            <p 
            dangerouslySetInnerHTML={{ __html: instructionsWithLineBreaks }}
            className="mx-auto"
            ></p>
          </div>
        </div>
        
      </div>
    </>
  );
}