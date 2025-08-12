// "use client";

// import { useEffect, useState } from "react";
// import { OpenLibraryBookResponse, Book } from "./openLibraryTypes";

// export default function NewReleases() {
//   const [books, setBooks] = useState<Book[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     async function fetchNewReleases() {
//       const res = await fetch(
//         `https://openlibrary.org/api/books?subject=Fantasy&format=json`
//       );
//       const data: OpenLibraryBookResponse = await res.json();
//       console.log("data", data);
//       setBooks(data.docs.slice(0, 3));
//       setLoading(false);
//     }

//     fetchNewReleases();
//   }, []);

//   if (loading) return <p>Loading new releases...</p>;

//   return (
//     <>
//       {books.map((book) => {
//         return (
//           <div key={book.cover_i}>
//             <img
//               src={
//                 book.cover_i
//                   ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
//                   : "/placeholder.jpg"
//               }
//               alt={book.title}
//             />
//             <h3>{book.title}</h3>
//           </div>
//         );
//       })}
//       ;
//     </>
//   );
// }
