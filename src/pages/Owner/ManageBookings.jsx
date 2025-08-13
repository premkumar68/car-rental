// src/pages/owner/ManageBookings.jsx
import React, { useState } from "react";
import { assets } from "../../assets/assets";
import Title from "../../components/owner/Title";

const ManageBookings = () => {
  const [bookings] = useState([
    {
      id: 101,
      customer: "John Doe",
      car: "Toyota Innova Crysta",
      startDate: "2025-08-15",
      endDate: "2025-08-18",
      status: "Confirmed",
      amount: 7500,
    },
    {
      id: 102,
      customer: "Jane Smith",
      car: "Hyundai Creta",
      startDate: "2025-08-20",
      endDate: "2025-08-22",
      status: "Pending",
      amount: 6000,
    },
    {
      id: 103,
      customer: "Alex Johnson",
      car: "Maruti Swift",
      startDate: "2025-08-10",
      endDate: "2025-08-12",
      status: "Cancelled",
      amount: 0,
    },
  ]);

  const getStatusBadge = (status) => {
    switch (status) {
      case "Confirmed":
        return "bg-green-100 text-green-700";
      case "Pending":
        return "bg-yellow-100 text-yellow-700";
      case "Cancelled":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="px-4 pt-10 md:px-10 flex-1">
      <Title
        title="Manage Bookings"
        subTitle="View, update, or cancel customer bookings"
      />

      {/* Table */}
      <div className="overflow-x-auto border rounded-lg shadow-sm mt-6">
        <table className="min-w-full border-collapse">
          <thead className="bg-gray-50">
            <tr>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">
                <img src={assets.listIconColored} alt="" className="inline h-4 w-4 mr-1" />
                Booking ID
              </th>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">
                <img src={assets.userIconColored} alt="" className="inline h-4 w-4 mr-1" />
                Customer
              </th>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">
                <img src={assets.carIconColored} alt="" className="inline h-4 w-4 mr-1" />
                Car
              </th>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">
                Start Date
              </th>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">
                End Date
              </th>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">
                Status
              </th>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">
                Amount
              </th>
              <th className="py-3 px-4 text-center text-sm font-medium text-gray-600">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr
                key={booking.id}
                className="border-t hover:bg-gray-50 transition-colors"
              >
                <td className="py-3 px-4">#{booking.id}</td>
                <td className="py-3 px-4">{booking.customer}</td>
                <td className="py-3 px-4">{booking.car}</td>
                <td className="py-3 px-4">{booking.startDate}</td>
                <td className="py-3 px-4">{booking.endDate}</td>
                <td className="py-3 px-4">
                  <span
                    className={`px-3 py-1 text-xs rounded-full ${getStatusBadge(
                      booking.status
                    )}`}
                  >
                    {booking.status}
                  </span>
                </td>
                <td className="py-3 px-4">₹{booking.amount}</td>
                <td className="py-3 px-4 flex justify-center gap-2">
                  <button className="flex items-center gap-1 bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md text-sm">
                    <img src={assets.viewIcon} alt="" className="h-3 w-3" />
                    View
                  </button>
                  <button className="flex items-center gap-1 bg-red-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md text-sm">
                    <img src={assets.deleteIcon} alt="" className="h-3 w-3" />
                    Cancel
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

export default ManageBookings;
