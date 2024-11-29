import React, { useState } from 'react';
import TeamManagement from './Teams';
import UserManagement from './Users';
import Rankings from './Ranking';
import AdminProfile from './Profile';
const AdminPanel = () => {
  const [activeSection, setActiveSection] = useState('Profile');

  const sections = {
      Profile:<div><AdminProfile/></div>,
    Users: <div><UserManagement/></div>,
    Teams: <div><TeamManagement/></div> ,
    Rankings: <div><Rankings/></div>,
  };

  return (
    <div className="flex  bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-blue-800 text-white">
        <div className="p-4 text-2xl font-bold border-b border-blue-700">
          Admin Panel
        </div>
        <ul className="mt-4 space-y-2">
          {Object.keys(sections).map((section) => (
            <li
              key={section}
              onClick={() => setActiveSection(section)}
              className={`p-4 cursor-pointer hover:bg-blue-700 ${
                activeSection === section ? 'bg-blue-600' : ''
              }`}
            >
              {section}
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-semibold mb-4">{activeSection}</h1>
        <div className="bg-white p-4 rounded shadow-md">{sections[activeSection]}</div>
      </div>
    </div>
  );
};

export default AdminPanel;
