import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { AuthContext } from "../auth/AuthProvider";

const AllToys = () => {
  const [toys, setToys] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const {user}=useContext(AuthContext)

  useEffect(() => {
    fetchToys();
  }, []);

  const fetchToys = async () => {
    try {
      const response = await axios.get("http://localhost:5000/toys");
      setToys(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error("Failed to fetch toys:", error);
    }
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredToys = toys.filter((toy) =>
    toy.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto py-10">
      <h2 className="text-3xl font-bold mb-6">All Toys</h2>
      {isLoading ? (
        <p>Loading toys...</p>
      ) : (
        <>
          <div className="mb-4">
            <label htmlFor="search" className="block font-bold mb-1">
              Search by Toy Name
            </label>
            <input
              type="text"
              id="search"
              className="w-full border border-gray-300 rounded-md p-2"
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>
          <table className="w-full border border-gray-300">
            <thead>
              <tr>
                <th className="border border-gray-300 px-4 py-2">Seller</th>
                <th className="border border-gray-300 px-4 py-2">Toy Name</th>
                <th className="border border-gray-300 px-4 py-2">Sub-category</th>
                <th className="border border-gray-300 px-4 py-2">Price</th>
                <th className="border border-gray-300 px-4 py-2">Available Quantity</th>
                <th className="border border-gray-300 px-4 py-2">View Details</th>
              </tr>
            </thead>
            <tbody>
              {filteredToys.map((toy) => (
                <tr key={toy._id}>
                  <td className="border border-gray-300 px-4 py-2">{toy.sellerName}</td>
                  <td className="border border-gray-300 px-4 py-2">{toy.name}</td>
                  <td className="border border-gray-300 px-4 py-2">{toy.subCategory}</td>
                  <td className="border border-gray-300 px-4 py-2">{toy.price}</td>
                  <td className="border border-gray-300 px-4 py-2">{toy.availableQuantity}</td>
                  <td className="border border-gray-300 px-4 py-2">
                    <Link to={user ? `/details/${toy._id}` : "/login"}>
                      View Details
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default AllToys;
