import React from "react";
import Footer from "../components/Footer";
import { dummyCarData } from "../assets/assets";

const MyBookings = () => {
  // Example bookings data
  const myBookings = [
    {
      id: 1,
      car: dummyCarData[0],
      date: "2025-08-15",
      price: "$120/day",
      location: "Chennai",
    },
    {
      id: 2,
      car: dummyCarData[1],
      date: "2025-09-02",
      price: "$95/day",
      location: "Bangalore",
    },
    {
      id: 3,
      car: dummyCarData[2],
      date: "2025-09-10",
      price: "$150/day",
      location: "Hyderabad",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Content */}
      <div className="flex-grow px-4 md:px-8 lg:px-16 py-10 bg-light">
        <h1 className="text-2xl font-bold mb-6">My Bookings</h1>

        <div className="flex flex-col gap-6">
          {myBookings.map((booking) => (
            <div
              key={booking.id}
              className="flex flex-col sm:flex-row bg-white rounded-xl shadow p-4 w-full"
            >
              {/* Car Image */}
              <img
                src={booking.car.image}
                alt={`${booking.car.brand} ${booking.car.model}`}
                className="w-full sm:w-56 h-40 object-cover object-center rounded-xl sm:rounded-l-xl sm:rounded-r-none"
              />

              {/* Booking Details */}
              <div className="flex flex-col justify-between p-4 flex-grow">
                <div>
                  <h2 className="text-lg font-semibold">
                    {booking.car.brand} {booking.car.model}
                  </h2>
                  <p className="text-gray-500">Booking Date: {booking.date}</p>
                  <p className="text-gray-500">Location: {booking.location}</p>
                </div>
                <p className="text-primary font-bold text-lg">
                  {booking.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MyBookings;
