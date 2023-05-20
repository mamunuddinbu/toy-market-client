import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import useTitle from "../../hooks/useTitle";

const Details = () => {
  useTitle("Toy Details");

  const toy = useLoaderData();
  console.log(toy);
  console.log(toy?.name);

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold mb-4">Toy Details</h2>

      <div className="max-w-lg mx-auto bg-white p-4 shadow-md">
        <div className="flex justify-center">
          <img src={toy.picture} alt={toy.name} className="max-w-full h-auto" />
        </div>
        <div className="">
          <h3 className="text-xl font-bold mb-2">{toy?.name}</h3>
          <p className="mb-2">
            <span className="font-semibold">Seller: </span>
            {toy?.sellerName}
          </p>
          <p className="mb-2">
            <span className="font-semibold">Seller Email: </span>
            {toy?.sellerEmail}
          </p>
          <p className="mb-2">
            <span className="font-semibold">Price: </span>
            {toy?.price}
          </p>
          <p className="mb-2">
            <span className="font-semibold">Rating: </span>
            {toy?.rating}
          </p>
          <p className="mb-2">
            <span className="font-semibold">Available Quantity: </span>
            {toy?.availableQuantity}
          </p>
          <p className="mb-2">
            <span className="font-semibold">Description: </span>
            {toy?.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Details;
