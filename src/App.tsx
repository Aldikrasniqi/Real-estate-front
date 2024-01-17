import React from 'react';
import { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import Login from './pages/Login';
import Agents from './pages/Agents';
import Register from './pages/Register';
import Home from './pages/Home';
import PropertyDetail from './pages/PropertyDetail';
import Developers from './pages/Developers';
import Profile from './components/Profile';
import BoardUser from './components/BoardUser';
import BoardModerator from './components/BoardModerator';
import BoardAdmin from './components/BoardAdmin';
import NavigationBar from './layouts/NavigationBar';
import { PropertyProvider } from './context/context.store';
import CreateAgent from './pages/CreateAgent';
// import EventBus from "./common/EventBus";
const App: React.FC = () => {
  return (
    <>
      <PropertyProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/*"
            element={
              <>
                <NavigationBar />
                <Routes>
                  <Route path="/login" element={<Login />} />
                  <Route path="/developers" element={<Developers />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/user" element={<BoardUser />} />
                  <Route path="/mod" element={<BoardModerator />} />
                  <Route path="/admin" element={<BoardAdmin />} />
                  <Route path="property/:id" element={<PropertyDetail />} />
                  <Route path="/agents" element={<Agents />} />
                  <Route path='/agents/create' element={<CreateAgent />} />
                </Routes>
              </>
            }
          />
        </Routes>
      </PropertyProvider>
    </>
  );
};

export default App;
