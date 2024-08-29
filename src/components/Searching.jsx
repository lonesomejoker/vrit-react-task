import React, { useState } from 'react';

const Searching = () => {
  const [searchCars, setSearchCars] = useState('');
  
  // list of cars
  const cars = [
    'Subaru',
    'Ford',
    'Ferrari',
    'Mitsubishi',
    'Lamborghini',
    'Mclaren',
    'Pagani',
    'Koenigsegg',
    'Buggatti',
    'Chevrolet',
    'Nissan',
  ];

  // handle the user input search
  const handleSearch = (e) => {
    setSearchCars(e.target.value.toLowerCase());  //converting into lowercase for case insensitive
  };

  // filter cars based on the search inputs
  const filteredcars = cars.filter(item =>
    item.toLowerCase().includes(searchCars)
  );

  return (
    <div className='px-12 py-6 text-gray-800 bg-center bg-no-repeat bg-cover rounded-tl-[2rem] rounded-br-[2rem] bg-white/30 backdrop-blur-lg w-fit ' style={{backgroundImage:"url('https://images.hdqwalls.com/download/aurora-at-crater-lake-oregon-4k-uo-3840x2160.jpg')"}}>
      <p>TASK 1:</p>
      <h1 className='mb-5 text-[2rem]'>Simple Search Filter</h1>
      <input  type="text" placeholder="Search Here..." value={searchCars} onChange={handleSearch} className="p-3 text-neutral-900 text-[1.3rem] mx-auto w-full rounded-tr-lg rounded-bl-lg bg-white/30 backdrop-blur " style={{ outline: "none", border: "none" }}/>
      <p className='my-3 text-[1.3rem]'>List of cars will be shown below...</p>
      <div className=' text-lg font-[500] space-y-2 duration-500 text-[1.4rem]'>
        {searchCars && filteredcars.length > 0 ? (
          filteredcars.map((item, index) => (
            <h1 key={index} className='px-2.5 py-2 duration-500 bg-gray-200 rounded-tl-lg rounded-br-lg text-neutral-800 bg-opacity-30 hover:translate-x-5 backdrop-blur-md'>{item}</h1>
          ))
        ) : ( searchCars &&
          <h1 className='px-2 py-1 text-red-700 bg-gray-300 rounded-tl-lg rounded-br-lg bg-opacity-20 backdrop-blur'>No cars found</h1>
        )}
      </div>
    </div>
  );
};

export default Searching;
