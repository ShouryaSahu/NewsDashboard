import { useEffect, useState } from "react";
import NewsCard from "../components/NewsCard";
import { getTopHeadlines } from "../services/newsApi";

function Category({ category, title }) {

    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {

        setLoading(true);
        setError("");
        setArticles([]);

        getTopHeadlines(category)
            .then((data) => {
                setArticles(data);
            })
            .catch((error) => {
                console.error("NEWS ERROR:", error);
                setError(error.message);
            })
            .finally(() => {
                setLoading(false);
            });

    }, [category]);

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-100 flex justify-center items-center">
                <p className="text-xl font-semibold">
                    Loading {title}...
                </p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen bg-gray-100 flex justify-center items-center">
                <p className="text-red-500 text-xl">
                    {error}
                </p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-100">

            <div className="max-w-7xl mx-auto px-6 py-10">

                <h1 className="text-4xl font-bold mb-8">
                    {title} 🇮🇳
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                    {articles.map((article, index) => (
                        <NewsCard
                            key={index}
                            article={article}
                        />
                    ))}

                </div>

            </div>

        </div>
    );
}

export default Category;