import { useForm } from "react-hook-form";

function CourseForm() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log("--- Form Submission ---");
    console.log("Student Name:", data.studentName);
    console.log("Course Name:", data.courseName);
    alert("Form submitted! Check console.");
    reset();
  };

  return (
    <div className="card shadow-sm mt-4">
      <div className="card-body p-4">
        <h4 className="mb-3">Course Registration Form</h4>
        <form onSubmit={handleSubmit(onSubmit)}>
          
          <div className="mb-3">
            <label className="form-label">Student Name</label>
            <input 
              type="text" 
              className="form-control" 
              {...register("studentName", { required: "Student name is required" })} 
            />
            {errors.studentName && <p className="text-danger small">{errors.studentName.message}</p>}
          </div>

          <div className="mb-3">
            <label className="form-label">Course Name</label>
            <input 
              type="text" 
              className="form-control" 
              {...register("courseName", { required: "Course name is required" })} 
            />
            {errors.courseName && <p className="text-danger small">{errors.courseName.message}</p>}
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default CourseForm;