import React from "react";
import user from "../Food/user.webp"; // Update the path to the user image accordingly

const ProfilePage = () => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mt-10">
      <div className="p-4">
        {/* Header with time and status indicators */}

        {/* Profile Title */}
        <div className="text-center mt-4">
          <h1 className="text-brown-600 font-semibold">Your Profile</h1>
        </div>

        {/* Profile Picture */}
        <div className="flex justify-center mt-4">
          <img
            className="h-24 w-24 rounded-full border-4 border-brown-500"
            src={user} // Use the correct path to your user's profile image
            alt="Profile of Cafe Noor User"
          />
        </div>

        {/* User Information */}
        <div className="text-center mt-4">
          <h2 className="text-xl font-semibold">Michelle Z.</h2>
          <p className="text-gray-500">Coffee Lover ☕</p>
          <p className="text-gray-400">Joined on 13 Jan 2020</p>
        </div>

        {/* Coffee Preferences */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-gray-700">
            Coffee Preferences
          </h3>
          <ul className="list-disc list-inside space-y-2 mt-4">
            <li className="text-gray-700">☕ Favorite Brew: Espresso</li>
            <li className="text-gray-700">☕ Milk Preference: Almond Milk</li>
            <li className="text-gray-700">☕ Sugar: No Sugar</li>
          </ul>
        </div>

        {/* Order History */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-gray-700">Order History</h3>
          <div className="space-y-2 mt-4">
            <div className="p-4 bg-brown-50 rounded-lg shadow-md">
              <div className="flex justify-between">
                <span className="text-gray-700">Espresso</span>
                <span className="text-gray-500">Ordered on 01 Mar 2024</span>
              </div>
            </div>
            <div className="p-4 bg-brown-50 rounded-lg shadow-md">
              <div className="flex justify-between">
                <span className="text-gray-700">Vanilla Latte</span>
                <span className="text-gray-500">Ordered on 15 Apr 2024</span>
              </div>
            </div>
            <div className="p-4 bg-brown-50 rounded-lg shadow-md">
              <div className="flex justify-between">
                <span className="text-gray-700">Mocha Frappe</span>
                <span className="text-gray-500">Ordered on 20 May 2024</span>
              </div>
            </div>
          </div>
        </div>

        {/* User Feedback Section */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-gray-700">Your Feedback</h3>
          <p className="mt-2 text-gray-600">
            "I absolutely love the cozy ambiance at Cafe Noor. The staff is
            friendly, and the coffee is top-notch!"
          </p>
        </div>

        {/* Edit Profile Button */}
        <div className="text-center mt-6">
          <button className="bg-brown-500 hover:bg-brown-700 text-white font-bold py-2 px-4 rounded-full transition duration-300">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
