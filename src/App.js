import './App.css';
import HomePage from "./containers/HomePage"
import LoginRegisterPage from './containers/LoginRegisterPage';
import ProfilePages from './containers/ProfilesPage';
import MovieSelected from './containers/MovieSelected'
import { Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App bg-black h-full min-h-screen">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginRegisterPage />} />
        <Route path="/select-account" element={<ProfilePages/>} />
        <Route path="/showDetail=:showId" element={<MovieSelected />} />

      </Routes>
    </div>
  );
}

export default App;
