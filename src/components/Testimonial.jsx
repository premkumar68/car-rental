import React from 'react'
import Title from './Title' // ✅ Adjust path as needed
import { assets } from '../assets/assets'

const Testimonial = () => {
    const testimonials = [
        {
            name: "Virat Kohli",
            location: "Goa, India",
            image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
            review: "I've rented cars from various companies, but the experience with CarRental was exceptional!"
        },
        {
            name: "Rajinikanth",
            location: "Chennai, India",
            image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
            review: "I've rented cars from various companies, but the experience with CarRental was exceptional!"
        },
        {
            name: "Samantha",
            location: "Bengaluru, India",
            image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
            review: "I've rented cars from various companies, but the experience with CarRental was exceptional!"
        }
    ];

    return (
        <div className="py-28 px-6 md:px-16 lg:px-24 xl:px-44">
            <Title 
                title="What our customers say" 
                subTitle="Discover why discerning travelers choose stayVenture for their luxury accommodations around the world." 
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-18">
                {testimonials.map((testimonial, index) => (
                    <div 
                        key={index} 
                        className="bg-white p-6 rounded-xl shadow-lg hover:-translate-y-1 transition-all duration-500"
                    >
                        <div className="flex items-center gap-3">
                            <img className="w-12 h-12 rounded-full" src={testimonial.image} alt={testimonial.name} />
                            <div>
                                <p className="text-xl">{testimonial.name}</p>
                                <p className="text-gray-500">{testimonial.location}</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-1 mt-4">
                            {Array(5).fill(0).map((_, idx) => (
                                <img key={idx} src={assets.star_icon} alt="star_icon" />
                            ))}
                        </div>

                        <p className="text-gray-500 max-w-90 mt-4 font-light">"{testimonial.review}"</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Testimonial
