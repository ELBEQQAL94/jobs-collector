import moment from "moment";

const JobAccordion = ({ job }) => {
  return (
    <div className="card my-4">
      <div className="card-header">
        <h2>{job?.title}</h2>
        <div>
          <span className="mr-2">{job.company}</span>
          <span>{job?.location}</span>
        </div>
      </div>
      <div className="card-body">
        <p className="card-text">
        {job?.description}
        </p>
        <div className="mb-4">
          {job?.skills.map((skill, index) => (
            <span className="badge bg-primary mr-2" key={index}>{skill}</span>
          ))}
          
        </div>
        <div className="d-flex justify-content-between">
          <a href={job?.url} target="_blank" rel="noreferrer" className="btn btn-success">
            Apply
          </a>
          <p>{moment(job?.date, "YYYYMMDD").fromNow()}</p>
        </div>
      </div>
    </div>
  );
};

export default JobAccordion;
