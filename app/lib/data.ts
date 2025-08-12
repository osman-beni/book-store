import { TrendingBooks } from "./definitions/trending-books";

export const fetchTrendingDaily = async () => {
    const res = await fetch(`https://openlibrary.org/trending/daily.json?limit=6`);
    const data: TrendingBooks = await res.json();

    return data;
}