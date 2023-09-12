import { Route, Routes } from 'react-router-dom';
import './App.css';
import { useBlogContext } from './context/AppContext';
import About from './pages/About';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import Login from './pages/Login';
import Posts from './pages/Posts';
import Signup from './pages/Signup';
import SinglePost from './pages/SinglePost';
import { urls } from './utils/urls';

const App = () => {
  return (
    <div className="wrapper">
      <Routes>
        <Route path={urls.home} element={<Home />} />
        <Route path={urls.about} element={<About />} />
        <Route path={urls.posts} element={<Posts />} />
        <Route path={urls.login} element={<Login />} />
        <Route path={urls.signup} element={<Signup />} />
        <Route path={urls.post} element={<SinglePost />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
};

export default App;
