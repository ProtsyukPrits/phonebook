// import { ContactContainer } from './App.styled';
import Contacts from '../pages/Contacts';

import { Routes, Route } from 'react-router-dom';
import Phonebook from '../pages/Phonebook';




import Register from 'pages/Register';
import Login from 'pages/Login';
import Home from 'pages/Home';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import { Layout } from './Layout';

export const App = () => {
  return (
  
      <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path="/phonebook" element={<Phonebook />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        <Route path="*" element={} /> */}

        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />

          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo={('/contacts', '/phonebook')}
                component={<Register />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                redirectTo={('/contacts', '/phonebook')}
                component={<Login />}
              />
            }
          />

          <Route
            path="/phonebook"
            element={
              <PrivateRoute redirectTo="/login" component={<Phonebook />} />
            }
          />

          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<Contacts />} />
            }
          />
        </Route>
      </Routes>
   
  );
};
