import React, { useEffect, useState } from 'react'

const FetchApi = () => {
    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [errors, setErrors] = useState(null);
  
    useEffect(() => {
      const fetchlist = async () => {
        //try,catch block for handling errorss
        try {
          const response = await fetch('https://jsonplaceholder.typicode.com/users');
          if (!response.ok) {  //if there is no any response from api, throw error
            throw new Error('Failed to fetch list');
          }
          setList(await response.json()); //store the converted json data into list
        } catch (err) {
          setErrors(err.message);
        } finally {
          setLoading(false); //stop loading after data is fetched || if an error occurs
        }
      };
      fetchlist();
    }, []);
  
    if (loading) {
      return <div>Loading...</div>;
    }
  
    if (errors) {
      return <div>Error: {errors}</div>;
    }
  
    return (
      <div className='w-fit '>
        <h1 className='text-[1.5rem] px-3 py-2 mb-2 text-xl font-bold backdrop-blur-lg bg-white/30 rounded-xl hover:scale-105 duration-300'>User List</h1>
        <ul className='pl-5 ml-1 space-y-2 mt-2'>
          {list.map((user) => (
            <li key={user.id} className='py-2 text-lg duration-500  bg-white/30 backdrop-blur-md hover:translate-x-10 px-3 rounded-xl '>{user.name}</li>
          ))}
        </ul>
      </div>
    );
}

export default FetchApi
