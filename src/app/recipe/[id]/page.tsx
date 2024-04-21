async function getNote(noteId: string) {
  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${noteId}`,
    {
      next: { revalidate: 10 },
    }
  );
  const data = await res.json();
  return data.meals;
}

export default async function NotePage({ params }: any) {
  const note = await getNote(params.id);

  return (
    <div>
      <h1>notes/{note[0].idMeal}</h1>
      <div>
        <h3>{note[0].strMeal}</h3>
        <h5>{note[0].strCategory}</h5>
        <p>{note[0].strInstructions}</p>
      </div>
    </div>
  );
}