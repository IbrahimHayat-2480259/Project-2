function CourseCard({ title, name, description, duration }) {
  return (
    <div className="card mb-3 shadow-sm">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{name}</h6>
        <p className="card-text">{description}</p>
        <p className="card-text"><small className="text-muted">Duration: {duration}</small></p>
      </div>
    </div>
  );
}

export default CourseCard;