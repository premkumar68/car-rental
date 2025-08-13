import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { assets, dummyCarData } from "../assets/assets";
import Footer from "../components/Footer";
import Swal from "sweetalert2";

const CarDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [car, setCar] = useState(null);
  const [pickupDate, setPickupDate] = useState("");
  const [dropDate, setDropDate] = useState("");
  const [message, setMessage] = useState("");
  const [totalPrice, setTotalPrice] = useState(null);

  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

  useEffect(() => {
    const foundCar = dummyCarData.find((car) => car._id === id);
    setCar(foundCar);
  }, [id]);

  const handleBooking = () => {
    setMessage("");
    setTotalPrice(null);

    if (!loggedInUser) {
      setMessage("Please login first to book a car.");
      return;
    }

    if (!pickupDate || !dropDate) {
      setMessage("Please select both pickup and drop dates.");
      return;
    }

    const start = new Date(pickupDate);
    const end = new Date(dropDate);

    if (end <= start) {
      setMessage("Drop date must be after pickup date.");
      return;
    }

    const diffDays = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
    const dailyPrice = parseInt(car.pricePerDay.replace(/,/g, ""), 10);
    const total = diffDays * dailyPrice;

    setTotalPrice(total);
    setMessage(`Total amount: ₹${total.toLocaleString()}. Click 'Pay Now' to complete booking.`);
  };

  const handlePayment = () => {
    Swal.fire({
      title: "Booking Confirmed ",
      html: `
        <p>Thank you, <b>${loggedInUser?.name || "Customer"}</b>!</p>
        <p>Your booking for <b>Rental Car</b> is confirmed.</p>
        <p>Total Amount Paid: <b>₹${totalPrice.toLocaleString()}</b></p>
      `,
      icon: "success",
      confirmButtonText: "OK",
      confirmButtonColor: "#2563eb",
      background: "#fff",
    }).then(() => {
      navigate("/"); // Redirect after confirmation
    });
  };

  return car ? (
    <div className="flex flex-col min-h-screen">
      <div className="px-6 md:px-16 lg:px-24 xl:px-32 mt-16 flex-grow">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 mb-6 text-gray-500 cursor-pointer"
        >
          <img src={assets.arrow_icon} alt="" className="rotate-180 opacity-65" />
          Back to all Cars
        </button>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-[350px] h-fit bg-white p-4 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Book This Car</h2>

            <label className="block mb-2 font-medium">Pickup Date</label>
            <input
              type="date"
              value={pickupDate}
              onChange={(e) => setPickupDate(e.target.value)}
              className="border border-gray-300 rounded-lg p-2 w-full mb-4"
            />

            <label className="block mb-2 font-medium">Drop Date</label>
            <input
              type="date"
              value={dropDate}
              onChange={(e) => setDropDate(e.target.value)}
              className="border border-gray-300 rounded-lg p-2 w-full mb-4"
            />

            <button
              onClick={handleBooking}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 w-full"
            >
              Book Now
            </button>

            {message && (
              <p
                className={`mt-4 text-sm ${
                  message.includes("Total amount") ? "text-green-600" : "text-red-600"
                }`}
              >
                {message}
              </p>
            )}

            {totalPrice && (
              <button
                onClick={handlePayment}
                className="mt-4 bg-green-600 text-white px-4 py-2 rounded-lg w-full hover:bg-green-700"
              >
                Pay Now
              </button>
            )}
          </div>

          <div>
            <div className="w-[500px] h-[350px]">
              <img
                src={car.image}
                alt={car.name}
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
            <h1 className="text-2xl font-bold mt-4">{car.name}</h1>
            <p className="mt-2">{car.description}</p>
            <p className="mt-2 font-semibold">
              Price: ₹{car.pricePerDay}/day
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  ) : (
    <p>Loading...</p>
  );
};

export default CarDetails;
