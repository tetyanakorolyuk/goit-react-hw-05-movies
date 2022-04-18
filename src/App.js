import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import AppBar from './components/AppBar';
import Container from './components/Container';
// import HomePage from './pages/HomePage';
// import MoviesPage from './pages/MoviesPage';
// import MoviesDetailsPage from './pages/MoviesDetailsPage';
// import Cast from './pages/Cast';
// import Reviews from './pages/Reviews';
// import NotFoundPage from './pages/NotFoundPage';
// import './App.css';

const HomePage = lazy(() => import('./pages/HomePage'));
const MoviesPage = lazy(() => import('./pages/MoviesPage'));
const MoviesDetailsPage = lazy(() => import('./pages/MoviesDetailsPage'));
const Cast = lazy(() => import('./pages/Cast'));
const Reviews = lazy(() => import('./pages/Reviews'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

function App() {
    return (
      <>
      <Container>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Routes>
          <Route path="/" element={<AppBar />}>
            <Route index element={<HomePage />}/>
            <Route path="movies" element={<MoviesPage />}/>
            <Route path="movies/:movieId/" element={<MoviesDetailsPage />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Route>
          </Routes>
        </Suspense>
        </Container>
      </>
    );
  }

export default App;

