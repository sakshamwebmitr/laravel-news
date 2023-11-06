import { useState } from "react";

const Sidenav = () => {
    const [openSection, setOpenSection] = useState(null);

    const handleSectionToggle = (section) => {
      if (openSection === section) {
        setOpenSection(null); // Close the section if it's already open
      } else {
        setOpenSection(section); // Open the section
      }
    };
  return (
    <div className="w-full h-screen py-5 overflow-auto">
    <ul>
     <li className="flex items-center justify-between w-full px-4 py-2 text-white hover:bg-red-600" >Option</li>
      <li>
        <button
          onClick={() => handleSectionToggle('section1')}
          className="flex items-center justify-between w-full px-4 py-2 text-white hover:bg-red-600"
        >
          Section 1
          <i
            className={`ri-arrow-${openSection === 'section1' ? 'up' : 'down-s-line'} text-white`}
          ></i>
        </button>
        {openSection === 'section1' && (
          <ul className="pl-4">
            <li>
              <a href="#" className="block py-2 text-white hover:text-blue-500">
                Option 1
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 text-white hover:text-blue-500">
                Option 2
              </a>
            </li>
          </ul>
          )}
      </li>
      <li>
        <button
          onClick={() => handleSectionToggle('section2')}
          className="flex items-center justify-between w-full px-4 py-2 text-white hover:bg-red-600"
        >
          Section 2
          <i
            className={`ri-arrow-${openSection === 'section2' ? 'up' : 'down-s-line'} text-white`}
          ></i>
        </button>
        {openSection === 'section2' && (
          <ul className="pl-4">
            <li>
              <a href="#" className="block py-2 text-white hover:text-blue-500">
                Option 3
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 text-white hover:text-blue-500">
                Option 4
              </a>
            </li>
          </ul>
         ) }
      </li>
      <li>
        <button
          onClick={() => handleSectionToggle('section3')}
          className="flex items-center justify-between w-full px-4 py-2 text-white hover:bg-red-600"
        >
          Section 3
          <i
            className={`ri-arrow-${openSection === 'section3' ? 'up' : 'down-s-line'} text-white`}
          ></i>
        </button>
        {openSection === 'section3' && (
          <ul className="pl-4">
            <li>
              <a href="#" className="block py-2 text-white hover:text-blue-500">
                Option 3
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 text-white hover:text-blue-500">
                Option 4
              </a>
            </li>
          </ul>
         ) }
      </li>
      <li className="flex items-center justify-between w-full px-4 py-2 text-white hover:bg-red-600" >Option</li>
      <li className="flex items-center justify-between w-full px-4 py-2 text-white hover:bg-red-600" >Option</li>
      <li className="flex items-center justify-between w-full px-4 py-2 text-white hover:bg-red-600" >Option</li>
      <li className="flex items-center justify-between w-full px-4 py-2 text-white hover:bg-red-600" >Option</li>
      <li className="flex items-center justify-between w-full px-4 py-2 text-white hover:bg-red-600" >Option</li>
      <li className="flex items-center justify-between w-full px-4 py-2 text-white hover:bg-red-600" >Option</li>
      <li className="flex items-center justify-between w-full px-4 py-2 text-white hover:bg-red-600" >Option</li>
      <li className="flex items-center justify-between w-full px-4 py-2 text-white hover:bg-red-600" >Option</li>
      <li className="flex items-center justify-between w-full px-4 py-2 text-white hover:bg-red-600" >Option</li>
      <li className="flex items-center justify-between w-full px-4 py-2 text-white hover:bg-red-600" >Option</li>
      <li className="flex items-center justify-between w-full px-4 py-2 text-white hover:bg-red-600" >Option</li>
      <li className="flex items-center justify-between w-full px-4 py-2 text-white hover:bg-red-600" >Option</li>
      <li className="flex items-center justify-between w-full px-4 py-2 text-white hover:bg-red-600" >Option</li>
      <li className="flex items-center justify-between w-full px-4 py-2 text-white hover:bg-red-600" >Option</li>
      <li className="flex items-center justify-between w-full px-4 py-2 text-white hover:bg-red-600" >Option</li>
      <li className="flex items-center justify-between w-full px-4 py-2 text-white hover:bg-red-600" >Option</li>
      <li className="flex items-center justify-between w-full px-4 py-2 text-white hover:bg-red-600" >Option</li>
      <li className="flex items-center justify-between w-full px-4 py-2 text-white hover:bg-red-600" >Option</li>
      <li className="flex items-center justify-between w-full px-4 py-2 text-white hover:bg-red-600" >Option</li>
    </ul>
  </div>

  )
}

export default Sidenav