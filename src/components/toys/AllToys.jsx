import React, { useEffect, useState } from 'react';
import useTitle from '../../hooks/useTitle';

const AllToys = () => {
  useTitle('AllToy');

  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch('https://toy-server-rho.vercel.app/toys')
      .then((res) => res.json())
      .then((data) => setToys(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold">All Toys</h1>
      <div className="grid grid-cols-3 gap-4 mt-4">
        {toys.map((toy) => (
          <div key={toy.id} className="p-4 bg-white rounded shadow">
            <h2 className="text-lg font-bold">{toy.name}</h2>
            <p className="text-gray-600">{toy.description}</p>
            <p className="mt-2 font-bold">${toy.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllToys;
