"use client"
import React, { useState, useEffect,useRef } from "react";
import Sidebar from "../../components/Sidebar";
  import Link from "next/link";
import speechToText from "../../components/SpeechToText";
const RaiseFIR = () => {
  const [showWebcam, setShowWebcam] = useState(false);
  const [apiResponse, setApiResponse] = useState(null); // State to store API response
  const [complaintFor, setComplaintFor] = useState("");
  const [complaintType, setComplaintType] = useState("");
  const [location, setLocation] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [complaintDetails, setComplaintDetails] = useState("");
  const [revealIdentity, setRevealIdentity] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [identityInfo, setIdentityInfo] = useState({
    name: "",
    contactNumber: "",
    address: "",
  });
  const apiEndpoint = "http://localhost:5000/predict";
  useEffect(() => {
    if (apiResponse) {
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 5000); // Hide popup after 5 seconds
    }
  }, [apiResponse]);

  const videoRef = useRef(null);

  const openCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
      setShowWebcam(true);
    } catch (error) {
      console.error("Error accessing webcam:", error);
    }
  };
  const handleImageChange = (e) => {
    const selectedImages = Array.from(e.target.files);
    setImages(selectedImages);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    openCamera();
  };

  const captureImage = async () => {
    const canvas = document.createElement("canvas");
    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;
    const context = canvas.getContext("2d");
    context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
    
    // Convert canvas to blob
    canvas.toBlob(blob => {
      sendImageToApi(blob);
    }, 'image/png');
  };

  const sendImageToApi = async (blob) => {
    const formData = new FormData();
    formData.append('image', blob, 'captured-image.png');

    try {
      const response = await fetch(apiEndpoint, {
        method: "POST",
        body: formData, // Send formData directly
      });

      if (response.ok) {
        const result = await response.json();
        setApiResponse(result); // Store and display API response
        <Link href="/"/>
      } else {
        console.error("Failed to send image to the API. HTTP status:", response.status);
      }
    } catch (error) {
      console.error("Error sending image to the API:", error);
    }
  };
  const speechToText = async () => {
    try {
      const recognition = new window.webkitSpeechRecognition();
      recognition.continuous = false; // Set to false to stop recognition after the first result
      recognition.interimResults = false; // Set to false as we only want final results
      recognition.lang = "en-US"; // Set the language of the recognition
      recognition.start(); // Start the recognition process
  
      recognition.onresult = (event) => {
        const speechTranscript = event.results[0][0].transcript; // Get the transcript of the recognized speech
        setComplaintDetails(speechTranscript); // Update the state with the transcribed text
        console.log("Recorded Text:", speechTranscript); // Log the transcribed text to the console
        recognition.stop(); // Stop the recognition process
      };
  
      recognition.onerror = (event) => {
        console.error("Speech recognition error", event.error); // Log any errors
      };
    } catch (error) {
      console.error("Error accessing speech recognition:", error); // Log error if speech recognition is not accessible
    }
  };
  

// This function could be called after receiving the API response
const sendToFIRBackend = async (apiResponse) => {
  if (apiResponse.prediction === 'sober') {
    try {
      const response = await fetch('/api/submitForm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          complaintFor,
          complaintType,
          location,
          dateTime,
          complaintDetails,
          revealIdentity,
          identityInfo,
          apiCondition: apiResponse.prediction, // Ensure this matches the API response structure
        }),
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Data successfully sent to the backend:', result);
        // Clear the form or inform the user here
      } else {
        console.error('Failed to send data to the backend. HTTP status:', response.status);
      }
    } catch (error) {
      console.error('Error sending data to the backend:', error);
    }
  } else {
    window.prompt('Prediction does not meet required condition. No action taken.');
  }
};
const prediction = apiResponse?.prediction || '';


  return (
    <div className="flex bg-gray-900 h-full">
      <Sidebar />
      <div
        className={`container mx-auto p-8 ${showWebcam ? "w-3/4" : "w-full"}`}
      >
        <h1 className="text-3xl font-bold mb-6 text-white">Raise FIR</h1>
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto h-3/4">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600 ">
              Complaint For
            </label>
            <input
              type="text"
              value={complaintFor}
              onChange={(e) => setComplaintFor(e.target.value)}
              className="w-full p-2 border rounded focus:outline-none focus:border-blue-500 text-black"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">
              Complaint Type
            </label>
            <select
              value={complaintType}
              onChange={(e) => setComplaintType(e.target.value)}
              className="w-full p-2 border rounded focus:outline-none focus:border-blue-500 text-black"
              required
            >
              <option value="">Select Type</option>
              <option value="Assault">Assault</option>
              <option value="Robbery">Robbery</option>={" "}
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">
              Location (Pincode)
            </label>
            <input
              type="number"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full p-2 border rounded focus:outline-none focus:border-blue-500 text-black"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">
              Date and Time
            </label>
            <input
              type="datetime-local"
              value={dateTime}
              onChange={(e) => setDateTime(e.target.value)}
              className="text-black w-full p-2 border rounded focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">
              Relevant Images or Videos
            </label>
            <input
              type="file"
              accept="image/*,video/*"
              onChange={handleImageChange}
              className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">
              Details of the Complaint
            </label>
            <textarea
              value={complaintDetails}
              onChange={(e) => setComplaintDetails(e.target.value)}
              className="text-black w-full p-2 border rounded focus:outline-none focus:border-blue-500"
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">
              Identity to be Revealed?
            </label>
            <input
              type="checkbox"
              checked={revealIdentity}
              onChange={() => setRevealIdentity(!revealIdentity)}
            />
          </div>
          {revealIdentity && (
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">
                Identity Information
              </label>
              <div className="flex flex-col space-y-2">
                <input
                  type="text"
                  placeholder="Name"
                  value={identityInfo.name}
                  onChange={(e) =>
                    setIdentityInfo({ ...identityInfo, name: e.target.value })
                  }
                  className="text-black p-2 border rounded focus:outline-none focus:border-blue-500"
                  required
                />
                <input
                  type="text"
                  placeholder="Contact Number"
                  value={identityInfo.contactNumber}
                  onChange={(e) =>
                    setIdentityInfo({
                      ...identityInfo,
                      contactNumber: e.target.value,
                    })
                  }
                  className="text-black p-2 border rounded focus:outline-none focus:border-blue-500"
                  required
                />
                <input
                  type="text"
                  placeholder="Address"
                  value={identityInfo.address}
                  onChange={(e) =>
                    setIdentityInfo({
                      ...identityInfo,
                      address: e.target.value,
                    })
                  }
                  className="text-black p-2 border rounded focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
            </div>
          )}
          <div className="flex flex-row justify-center mt-4">
  <button
    type="submit"
    className="px-4 py-2 mx-2 bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded hover:bg-gradient-to-r hover:from-blue-600 hover:to-teal-600"
  >
    Submit FIR
  </button>
  <button
    onClick={speechToText} // Trigger the speech to text function
    className="px-4 mx-2 bg-blue-500 text-white rounded hover:bg-blue-600"
  >
    Speech to Text
  </button>
  <div className=" text-align: center;">
        <button onClick={captureImage} className="text-align: center px-4 py-2  bg-blue-500 text-white rounded hover:bg-blue-700 mt-4">
              Capture Image
            </button>
            <button
            type="submit"
            className="text-align: center px-4 m-5 py-2 bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded hover:bg-gradient-to-r hover:from-blue-600 hover:to-teal-600"
                  onClick={() => sendToFIRBackend(apiResponse)}
          >
            Submit FIR
          </button>
        </div>
        <div>
        <video ref={videoRef} autoPlay playsInline className="w-11/12 border rounded"></video>
        </div>
</div>
        </form>
        
                {/* Display API response */}
                <div className={`fixed inset-x-0 bottom-0 transform transition-transform ${showPopup ? 'translate-y-0' : 'translate-y-full'} ease-out duration-300 bg-black bg-opacity-80 p-4`}>
  {apiResponse && (
    <div>
      <h2 className="text-xl font-semibold mb-2">Prediction Result:</h2>
      <p className={`text-lg font-semibold ${prediction === 'sober' ? 'text-green-500' : 'text-red-500'}`}>
        {prediction.toUpperCase()}
      </p>
    </div>
  )}
</div>

      </div>
    </div>
  );
};

export default RaiseFIR;
