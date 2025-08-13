import { CategoryBooks } from "./definitions";
import { TrendingBooks } from "./definitions/trending-books";

export const fetchTrendingDaily = async () => {
    const res = await fetch(`https://openlibrary.org/trending/daily.json?limit=6`);
    const data: TrendingBooks = await res.json();

    return data;
}



export const fetchBooks = async () => {
    const res = await fetch(`https://openlibrary.org/trending/now.json?&sort=new&page=1&limit=12`);
    const data: TrendingBooks = await res.json();

    return data;
}

export const fetchBookNextPage = async (page: number) => {

    const res = await fetch(`https://openlibrary.org/trending/now.json?&sort=new&page=${page}&limit=12`);
    const data: TrendingBooks = await res.json();

    return data;
}


export const fetchMathsBooks = async () => {
    const res = await fetch(`https://openlibrary.org/subjects/mathematics.json?limit=12&page=1`);

    const data: CategoryBooks = await res.json();

    return data;
}
export const fetchNextMathsBooks = async (page: number) => {
    const res = await fetch(`https://openlibrary.org/subjects/mathematics.json?limit=12&offset=${page}2`);

    const data: CategoryBooks = await res.json();

    return data;
}

export const fetchProgrammingBooks = async () => {
    const res = await fetch('https://openlibrary.org/subjects/programming.json?sort=new&page=1&limit=12');

    const data: CategoryBooks = await res.json();
    return data;
}
export const fetchNextProgrammingBooks = async (page: number) => {
    const res = await fetch(`https://openlibrary.org/subjects/programming.json?sort=new&offset=${page}2&limit=12`);

    const data: CategoryBooks = await res.json();
    return data;
}



export const fetchSelfHelpBooks = async () => {
    const res = await fetch('https://openlibrary.org/subjects/self-help.json?page=1&limit=12')
    const data: CategoryBooks = await res.json();
    return data;

}
export const fetchNextSelfHelpBooks = async (page: number) => {
    const res = await fetch(`https://openlibrary.org/subjects/self-help.json?offset=${page}2&limit=12`)
    const data: CategoryBooks = await res.json();
    return data;

}