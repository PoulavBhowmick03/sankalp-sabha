import React from 'react';
import Link from 'next/link';

const Sidebar = () => {
  return (
    <div className="sidebar bg-gradient-to-tr from-gray-700 via-gray-900 to-black text-white w-1/5 min-h-screen p-4 hidden sm:flex flex-col">
      <ul className="sidebar-menu">
        <li className="sidebar-menu-item">
          <Link href="/" className="sidebar-menu-link block p-3 text-lg hover:bg-gradient-to-r from-teal-500 to-blue-500 rounded-md">
            Home
          </Link>
        </li>
        <li className="sidebar-menu-item">
          <Link href="/forum/proposal" className="sidebar-menu-link block p-3 text-lg hover:bg-gradient-to-r from-teal-500 to-blue-500 rounded-md">
            Proposals
          </Link>
        </li>
        <li className="sidebar-menu-item">
          <Link href="#" className="sidebar-menu-link block p-3 text-lg hover:bg-gradient-to-r from-teal-500 to-blue-500 rounded-md">
            Notifications
          </Link>
        </li>
        <li className="sidebar-menu-item">
          <Link href="/forum/profile" className="sidebar-menu-link block p-3 text-lg hover:bg-gradient-to-r from-teal-500 to-blue-500 rounded-md">
            Profile
          </Link>
        </li>
          <li className="sidebar-menu-item">
          <Link href="/forum/fir" className="sidebar-menu-link block p-3 text-lg bg-red-600 hover:bg-gradient-to-r from-red-600 to-red-700 rounded-md">
            Raise Complaint
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
