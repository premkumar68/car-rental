// src/pages/owner/Dashboard.jsx
import React, { useEffect, useState } from "react";
import { assets, dummyDashboardData } from "../../assets/assets";
import Title from "../../components/owner/Title";

const Dashboard = () => {
  const [data, setData] = useState({
    totalCars: 0,
    totalBookings: 0,
    pendingBookings: 0,
    completedBookings: 0,
    recentBookings: [],
    monthlyRevenue: 0,
  });

  const dashboardCards = [
    { title: "Total Cars", value: data.totalCars, icon: assets.carIconColored },
    { title: "Total Bookings", value: data.totalBookings, icon: assets.listIconColored },
    { title: "Pending", value: data.pendingBookings, icon: assets.cautionIconColored },
    { title: "Confirm", value: data.completedBookings, icon: assets.listIconColored },
  ];

  useEffect(() => {
    setData(dummyDashboardData);
  }, []);

  return (
    <div className="px-4 pt-10 md:px-10 flex-1">
      <Title
        title="Admin Dashboard"
        subTitle="Monitor overall performance including total cars, bookings, revenue and recent activities"
      />

      {/* Cards */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-8 max-w-3xl">
        {dashboardCards.map((card, index) => (
          <div
            key={index}
            className="flex gap-2 items-center justify-between p-4 rounded-md border border-borderColor"
          >
            <div>
              <h1 className="text-xs text-gray-500">{card.title}</h1>
              <p className="text-lg font-semibold">{card.value}</p>
            </div>

            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-500/10">
              <img src={card.icon} alt="" className="h-4 w-4" />
            </div>
          </div>
        ))}
      </div>

      {/* Recent Bookings & Monthly Revenue */}
      <div className="flex flex-wrap items-start gap-6 mb-8 w-full">
        {/* Recent bookings */}
        <div className="p-4 md:p-6 border border-borderColor rounded-md max-w-lg w-full">
          <h1 className="text-lg font-medium">Recent Bookings</h1>
          <p className="text-gray-500">Latest Customer Booking</p>

          {data.recentBookings.length > 0 ? (
            data.recentBookings.map((booking, index) => (
              <div
                key={index}
                className="mt-4 flex items-center justify-between border-b pb-3"
              >
                <div className="flex items-center gap-3">
                  <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-blue-500/10">
                    <img src={assets.listIconColored} alt="" className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">
                      {booking.car.brand} {booking.car.model}
                    </p>
                    <p className="text-sm text-gray-500">
                      {booking.createdAt.split("T")[0]}
                    </p>
                  </div>
                </div>
                <p className="text-blue-500 font-semibold">₹{booking.amount}</p>
              </div>
            ))
          ) : (
            <p className="mt-4 text-gray-500">No recent bookings found.</p>
          )}
        </div>

        {/* Monthly revenue */}
        <div className="p-4 md:p-6 border border-borderColor rounded-md w-full max-w-xs">
          <h1 className="text-lg font-medium">Monthly Revenue</h1>
          <p className="text-gray-500">Total this month</p>
          <p className="text-2xl font-bold mt-4 text-green-600">
            ₹{data.monthlyRevenue}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
