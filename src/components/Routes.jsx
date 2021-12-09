import React from 'react';
import { Route, Navigate, Routes, Redirect } from 'react-router-dom';
import { Results } from './Results';

export const Routesi = () => {
  return (
    <div className='p-4'>
      <Routes>
        <Route
          exact
          path='/'
          element={<Navigate replace to='/search' />}
        ></Route>
        <Route path='/search' element={<Results />}></Route>
        <Route path='/images' element={<Results />}></Route>
        <Route path='/news' element={<Results />}></Route>
        <Route path='/videos' element={<Results />}></Route>
      </Routes>
    </div>
  );
};
