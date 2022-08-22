import './App.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Chat from './components/Chat';
import ChatPage from './pages/ChatPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <>
    <BrowserRouter>
        <Route path="/register" component={Register}/>
        <Route path="/login" component={Login}/>
        <Route path="/" component={Chat} exact />
        <Route path="/chat" component={ChatPage} />
        <Route path="/home" component={HomePage} />
    </BrowserRouter>
    </>
  );
}

export default App;
