import JobCard from "./JobCard";

export default function Message({ message }) {
  if (message.role === "user") {
    return (
      <div className="message user-message">
        <div className="avatar user">U</div>

        <div className="bubble user-bubble">
          {message.content}
        </div>
      </div>
    );
  }

  return (
    <div className="message">

      <div className="avatar ai">
        AI
      </div>

      <div className="assistant-block">

        <div className="assistant-text">

        <>
        <h2 style={{marginBottom:8}}>
        Found {message.jobs.length} matching jobs
        </h2>

        <p
        style={{
            marginBottom:24,
        color:"#94a3b8"
        }}
        >
        These vacancies best match your request.
        </p>
        </>

        </div>

        <div className="job-grid">

          {message.jobs.map((job, index) => (

            <JobCard
              key={index}
              job={job}
            />

          ))}

        </div>

      </div>

    </div>
  );
}