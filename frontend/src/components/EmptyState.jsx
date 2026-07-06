import { Sparkles } from "lucide-react";

export default function EmptyState() {
  return (
    <div className="empty-state">

      <Sparkles size={60} />

      <h1>Welcome to JobHelper</h1>

      <p>

        Search jobs with AI.
        <br />
        Try:

      </p>

      <div className="examples">

        <button>
          Python Backend
        </button>

        <button>
          FastAPI Remote
        </button>

        <button>
          ML Internship
        </button>

      </div>

    </div>
  );
}