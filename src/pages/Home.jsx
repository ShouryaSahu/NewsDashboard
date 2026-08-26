import { useEffect, useRef, useState } from "react";
import NewsCard from "../components/NewsCard";
import { getTopHeadlines } from "../services/newsApi";

function Home() {

    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const hasFetched = useRef(false);

    useEffect(() => {

        if (hasFetched.current) {
            return;
        }

        hasFetched.current = true;

        getTopHeadlines("general")
            .then((data) => {
                setArticles(data);
            })
            .catch((error) => {
                console.error(error);
                setError(error.message);
            })
            .finally(() => {
                setLoading(false);
            });

    }, []);

    if (loading) {
        return (
            <div className="text-center mt-20 text-xl">
                Loading news...
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-center mt-20 text-red-500">
                {error}
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-100">

            <div className="max-w-7xl mx-auto px-6 py-10">

                <h1 className="text-4xl font-bold mb-8">
                    Latest Indian News 🇮🇳
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

export default Home;