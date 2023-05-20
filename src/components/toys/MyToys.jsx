import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import { AuthContext } from '../auth/AuthProvider';

const MyToys = () => {
  useTitle('My Toys');

  const {user} = useContext(AuthContext)
 

  const [toys, setToys] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchToys = async () => {
      // Fetch toys from the server for the logged-in user
      const response = await fetch(`http://localhost:5000/toys/${user?.email}`); // Update the URL accordingly
      const data = await response.json();
      setToys(data);
      setLoading(false);
    };

    fetchToys();
  }, [user?.email]);

console.log(toys);
  const handleDelete = async (id) => {
    // Confirm delete action
    const confirmed = window.confirm('Are you sure you want to delete this toy?');
    if (!confirmed) return;

    // Delete the toy from the server
    const response = await fetch(`http://localhost:5000/toys/${id}`, {
      method: 'DELETE',
    }); // Update the URL accordingly

    if (response.ok) {
      // Remove the deleted toy from the list
      setToys((prevToys) => prevToys.filter((toy) => toy._id !== id));
    }
  };

  return (
    <div>
      <h2>My Toys</h2>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Serial Number</th>
              <th>Toy Name</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th>Detail Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {toys.map((toy, index) => (
              <tr key={toy._id}>
                <td>{index + 1}</td>
                <td>{toy.name}</td>
                <td>{toy.price}</td>
                <td>{toy.availableQuantity}</td>
                <td>{toy.detailDescription}</td>
                <td>
                  <button>
                    <Link to={`/update/${toy._id}`}>Update</Link>
                  </button>
                  <button onClick={() => handleDelete(toy._id)}>Delete</button>
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
