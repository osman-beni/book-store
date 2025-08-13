import { CategoryBooks } from "./definitions";
import { TrendingBooks } from "./definitions/trending-books";

export const fetchTrendingDaily = async () => {
    const res = await fetch(`https://openlibrary.org/trending/daily.json?limit=6`);
    const data: TrendingBooks = await res.json();

    return data;
}





export const fetchBooks = async (page: number) => {

    const res = await fetch(`https://openlibrary.org/trending/now.json?&sort=new&page=${page}&limit=12`);
    const data: TrendingBooks = await res.json();

    return data;
}


export const fetchMathsBooks = async (page: number) => {
    const res = await fetch(`https://openlibrary.org/subjects/mathematics.json?limit=12&offset=${page}6`);

    const data: CategoryBooks = await res.json();

    return data;
}


export const fetchProgrammingBooks = async (page: number) => {
    const res = await fetch(`https://openlibrary.org/subjects/programming.json?sort=new&offset=${page}3&limit=12`);

    const data: CategoryBooks = await res.json();
    return data;
}




export const fetchSelfHelpBooks = async (page: number) => {
    const res = await fetch(`https://openlibrary.org/subjects/self-help.json?offset=${page}3&limit=12`)
    const data: CategoryBooks = await res.json();
    return data;

}