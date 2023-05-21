import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import { AuthContext } from '../auth/AuthProvider';

const MyToys = () => {
  useTitle('My Toys');

  const { user } = useContext(AuthContext);

  const [toys, setToys] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState('asc');

  useEffect(() => {
    const fetchToys = async () => {
      const response = await fetch(`https://toy-server-rho.vercel.app/toys/${user?.email}`);
      const data = await response.json();

      const sortedToys = data.sort((a, b) => {
        if (sortOrder === 'asc') {
          return a.price - b.price;
        } else {
          return b.price - a.price;
        }
      });

      setToys(sortedToys);
      setLoading(false);
    };

    fetchToys();
  }, [user?.email, sortOrder]);

  const handleDelete = async (id) => {
    const confirmed = window.confirm('Are you sure you want to delete this toy?');
    if (!confirmed) return;

    const response = await fetch(`https://toy-server-rho.vercel.app/toys/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      setToys((prevToys) => prevToys.filter((toy) => toy._id !== id));
    }
  };

  const handleSort = () => {
    const sortedToys = [...toys].sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });
    setToys(sortedToys);
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  return (
    <div className='my-12'>
      <h2 className="text-2xl font-bold mb-4">
        My Toys
        <button
          className="ml-2 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded"
          onClick={handleSort}
        >
          Sort by Price {sortOrder === 'asc' ? '▲' : '▼'}
        </button>
      </h2>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <table className="table w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">Serial Number</th>
              <th className="px-4 py-2">Toy Name</th>
              <th className="px-4 py-2">Price</th>
              <th className="px-4 py-2">Available Quantity</th>
              <th className="px-4 py-2">Detail Description</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {toys.map((toy, index) => (
              <tr key={toy._id}>
                <td className="border px-4 py-2">{index + 1}</td>
                <td className="border px-4 py-2">{toy.name}</td>
                <td className="border px-4 py-2">{toy.price}</td>
                <td className="border px-4 py-2">{toy.availableQuantity}</td>
                <td className="border px-4 py-2">{toy.detailDescription}</td>
                <td className="border px-4 py-2">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
                    <Link to={`/update/${toy._id}`}>Update</Link>
                  </button>
                  <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => handleDelete(toy._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default MyToys;
