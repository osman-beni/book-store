import { CategoryBooks } from "./definitions";
import { TrendingBooks } from "./definitions/trending-books";
import { Work } from "./definitions/work";
import { Work2 } from "./definitions/work2";

export const fetchTrendingDaily = async () => {
    const res = await fetch(`https://openlibrary.org/trending/daily.json?limit=6`);
    const data: TrendingBooks = await res.json();

    return data;
}



export const fetchBooks = async (page: number) => {
    const res = await fetch(`https://openlibrary.org/trending/now.json?&sort=rating&page=${page}&limit=12`);
    const data: TrendingBooks = await res.json();
    return data;
}


export const fetchBook = async (bookId: string) => {
    const res = await fetch(`https://openlibrary.org/works/${bookId}.json`)
    const data: Work | Work2 = await res.json();
    return data;
}


export const fetchMathsBooks = async (page: number) => {
    const res = await fetch(`https://openlibrary.org/subjects/mathematics.json?limit=12&offset=${page}6&sort=rating`);

    const data: CategoryBooks = await res.json();
    return data;
}


export const fetchProgrammingBooks = async (page: number) => {
    const res = await fetch(`https://openlibrary.org/subjects/programming.json?sort=rating&offset=${page}3&limit=12`);
    const data: CategoryBooks = await res.json();
    return data;
}




export const fetchSelfHelpBooks = async (page: number) => {
    const res = await fetch(`https://openlibrary.org/subjects/self-help.json?offset=${page}3&limit=12&sort=rating`)
    const data: CategoryBooks = await res.json();
    return data;

}