import { useState } from "react";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import ChatWindow from "./components/ChatWindow";
import PromptInput from "./components/PromptInput";

import { searchJobs } from "./services/api";

import "./styles/globals.css";
import "./styles/app.css";

export default function App() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  async function handleSearch(prompt) {
    if (!prompt.trim()) return;

    const userMessage = {
      role: "user",
      content: prompt,
    };

    setMessages((prev) => [...prev, userMessage]);

    setLoading(true);

    try {
      const jobs = await searchJobs(prompt);

      const botMessage = {
        role: "assistant",
        jobs,
      };

      setMessages((prev) => [...prev, botMessage]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="app">

        <Sidebar /> 

      <div className="main">

        <Header />  

        <ChatWindow
          messages={messages}
          loading={loading}
        />

        <PromptInput
          onSend={handleSearch}
          disabled={loading}
        />

      </div>

    </div>
  );
}