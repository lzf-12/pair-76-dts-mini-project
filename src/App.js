import logo from './logo.svg';
import './App.css';
import HomePage from "./containers/HomePage"
import LoginRegisterPage from './containers/LoginRegisterPage';
import ProfilePages from './containers/ProfilesPage';

function App() {
  return (
    <div className="App bg-black h-screen">
      {/* <HomePage></HomePage> */}
      <LoginRegisterPage></LoginRegisterPage>
      {/* <ProfilePages></ProfilePages> */}
    </div>
  );
}

export default App;
