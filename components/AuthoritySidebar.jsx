import Link from 'next/link';
import React from 'react';

const Sidebar = () => {
  return (
    <div className="text-black sidebar bg-inherit w-1/5 min-h-screen p-4 hidden sm:flex flex-col">
      <ul className="sidebar-menu">
        <li className="sidebar-menu-item">
          <Link href="/" className="sidebar-menu-link block p-3 text-lg hover:bg-gradient-to-r from-teal-500 to-blue-500 rounded-md">
            Home
          </Link>
        </li>
        <li className="sidebar-menu-item">
          <Link href="/forum/sayan-chat" className="sidebar-menu-link block p-3 text-lg hover:bg-gradient-to-r from-teal-500 to-blue-500 rounded-md">
            View Community Chat
          </Link>
        </li>
        <li className="sidebar-menu-item">
          <Link href="/authority/authority" className="sidebar-menu-link block p-3 text-lg hover:bg-gradient-to-r from-teal-500 to-blue-500 rounded-md">
            Created Proposals
          </Link>
        </li>
        <li className="sidebar-menu-item">
          <Link href="/authority/fircreated" className="sidebar-menu-link block p-3 text-lg hover:bg-gradient-to-r from-teal-500 to-blue-500 rounded-md">
            Complaints raised
          </Link>
        </li>
        
        <li className="sidebar-menu-item">
          <Link href="#" className="sidebar-menu-link block p-3 text-lg hover:bg-gradient-to-r from-teal-500 to-blue-500 rounded-md">
            Settings
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
