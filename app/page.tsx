interface Book {
  title: string;
  cover_id: number;
}

interface OpenLibraryBookResponse {
  works: Book[];
}

export default async function Home() {
  const res = await fetch(
    "https://openlibrary.org/subjects/computer_science.json?limit=10"
  );
  const data: OpenLibraryBookResponse = await res.json();

  const randomIndex = Math.floor(Math.random() * data.works.length);
  const book = data.works[randomIndex];
  console.log(book);

  const bookImage = book.cover_id
    ? `https://covers.openlibrary.org/b/id/${book.cover_id}-L.jpg`
    : "https://via.placeholder.com/150";

  return (
    <>
      <nav>Nav</nav>
      <main></main>
    </>
  );
}
