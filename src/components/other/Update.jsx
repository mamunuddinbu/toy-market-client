import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Update = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [toy, setToy] = useState(null);
  const [loading, setLoading] = useState(true);
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    const fetchToyDetails = async () => {
      const response = await fetch(`https://toy-server-rho.vercel.app/toys/id/${id}`);
      const data = await response.json();
      setToy(data);
      setLoading(false);
    };

    fetchToyDetails();
  }, [id]);

  const handleUpdate = async () => {
    const updatedToy = {
      price,
      availableQuantity: quantity,
      detailDescription: description,
    };

    const response = await fetch(`https://toy-server-rho.vercel.app/toys/update/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedToy),
    });

    if (response.ok) {
      // Redirect to My Toys page after successful update
      navigate('/my-toys');
    } else {
      // Handle error case
      // ...
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2 className='text-3xl text-center mt-5'><u>Update Toy</u> </h2>

      <form className="max-w-md mx-auto my-10">
        <div className="mb-4">
          <label className="block mb-2">Price:</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Available Quantity:</label>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Detail Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          ></textarea>
        </div>
        <button
          type="button"
          onClick={handleUpdate}
          className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
        >
          Update Toy
        </button>
      </form>
    </div>
  );
};

export default Update;
