import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import SignIn from './pages/SignIn';
import SignOut from './pages/SignOut';
import About from './pages/About';
import Header from './components/Header';


export default function App() {
  return (
    <BrowserRouter >
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-out" element={<SignOut />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}
