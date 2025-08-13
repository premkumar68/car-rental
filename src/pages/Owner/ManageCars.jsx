import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // For navigation
import { assets } from "../../assets/assets";

const ManageCars = () => {
  const navigate = useNavigate();

  const [cars] = useState([
    {
      id: 1,
      brand: "Toyota",
      model: "Innova Crysta",
      status: "Available",
      pricePerDay: 2500,
      image: assets.carIconColored,
    },
    {
      id: 2,
      brand: "Hyundai",
      model: "Creta",
      status: "Booked",
      pricePerDay: 3000,
      image: assets.carIconColored,
    },
  ]);

  return (
    <div className="p-4 md:p-8">
      {/* Header with Add button */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-semibold">Manage Cars</h1>
        <button
          onClick={() => navigate("/owner/add-car")} // Navigate to AddCar page
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-all"
        >
          + Add New Car
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto border rounded-lg shadow-sm">
        <table className="min-w-full border-collapse">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">
                Car
              </th>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">
                Status
              </th>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">
                Price/Day
              </th>
              <th className="py-3 px-4 text-center text-sm font-medium text-gray-600">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {cars.map((car) => (
              <tr
                key={car.id}
                className="border-t hover:bg-gray-50 transition-colors"
              >
                <td className="py-3 px-4 flex items-center gap-3">
                  <img
                    src={car.image}
                    alt={`${car.brand} ${car.model}`}
                    className="w-12 h-12 rounded-lg object-cover bg-gray-100"
                  />
                  <div>
                    <p className="font-medium">{car.brand}</p>
                    <p className="text-sm text-gray-500">{car.model}</p>
                  </div>
                </td>
                <td className="py-3 px-4">
                  <span
                    className={`px-3 py-1 text-xs rounded-full ${
                      car.status === "Available"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {car.status}
                  </span>
                </td>
                <td className="py-3 px-4">₹{car.pricePerDay}</td>
                <td className="py-3 px-4 flex justify-center gap-2">
                  <button className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded-md text-sm">
                    Edit
                  </button>
                  <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageCars;
