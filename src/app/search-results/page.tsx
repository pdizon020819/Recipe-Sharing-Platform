import Recipe_Card from '@/app/components/recipe_card';

async function getSearch(search: string) {
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
    const data = await res.json();
    return data?.meals;
}



export default async function SearchResultsPage({ params }: any) {
  const recipes = await getSearch(params.search);
  return(
    <div className='text-center relative pt-5'>
      <h1 className='text-xl font-bold'>{params.category}</h1>
      <div className='relative inline-block columns-2 gap-10 p-10 lg:columns-3'>
        {recipes?.map((recipe:any) => {
          return <Recipe_Card key={recipe.mealId} recipe={recipe} />;
        })}
      </div>
    </div>
  );
}