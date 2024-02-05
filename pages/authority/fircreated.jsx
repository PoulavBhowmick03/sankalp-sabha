// pages/view-complaints.js
"use client"
import React, { useState, useEffect } from 'react';
import Sidebar from '../../components/AuthoritySidebar';
import Navbar from '../../components/AuthorityNav';
import { MdCheckCircle, MdCancel, MdRemoveRedEye } from 'react-icons/md';

const ViewComplaints = () => {
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    // Mock complaints for demonstration
    const mockComplaints = [
      {
        id: '1',
        complaintFor: 'Assault',
        complaintType: 'Physical Assault',
        location: '123456',
        dateTime: new Date(),
        images: [],
        complaintDetails: 'A person was physically assaulted in Sector B.',
        revealIdentity: true,
        identityInfo: {
          name: 'John Doe',
          contactNumber: '123-456-7890',
          address: '123 Main St, Cityville',
        },
        status: 'Pending',
      },
      {
        id: '2',
        complaintFor: 'Robbery',
        complaintType: 'Burglary',
        location: '789012',
        dateTime: new Date(),
        images: [],
        complaintDetails: 'Break-in reported at a residence in Sector C.',
        revealIdentity: false,
        identityInfo: {},
        status: 'In Progress',
      },
      {
        id: '3',
        complaintFor: 'Assault',
        complaintType: 'Verbal Abuse',
        location: '567890',
        dateTime: new Date(),
        images: [],
        complaintDetails: 'Verbal abuse incident near the community park.',
        revealIdentity: true,
        identityInfo: {
          name: 'Alice Johnson',
          contactNumber: '987-654-3210',
          address: '456 Oak St, Cityville',
        },
        status: 'Resolved',
      },
      {
        id: '4',
        complaintFor: 'Theft',
        complaintType: 'Shoplifting',
        location: '234567',
        dateTime: new Date(),
        images: [],
        complaintDetails: 'Shoplifting reported at the local grocery store.',
        revealIdentity: false,
        identityInfo: {},
        status: 'Pending',
      },
      {
        id: '5',
        complaintFor: 'Vandalism',
        complaintType: 'Property Damage',
        location: '890123',
        dateTime: new Date(),
        images: [],
        complaintDetails: 'Vandalism at the public park. Playground equipment damaged.',
        revealIdentity: false,
        identityInfo: {},
        status: 'Pending',
      },
    ];

    setComplaints(mockComplaints);
  }, []);

  const handleResolveComplaint = (complaintId) => {
    // Update the status of the resolved complaint
    const updatedComplaints = complaints.map((complaint) =>
      complaint.id === complaintId ? { ...complaint, status: 'Resolved' } : complaint
    );
    setComplaints(updatedComplaints);
  };

  const handleRejectComplaint = (complaintId) => {
    // Update the status of the rejected complaint
    const updatedComplaints = complaints.map((complaint) =>
      complaint.id === complaintId ? { ...complaint, status: 'Rejected' } : complaint
    );
    setComplaints(updatedComplaints);
  };

  return (
    <div>
      <Navbar />
      <div className="flex bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-rose-300 to-teal-100 text-gray-800">
        <Sidebar />

        <div className="container mx-auto mt-8 flex-grow sm:ml-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">View Complaints</h2>
            {complaints.map((complaint) => (
              <div key={complaint.id} className="mb-10 p-4 border rounded bg-white shadow-md w-2/3">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                    {complaint.complaintFor.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <p className="font-bold text-gray-800">{complaint.complaintFor}</p>
                    <p className="text-gray-500 text-sm">{complaint.complaintType}</p>
                  </div>
                </div>
                <p className="text-gray-800">{complaint.complaintDetails}</p>
                <div className="flex items-center mt-4">
                  <div className="flex items-center mr-4">
                    <span className="text-gray-600">Status:</span>
                    <span className={`ml-2 ${getStatusColor(complaint.status)}`}>
                      {complaint.status}
                    </span>
                  </div>
                  {complaint.status === 'Pending' && (
                    <>
                      <button
                        onClick={() => handleResolveComplaint(complaint.id)}
                        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                      >
                        <MdCheckCircle className="mr-2" />
                        Resolve
                      </button>
                      <button
                        onClick={() => handleRejectComplaint(complaint.id)}
                        className="ml-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                      >
                        <MdCancel className="mr-2" />
                        Reject
                      </button>
                    </>
                  )}
                  <button
                    className="flex flex-row ml-auto px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  >
                    <MdRemoveRedEye className="mr-2" />
                    View Details
                  </button>
                </div>
                {complaint.revealIdentity && (
                  <div className="mt-4">
                    <p className="text-gray-600">Identity Information:</p>
                    <div className="flex flex-col space-y-2">
                      <p className="text-gray-800">{`Name: ${complaint.identityInfo.name}`}</p>
                      <p className="text-gray-800">{`Contact Number: ${complaint.identityInfo.contactNumber}`}</p>
                      <p className="text-gray-800">{`Address: ${complaint.identityInfo.address}`}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper function to determine status color
const getStatusColor = (status) => {
  switch (status) {
    case 'Pending':
      return 'text-yellow-500';
    case 'In Progress':
      return 'text-blue-500';
    case 'Resolved':
      return 'text-green-500';
    case 'Rejected':
      return 'text-red-500';
    default:
      return 'text-gray-500';
  }
};

export default ViewComplaints;
