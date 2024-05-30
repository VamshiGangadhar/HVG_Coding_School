import React from "react";
import GlobeBackground from "../../components/GlobeBackground/GlobeBackground";

const Home = () => {
  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      <GlobeBackground />
      <div
        className="d-flex justify-content-center flex-column align-items-center mt-5 gap-5 w-60"
        style={{
          height: "100vh",
          position: "relative",
          zIndex: 1,
          paddingLeft: "5vw",
          paddingRight: "5vw",
        }}
      >
        <div className="text-center">
          <h1
            style={{
              color: "#007bff",
              fontSize: "3rem",
              marginBottom: "1rem",
              fontFamily: "Arial, sans-serif",
            }}
          >
            Welcome to
          </h1>
          <h2
            style={{
              color: "#343a40",
              fontSize: "2.5rem",
              fontWeight: "bold",
              fontFamily: "Georgia, serif",
            }}
          >
            HVG Coding School
          </h2>
          <div>
            <p
              style={{
                color: "#555555",
                fontSize: "1.25rem",
                marginTop: "1rem",
                fontFamily: "Verdana, sans-serif",
                lineHeight: "1.6",
              }}
            >
              Unlock your potential with our comprehensive coding courses.
            </p>
            <p
              style={{
                color: "#555555",
                fontSize: "1.25rem",
                fontFamily: "Arial, sans-serif",
                lineHeight: "1.6",
              }}
            >
              Whether you're a beginner or looking to advance your skills, we
              have the right program for you.
            </p>
            <p
              style={{
                color: "#555555",
                fontSize: "1.25rem",
                fontFamily: "Georgia, serif",
                lineHeight: "1.6",
              }}
            >
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
