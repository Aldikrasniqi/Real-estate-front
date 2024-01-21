import React from 'react';
import { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';

import Login from './pages/Login';
import Agents from './pages/Agents';
import Register from './pages/Register';
import Home from './pages/Home';
import PropertyDetail from './pages/PropertyDetail';
import Developers from './pages/Developers';
import EditAgent from './pages/EditAgent';
import Profile from './components/Profile';
import Properties from './pages/Properties';
import BoardUser from './components/BoardUser';
import BoardModerator from './components/BoardModerator';
import BoardAdmin from './components/BoardAdmin';
import NavigationBar from './layouts/NavigationBar';
import { PropertyProvider } from './context/context.store';
import CreateAgent from './pages/CreateAgent';
// import EventBus from "./common/EventBus";
const BoardAdminWrapper = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  console.log(location)
  console.log(queryParams)
  const [agentId, setAgentId] = useState(queryParams.get('agentId'));
  if (agentId) {
    return <BoardAdmin agentId={agentId} />;
  }
  return (
    <h1>
      <Link to="/agents">Please select an agent with</Link>
    </h1>
  );
};
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
                  <Route path="property/:id" element={<PropertyDetail />} />
                  <Route path="/agents" element={<Agents />} />
                  <Route path="/agents/create" element={<CreateAgent />} />
                  <Route path="/agents/edit/:id" element={<EditAgent />} />
                  <Route path="/properties" element={<BoardAdminWrapper />} />
                  <Route path='/test' element={<Properties/>} />
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
