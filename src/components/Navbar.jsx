import { Link } from "react-router-dom";

function Navbar() {

    return (
        <nav className="bg-gray-900 text-white px-8 py-4">

            <div className="max-w-7xl mx-auto flex items-center justify-between">

                <Link
                    to="/"
                    className="text-2xl font-bold"
                >
                    News Dashboard
                </Link>

                <div className="flex gap-6">

                    <Link to="/" className="hover:text-blue-400"> Home </Link>

                    <Link to="/nation" className="hover:text-blue-400"> Nation </Link>

                    <Link to="/technology" className="hover:text-blue-400"> Technology </Link>

                    <Link to="/business" className="hover:text-blue-400"> Business </Link>

                    <Link to="/sports" className="hover:text-blue-400"> Sports </Link>

                    <Link to="/entertainment" className="hover:text-blue-400"> Entertainment </Link>

                    <Link to="/science" className="hover:text-blue-400"> Science </Link>

                    <Link to="/health" className="hover:text-blue-400"> Health </Link>
                       

                </div>

            </div>

        </nav>
    );
}

export default Navbar;