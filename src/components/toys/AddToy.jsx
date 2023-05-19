import React, { useState } from "react";
import useTitle from "../../hooks/useTitle";

const AddToy = () => {
  useTitle('AddToy')
  const [toyPicture, setToyPicture] = useState("");
  const [toyName, setToyName] = useState("");
  const [sellerName, setSellerName] = useState("");
  const [sellerEmail, setSellerEmail] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [toyPrice, setToyPrice] = useState("");
  const [toyRating, setToyRating] = useState("");
  const [availableQuantity, setAvailableQuantity] = useState("");
  const [toyDescription, setToyDescription] = useState("");

  const handleToyPictureChange = (e) => {
    setToyPicture(e.target.value);
  };

  const handleToyNameChange = (e) => {
    setToyName(e.target.value);
  };

  const handleSellerNameChange = (e) => {
    setSellerName(e.target.value);
  };

  const handleSellerEmailChange = (e) => {
    setSellerEmail(e.target.value);
  };

  const handleSubCategoryChange = (e) => {
    setSubCategory(e.target.value);
  };

  const handleToyPriceChange = (e) => {
    setToyPrice(e.target.value);
  };

  const handleToyRatingChange = (e) => {
    setToyRating(e.target.value);
  };

  const handleAvailableQuantityChange = (e) => {
    setAvailableQuantity(e.target.value);
  };

  const handleToyDescriptionChange = (e) => {
    setToyDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform toy submission logic here
    console.log("Toy submitted:", {
      picture: toyPicture,
      name: toyName,
      sellerName: sellerName,
      sellerEmail: sellerEmail,
      subCategory: subCategory,
      price: toyPrice,
      rating: toyRating,
      availableQuantity: availableQuantity,
      description: toyDescription,
    });
    // Clear form fields
    setToyPicture("");
    setToyName("");
    setSellerName("");
    setSellerEmail("");
    setSubCategory("");
    setToyPrice("");
    setToyRating("");
    setAvailableQuantity("");
    setToyDescription("");
  };

  return (
    <div className="container mx-auto py-10">
      <h2 className="text-3xl font-bold mb-6">Add a Toy</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="toyPicture" className="block font-bold mb-1">
            Toy Picture URL
          </label>
          <input
            type="text"
            id="toyPicture"
            className="w-full border border-gray-300 rounded-md p-2"
            value={toyPicture}
            onChange={handleToyPictureChange}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="toyName" className="block font-bold mb-1">
            Toy Name
          </label>
          <input
            type="text"
            id="toyName"
            className="w-full border border-gray-300 rounded-md p-2"
            value={toyName}
            onChange={handleToyNameChange}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="sellerName" className="block font-bold mb-1">
            Seller Name
          </label>
          <input
            type="text"
            id="sellerName"
            className="w-full border border-gray-300 rounded-md p-2"
            value={sellerName}
            onChange={handleSellerNameChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="sellerEmail" className="block font-bold mb-1">
            Seller Email
          </label>
          <input
            type="email"
            id="sellerEmail"
            className="w-full border border-gray-300 rounded-md p-2"
            value={sellerEmail}
            onChange={handleSellerEmailChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="subCategory" className="block font-bold mb-1">
            Sub-category
          </label>
          <select
            id="subCategory"
            className="w-full border border-gray-300 rounded-md p-2"
            value={subCategory}
            onChange={handleSubCategoryChange}
            required
          >
            <option value="">Select Sub-category</option>
            <option value="Math Toys">Math Toys</option>
            <option value="Language Toys">Language Toys</option>
            <option value="Science Toys">Science Toys</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="toyPrice" className="block font-bold mb-1">
            Toy Price
          </label>
          <input
            type="number"
            id="toyPrice"
            className="w-full border border-gray-300 rounded-md p-2"
            value={toyPrice}
            onChange={handleToyPriceChange}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="toyRating" className="block font-bold mb-1">
            Toy Rating
          </label>
          <input
            type="number"
            id="toyRating"
            className="w-full border border-gray-300 rounded-md p-2"
            value={toyRating}
            onChange={handleToyRatingChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="availableQuantity" className="block font-bold mb-1">
            Available Quantity
          </label>
          <input
            type="number"
            id="availableQuantity"
            className="w-full border border-gray-300 rounded-md p-2"
            value={availableQuantity}
            onChange={handleAvailableQuantityChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="toyDescription" className="block font-bold mb-1">
            Toy Description
          </label>
          <textarea
            id="toyDescription"
            className="w-full border border-gray-300 rounded-md p-2"
            value={toyDescription}
            onChange={handleToyDescriptionChange}
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600"
        >
          Add Toy
        </button>
      </form>
    </div>
  );
};

export default AddToy;
