import {
  Plus,
  Clock3,
  Briefcase,
  Settings
} from "lucide-react";

import "../styles/sidebar.css";

const history = [
  "Python Backend",
  "FastAPI Junior",
  "ML Internship",
  "Remote Germany",
];

export default function Sidebar() {
  return (
    <aside className="sidebar">

      <div>

        <div className="logo">

          <div className="logo-circle">
            AI
          </div>

          <div>

            <h2>JobHelper</h2>

            <span>AI Search</span>

          </div>

        </div>

        <button className="new-chat">

          <Plus size={18} />

          New Chat

        </button>

        <div className="history-title">

          <Clock3 size={16} />

          Recent Searches

        </div>

        <div className="history">

          {history.map((item, index) => (

            <button
              key={index}
              className="history-item"
            >

              <Briefcase size={16} />

              {item}

            </button>

          ))}

        </div>

      </div>

      <button className="settings">

        <Settings size={18} />

        Settings

      </button>

    </aside>
  );
}