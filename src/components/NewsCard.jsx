function NewsCard({ article }) {

    return (
        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">

            <img
                src={article.image}
                alt={article.title}
                className="w-full h-48 object-cover"
            />

            <div className="p-5">

                <h2 className="text-xl font-bold mb-3 line-clamp-2">
                    {article.title}
                </h2>

                <p className="text-gray-600 mb-4 line-clamp-3">
                    {article.description}
                </p>

                <a
                    href={article.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                >
                    Read More
                </a>

            </div>

        </div>
    );
}

export default NewsCard;