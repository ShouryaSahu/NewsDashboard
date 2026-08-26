# 📰 NewsDashboard

A modern and responsive **Indian News Dashboard** built with **React, Vite, Tailwind CSS, and the GNews API**.

NewsDashboard provides users with a simple way to browse the latest Indian news across multiple categories such as Nation, Technology, Business, Sports, Entertainment, Science, and Health.

## ✨ Features

* 📰 Latest Indian news
* 🇮🇳 India-specific news coverage
* 🏛️ Nation news
* 💻 Technology news
* 💼 Business news
* ⚽ Sports news
* 🎬 Entertainment news
* 🔬 Science news
* 🏥 Health news
* 🔗 Direct links to original news articles
* 📱 Responsive design for desktop, tablet, and mobile
* ⏳ Loading states while fetching news
* ⚠️ Error handling for failed API requests
* 🧭 Client-side navigation using React Router
* 🎨 Modern UI built with Tailwind CSS

## 🛠️ Tech Stack

* **React 19** – Frontend library
* **Vite** – Development and build tool
* **React Router DOM** – Client-side routing
* **Tailwind CSS** – Styling and responsive layouts
* **GNews API** – News data provider
* **JavaScript / JSX** – Application development
* **ESLint** – Code quality and linting

## 📂 Project Structure

```text
NewsDashboard/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── NewsCard.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   └── Category.jsx
│   ├── services/
│   │   └── newsApi.js
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

## 🔄 How It Works

The application follows a simple data flow:

```text
User opens NewsDashboard
        ↓
React Router loads the selected page
        ↓
Page requests news from GNews API
        ↓
GNews returns article data
        ↓
React stores the articles in component state
        ↓
NewsCard components display the articles
        ↓
User can open the original article
```

The API service uses the GNews `top-headlines` endpoint and requests English-language news from India. The application currently requests up to 9 articles for each category.

## 🗂️ Available Routes

| Route            | Description                |
| ---------------- | -------------------------- |
| `/`              | Latest/general Indian news |
| `/nation`        | Nation news                |
| `/technology`    | Technology news            |
| `/business`      | Business news              |
| `/sports`        | Sports news                |
| `/entertainment` | Entertainment news         |
| `/science`       | Science news               |
| `/health`        | Health news                |

## 🔑 API Configuration

This project uses the **GNews API** to retrieve news articles.

Create an environment file named:

```text
.env
```

Add your GNews API key:

```env
VITE_GNEWS_API_KEY=your_gnews_api_key
```

The application reads this value through:

```javascript
import.meta.env.VITE_GNEWS_API_KEY
```

> **Important:** Do not commit your `.env` file or expose your API key in source control.

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/ShouryaSahu/NewsDashboard.git
```

### 2. Enter the project directory

```bash
cd NewsDashboard
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure the API key

Create a `.env` file in the project root:

```env
VITE_GNEWS_API_KEY=your_gnews_api_key
```

### 5. Start the development server

```bash
npm run dev
```

Vite will provide a local development URL, typically:

```text
http://localhost:5173
```

### 6. Build for production

```bash
npm run build
```

### 7. Preview the production build

```bash
npm run preview
```

## 📜 Available Scripts

| Command           | Description                        |
| ----------------- | ---------------------------------- |
| `npm run dev`     | Starts the Vite development server |
| `npm run build`   | Creates a production build         |
| `npm run lint`    | Runs ESLint                        |
| `npm run preview` | Previews the production build      |

## 🧩 Application Architecture

### `App.jsx`

Defines the application's routes and connects each route with the appropriate page component.

### `Home.jsx`

Loads general Indian headlines and displays them using reusable `NewsCard` components.

### `Category.jsx`

Provides a reusable category page. The same component is used for Nation, Technology, Business, Sports, Entertainment, Science, and Health news.

### `newsApi.js`

Contains the API integration with GNews. It retrieves top headlines based on the requested category.

### `NewsCard.jsx`

Responsible for displaying an individual article, including:

* Article image
* Headline
* Description
* Link to the original article

### `Navbar.jsx`

Provides navigation between the application's different news categories.

## 🎨 UI Design

The dashboard uses Tailwind CSS for styling. News articles are displayed in a responsive three-column layout on large screens and adapt to smaller screen sizes on tablets and mobile devices.

Each news article is presented as a card containing an image, title, description, and **Read More** button.

## 🔮 Future Improvements

Possible enhancements include:

* 🔍 News search functionality
* 📅 Filter news by date
* 🌎 Support for additional countries
* 🌐 Multi-language news
* ⭐ Bookmark/favorite articles
* 🌙 Dark mode
* 📄 Pagination or infinite scrolling
* 📰 More news sources
* 🔔 Breaking-news notifications
* 📊 News analytics and trending topics
* 💾 Local storage for saved articles
* 🔐 User authentication
* 🧪 Automated testing
* 🚀 Production deployment

## ⚠️ Notes

The application depends on the GNews API for its news content. Availability and the number of returned articles therefore depend on the API configuration and account limits.

The repository's current implementation is a relatively lightweight React/Vite frontend rather than a full backend application.

## 🤝 Contributing

Contributions are welcome.

1. Fork the repository.
2. Create a new branch.

```bash
git checkout -b feature/your-feature
```

3. Make your changes.
4. Commit your changes.

```bash
git commit -m "Add your feature"
```

5. Push the branch.

```bash
git push origin feature/your-feature
```

6. Open a Pull Request.

## 📄 License

No explicit license is currently documented in the repository. Check the repository before redistributing or using the project commercially.

## 👨‍💻 Repository

**GitHub:** https://github.com/ShouryaSahu/NewsDashboard

---

Built with ❤️ using React, Vite, Tailwind CSS, and GNews API.
