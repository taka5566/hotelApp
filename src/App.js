
import './App.css';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {Route,Routes} from "react-router-dom";
import IndexPage from './pages/IndexPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Layout from './Layout';
import axios from 'axios';
import { UserContextProvider } from './UserContext';
import ProfilePage from './pages/ProfilePage';
import PlacesPage from './pages/PlacesPage';
import PlaceFormPage from './pages/PlacesFormPage';
import PlacePage from './pages/PlacePage';
import BookingPage from './pages/BookingPage';
import BookingsPage from './pages/BookingsPage';

axios.defaults.baseURL = 'http://localhost:4000';
axios.defaults.withCredentials = true;

function App() {
  
  return (
    <UserContextProvider>
   <Routes>
   <Route path='/' element={<Layout />}>
      <Route index element = {<IndexPage/>} />
      <Route path="/login" element={<LoginPage />}></Route>
      <Route path="/register" element={<RegisterPage />}></Route>
      <Route path="/account" element={<ProfilePage />}></Route>
      <Route path="/account/places" element={<PlacesPage />}></Route>
      <Route path="/account/places/new" element={<PlaceFormPage />}></Route>
      <Route path="/account/places/:id" element={<PlaceFormPage />}></Route>
      <Route path="/place/:id" element={<PlacePage />}></Route>
      <Route path="/account/bookings" element={<BookingsPage />}></Route>
      <Route path="/account/bookings/:id" element={<BookingPage />}></Route>

   </Route>

   </Routes>
   </UserContextProvider>
  )
}

export default App;
