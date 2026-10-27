import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CourseCard from "../Components/CourseCard";
import CourseForm from "../Components/CourseForm";

function Courses() {
  const navigate = useNavigate(); // Part D

  // Part B & C: State for selection
  const [selectedCourse, setSelectedCourse] = useState("");

  // Part B: Handle select change and print to console
  function handleSelect(e) {
    setSelectedCourse(e.target.value);
    console.log("Selected Course:", e.target.value);
  }

  return (
    <div className="container mt-5">
      
      {/* Part D: Navigation */}
      <button className="btn btn-secondary mb-4" onClick={() => navigate("/")}>
        &larr; Back to Home
      </button>

      <h2 className="mb-4">Courses Page</h2>

      {/* Part A: Props */}
      <h4>Available Courses (Props)</h4>
      <div className="row">
        <div className="col-md-4">
          <CourseCard 
            title="Course 1" 
            name="React Basics" 
            description="Learn the fundamentals of React." 
            duration="4 Weeks" 
          />
        </div>
        <div className="col-md-4">
          <CourseCard 
            title="Course 2" 
            name="Advanced JavaScript" 
            description="Deep dive into JS concepts." 
            duration="6 Weeks" 
          />
        </div>
      </div>

      <hr className="my-5" />

      {/* Part B & C: Select Menu & Conditional Rendering */}
      <h4>Select a Course</h4>
      <select 
        className="form-select mb-3" 
        style={{ maxWidth: "300px" }}
        onChange={handleSelect}
        value={selectedCourse}
      >
        <option value="">-- Choose a Course --</option>
        <option value="React Basics">React Basics</option>
        <option value="Advanced JavaScript">Advanced JavaScript</option>
      </select>

      {/* Part C: Conditional Logic */}
      {selectedCourse === "" ? (
        <p className="text-danger">Please select the course to view course name.</p>
      ) : (
        <p className="text-success fw-bold">You have selected: {selectedCourse}</p>
      )}

      <hr className="my-5" />

      {/* Form Handling */}
      <div style={{ maxWidth: "500px" }}>
        <CourseForm />
      </div>

    </div>
  );
}

export default Courses;