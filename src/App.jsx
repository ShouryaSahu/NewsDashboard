import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Category from "./pages/Category";

function App() {

    return (
        <BrowserRouter>

            <Navbar />

            <Routes>

                <Route
                    path="/"
                    element={<Home />}
                />

                <Route
                    path="/nation"
                    element={
                        <Category
                            category="nation"
                            title="Nation News"
                        />
                    }
                />

                <Route
                    path="/technology"
                    element={
                        <Category
                            category="technology"
                            title="Technology News"
                        />
                    }
                />

                <Route
                    path="/business"
                    element={
                        <Category
                            category="business"
                            title="Business News"
                        />
                    }
                />

                <Route
                    path="/sports"
                    element={
                        <Category
                            category="sports"
                            title="Sports News"
                        />
                    }
                />

                <Route
                    path="/entertainment"
                    element={
                        <Category
                            category="entertainment"
                            title="Entertainment News"
                        />
                    }
                />

                <Route
                    path="/science"
                    element={
                        <Category
                            category="science"
                            title="Science News"
                        />
                    }
                />

                <Route
                    path="/health"
                    element={
                        <Category
                            category="health"
                            title="Health News"
                        />
                    }
                />

            </Routes>

        </BrowserRouter>
    );
}

export default App;