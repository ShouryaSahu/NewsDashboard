const API_KEY = import.meta.env.VITE_GNEWS_API_KEY;

console.log("API KEY:", API_KEY);

export async function getTopHeadlines(category) {
    const url =
        `https://gnews.io/api/v4/top-headlines` +
        `?category=${category}` +
        `&lang=en` +
        `&country=in` +
        `&max=9` +
        `&apikey=${API_KEY}`;

    const response = await fetch(url);

    const data = await response.json();

    console.log("API RESPONSE:", data);

    if (!response.ok) {
        throw new Error(
            data.errors?.join(", ") || "Failed to fetch news"
        );
    }

    return data.articles;
}