import {
  Building2,
  MapPin,
  DollarSign,
  ExternalLink,
  Clock3,
} from "lucide-react";

import "../styles/card.css";

export default function JobCard({ job }) {

  const skills =
    job.skills ||
    job.tags ||
    [];

  return (
    <div className="job-card">

      <div className="job-top">

        <div className="company-logo">

          <Building2 size={26} />

        </div>

        <div className="job-info">

          <h3>
            {job.title || "Unknown position"}
          </h3>

          <span>
            {job.company || "Unknown company"}
          </span>

        </div>

      </div>

      <div className="job-meta">

        <div>

          <MapPin size={16} />

          {job.location || "Remote"}

        </div>

        <div>

          <DollarSign size={16} />

          {job.salary || "Not specified"}

        </div>

        <div>

          <Clock3 size={16} />

          {job.posted || "Recently"}

        </div>

      </div>

      {

        skills.length > 0 && (

          <div className="skills">

            {

              skills.slice(0,6).map((skill,index)=>(

                <span key={index}>
                  {skill}
                </span>

              ))

            }

          </div>

        )

      }

      <p className="description">

        {job.description?.slice(0,170)}

      </p>

      <button
        className="open-job"
        onClick={() => window.open(job.url, "_blank")}
      >

        Open Job

        <ExternalLink size={17} />

      </button>

    </div>
  );

}