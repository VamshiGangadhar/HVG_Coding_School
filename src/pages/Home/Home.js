import React from "react";
import GlobeBackground from "../../components/GlobeBackground/GlobeBackground";

const Home = () => {
  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      <GlobeBackground />
      <div
        className="d-flex justify-content-left mt-5 gap-5  w-60"
        style={{
          height: "100vh",
          position: "relative",
          zIndex: 1,
          paddingLeft: "30vh",
          marginTop: "30vh",
        }}
      >
        <div className="d-flex flex-column text-center pt-5 mt-5">
          <h1
            style={{ color: "#007bff", fontSize: "3rem", marginBottom: "1rem" }}
          >
            Welcome to
          </h1>
          <h2
            style={{ color: "#343a40", fontSize: "2.5rem", fontWeight: "bold" }}
          >
            HVG Coding School
          </h2>
          <div>
            <p
              style={{
                color: "#555555",
                fontSize: "1.25rem",
                marginTop: "1rem",
              }}
            >
              Unlock your potential with our comprehensive coding courses.
            </p>
            <p style={{ color: "#555555", fontSize: "1.25rem" }}>
              Whether you're a beginner or looking to advance your skills, we
              have the right program for you.
            </p>
            <p style={{ color: "#555555", fontSize: "1.25rem" }}>
              Join us and start your journey towards becoming a proficient coder
              today!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
