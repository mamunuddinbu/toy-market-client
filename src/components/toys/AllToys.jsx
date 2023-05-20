import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const AllToys = () => {
  useTitle('All Toys');

  const [toys, setToys] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://toy-server-rho.vercel.app/toys?limit=20');
      const data = await response.json();
      setToys(data);
    };

    fetchData();
  }, []);

  const handleSearchTermChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredToys = toys.filter((toy) =>
    toy.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold mb-4">All Toys</h2>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by Toy Name"
          value={searchTerm}
          onChange={handleSearchTermChange}
          className="p-2 border border-gray-300 rounded"
        />
      </div>

      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Serial Number</th>
            <th className="py-2 px-4 border-b">Seller</th>
            <th className="py-2 px-4 border-b">Toy Name</th>
            <th className="py-2 px-4 border-b">Sub-category</th>
            <th className="py-2 px-4 border-b">Price</th>
            <th className="py-2 px-4 border-b">Available Quantity</th>
            <th className="py-2 px-4 border-b">View Details</th>
          </tr>
        </thead>
        <tbody>
          {filteredToys.map((toy, index) => (
            <tr key={toy._id}>
              <td className="py-2 px-4 border-b">{index + 1} </td>
              <td className="py-2 px-4 border-b">{toy.sellerName}</td>
              <td className="py-2 px-4 border-b">{toy.name}</td>
              <td className="py-2 px-4 border-b">{toy.subCategory}</td>
              <td className="py-2 px-4 border-b">{toy.price}</td>
              <td className="py-2 px-4 border-b">{toy.availableQuantity}</td>
              <td className="py-2 px-4 border-b">{toy._id}</td>
              <td className="py-2 px-4 border-b">
                <Link
                  to={`/details/${toy._id}`}
                  className="text-blue-500 hover:underline"
                >
                  View Details
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllToys;
