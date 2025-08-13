// src/pages/owner/AddCar.jsx
import React, { useState } from "react";
import { cityList, assets } from "../../assets/assets";

const AddCar = () => {
  const [carData, setCarData] = useState({
    brand: "",
    model: "",
    year: "",
    category: "",
    seating_capacity: "",
    fuel_type: "",
    transmission: "",
    pricePerDay: "",
    location: "",
    description: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setCarData({ ...carData, image: files[0] });
    } else {
      setCarData({ ...carData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New Car Added:", carData);
    alert("Car details submitted successfully!");
    // Here you would send carData to backend
  };

  return (
    <div className="px-4 md:px-10 py-8 flex-1">
      <h1 className="text-2xl font-bold mb-6"> Add New Car</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-6 max-w-3xl mx-auto border border-gray-200"
      >
        <div className="grid md:grid-cols-2 gap-6">
          {/* Brand */}
          <div>
            <label className="block mb-1 font-medium">Brand</label>
            <input
              type="text"
              name="brand"
              value={carData.brand}
              onChange={handleChange}
              placeholder="e.g. Toyota"
              className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-300"
              required
            />
          </div>

          {/* Model */}
          <div>
            <label className="block mb-1 font-medium">Model</label>
            <input
              type="text"
              name="model"
              value={carData.model}
              onChange={handleChange}
              placeholder="e.g. Corolla"
              className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-300"
              required
            />
          </div>

          {/* Year */}
          <div>
            <label className="block mb-1 font-medium">Year</label>
            <input
              type="number"
              name="year"
              value={carData.year}
              onChange={handleChange}
              placeholder="e.g. 2022"
              className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-300"
              required
            />
          </div>

          {/* Category */}
          <div>
            <label className="block mb-1 font-medium">Category</label>
            <select
              name="category"
              value={carData.category}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-300"
              required
            >
              <option value="">Select Category</option>
              <option value="SUV">SUV</option>
              <option value="Sedan">Sedan</option>
              <option value="Hatchback">Hatchback</option>
              <option value="Convertible">Convertible</option>
            </select>
          </div>

          {/* Seats */}
          <div>
            <label className="block mb-1 font-medium">Seats</label>
            <input
              type="number"
              name="seating_capacity"
              value={carData.seating_capacity}
              onChange={handleChange}
              placeholder="e.g. 5"
              className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-300"
              required
            />
          </div>

          {/* Fuel Type */}
          <div>
            <label className="block mb-1 font-medium">Fuel Type</label>
            <select
              name="fuel_type"
              value={carData.fuel_type}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-300"
              required
            >
              <option value="">Select Fuel</option>
              <option value="Petrol">Petrol</option>
              <option value="Diesel">Diesel</option>
              <option value="Electric">Electric</option>
              <option value="Hybrid">Hybrid</option>
            </select>
          </div>

          {/* Transmission */}
          <div>
            <label className="block mb-1 font-medium">Transmission</label>
            <select
              name="transmission"
              value={carData.transmission}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-300"
              required
            >
              <option value="">Select Transmission</option>
              <option value="Manual">Manual</option>
              <option value="Automatic">Automatic</option>
              <option value="Semi-Automatic">Semi-Automatic</option>
            </select>
          </div>

          {/* Price Per Day */}
          <div>
            <label className="block mb-1 font-medium">Price Per Day (₹)</label>
            <input
              type="number"
              name="pricePerDay"
              value={carData.pricePerDay}
              onChange={handleChange}
              placeholder="e.g. 1500"
              className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-300"
              required
            />
          </div>

          {/* Location */}
          <div>
            <label className="block mb-1 font-medium">Location</label>
            <select
              name="location"
              value={carData.location}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-300"
              required
            >
              <option value="">Select City</option>
              {cityList.map((city, idx) => (
                <option key={idx} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>

          {/* Description */}
          <div className="md:col-span-2">
            <label className="block mb-1 font-medium">Description</label>
            <textarea
              name="description"
              value={carData.description}
              onChange={handleChange}
              placeholder="Write a short description..."
              rows="3"
              className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-300"
              required
            ></textarea>
          </div>

          {/* Image Upload */}
          <div className="md:col-span-2">
            <label className="block mb-1 font-medium">Car Image</label>
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleChange}
              className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-300"
              required
            />
            {carData.image && (
              <img
                src={URL.createObjectURL(carData.image)}
                alt="Preview"
                className="mt-3 h-40 object-cover rounded-lg border"
              />
            )}
          </div>
        </div>

        <button
          type="submit"
          className="mt-6 w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition duration-300"
        >
          Add Car
        </button>
      </form>
    </div>
  );
};

export default AddCar;
