import React from 'react';
import FilterLeft from './components/FilterLeft';
import Products from './components/Products';
import Navbar from './components/Navbar';
import Main from './components/Main';

function App() {
  return (
    <div className="flex flex-col">
      <div className='w-full'>
        <Navbar/>
      </div>
      <div className='flex flex-row'>
      <div className="">
        <FilterLeft />
      </div>
      <div className="w-[70%]">
        <Main />
        <Products/>
      </div>
      </div>
     
    </div>
  );
}

export default App;
