import React from "react";

const UserDetails = () => {
  // Retrieve user data from local storage
  const userData = JSON.parse(localStorage.getItem("registrationData"));

  return (
    <div className="container mt-5">
      <h2>User Information</h2>
      {userData ? (
        <div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={userData.email}
              readOnly
            />
          </div>
          <div className="mb-3">
            <label htmlFor="first_name" className="form-label">First Name</label>
            <input
              type="text"
              className="form-control"
              id="first_name"
              value={userData.first_name}
              readOnly
            />
          </div>
          <div className="mb-3">
            <label htmlFor="last_name" className="form-label">Last Name</label>
            <input
              type="text"
              className="form-control"
              id="last_name"
              value={userData.last_name}
              readOnly
            />
          </div>
          <div className="mb-3">
            <label htmlFor="age" className="form-label">Age</label>
            <input
              type="number"
              className="form-control"
              id="age"
              value={userData.age}
              readOnly
            />
          </div>
        </div>
      ) : (
        <div>No user data available</div>
      )}
    </div>
  );
};

export default UserDetails;
