import React, { Fragment} from 'react';
import { Container} from 'semantic-ui-react';
import NavBar from './NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';

import { observer } from 'mobx-react-lite';
import { Route, Routes, useLocation } from 'react-router-dom';
import HomePage from '../../features/home/HomePage';
import ActivityForm from '../../features/activities/form/ActivityForm';
import ActivityDetails from '../../features/activities/details/ActivityDetails';
import TestErrors from '../../features/errors/TestError';
import { ToastContainer } from 'react-toastify';
import NotFound from '../../features/errors/NotFound';
import ServerError from '../../features/errors/ServerError';

function App() {
  const location = useLocation();

  return (
    <>
      <ToastContainer position='bottom-right' hideProgressBar />
      <Container style={{marginTop: '7em'}}>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/activities' element={
            <>
              <NavBar />
              <ActivityDashboard />
            </>
          } />
          <Route path='/activities/:id' element={
            <>
              <NavBar />
              <ActivityDetails />
            </>
          } />
          <Route key={location.key} path='/createActivity' element={
            <>
              <NavBar />
              <ActivityForm />
            </>
          } />
          <Route key={location.key} path='/manage/:id' element={
            <>
              <NavBar />
              <ActivityForm />
            </>
          } />
          <Route path='/errors' element={
            <>
              <NavBar />
              <TestErrors />
            </>
          } />
           <Route path='/server-error' element={
            <>
              <NavBar />
              <ServerError />
            </>
          } />
          <Route path='*' element={
            <>
              <NavBar />
              <NotFound />
            </>
          } />
        </Routes>
      </Container> 
    </>
  );
}

export default observer(App);
