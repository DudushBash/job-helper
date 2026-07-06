import JobCard from "./JobCard";

export default function JobList({ jobs }) {
    return (
        <div className="job-list">
            {jobs.map((job, index) => (
                <JobCard key={index} job={job}/>
            ))}
        </div>
    );
}