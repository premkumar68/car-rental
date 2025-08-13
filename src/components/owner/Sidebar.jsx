import React, { useState, useEffect } from 'react'
import { assets, dummyCarData, ownerMenuLinks } from '../../assets/assets'
import { NavLink, useLocation } from 'react-router-dom'

const Sidebar = () => {
  const location = useLocation()

  const [user, setUser] = useState(dummyCarData)
  const [selectedImage, setSelectedImage] = useState(null)

  // Load saved image from localStorage when component mounts
  useEffect(() => {
    const savedImage = localStorage.getItem('profileImage')
    if (savedImage) {
      setUser(prev => ({ ...prev, image: savedImage }))
    }
  }, [])

  const updateImage = () => {
    if (selectedImage) {
      const reader = new FileReader()
      reader.onloadend = () => {
        localStorage.setItem('profileImage', reader.result)
        setUser(prev => ({ ...prev, image: reader.result }))
      }
      reader.readAsDataURL(selectedImage)
      setSelectedImage(null)
    }
  }

  return (
    <div
      className='relative min-h-screen md:flex flex-col items-center pt-8 max-w-13 md:max-w-60
      w-full border-borderColor text-sm'
    >

      {/* Profile Image + ADMIN Text */}
      <div className='flex flex-col items-center gap-2 relative'>
        <label htmlFor="image" className="flex flex-col items-center">
          <img
            src={selectedImage
              ? URL.createObjectURL(selectedImage)
              : user?.image || 'https://via.placeholder.com/150'}
            alt="User"
            className="w-24 h-24 rounded-full object-cover"
          />
          <input
            type="file"
            id='image'
            accept='image/*'
            hidden
            onChange={e => setSelectedImage(e.target.files[0])}
          />
          <h2 className="mt-2 font-semibold">OWNER</h2>
        </label>

        {/* Save Button */}
        {selectedImage && (
          <button
            className='absolute top-0 right-0 flex p-2 gap-1 bg-blue-500/10 text-primary cursor-pointer rounded'
            onClick={updateImage}
          >
            Save <img src={assets.check_icon} width={13} alt="" />
          </button>
        )}
      </div>

      {/* Sidebar Menu Links */}
      <div className='w-full mt-6'>
        {ownerMenuLinks.map((link, index) => (
          <NavLink
            key={index}
            to={link.path}
            className={`relative flex items-center gap-2 w-full py-3 pl-4
              ${link.path === location.pathname
                ? 'bg-blue-500/10 text-primary'
                : 'text-gray-600'}`}
          >
            <img
              src={link.path === location.pathname ? link.coloredIcon : link.icon}
              alt="icon"
            />
            <span className='max-md:hidden'>{link.name}</span>
            {link.path === location.pathname && (
              <div className="bg-blue-500 w-1.5 h-8 rounded-1 right-0 absolute"></div>
            )}
          </NavLink>
        ))}
      </div>
    </div>
  )
}

export default Sidebar
