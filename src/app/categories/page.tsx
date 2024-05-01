/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

async function getCategories() {
    const res = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
    const data = await res.json();
    return data?.categories;
}



export default async function CategoriesPage() {
  const categories = await getCategories();
  return(
    <div className='text-center relative pt-5'>
      <h1 className='text-xl font-bold'>Categories</h1>
      <div className='relative inline-block columns-2 gap-10 p-10 lg:columns-3'>
        {categories?.map((category:any) => {
          return <Category key={category.strCategory} category={category} />;
        })}
      </div>
    </div>
  );
}

function Category({ category }: any) {
    const { strCategory, strCategoryThumb  } = category || {};
  
    return (
      <Link href={`/categories/${strCategory}`}>
        <div>
            <img src={strCategoryThumb} alt="" />
          <p>{strCategory}</p>
        </div>
      </Link>
    );
  }