import React, { useState, useRef, useEffect } from "react";
import Social from "../Social";
import ReactTyped from "react-typed";
import Image from "next/image";
import heroImage from "../../public/img/hero/pic.png";
import AnimatedMessage from "./AnimatedMessage";

// 👉 UPDATE this to your deployed backend URL
const API_BASE = "http://127.0.0.1:8000";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef(null);

  // ✅ Load messages + thread ID from localStorage
  const [messages, setMessages] = useState(() => {
    if (typeof window !== "undefined") {
      const savedMessages = localStorage.getItem("chat_history");
      const savedThread = localStorage.getItem("thread_id");
      if (savedMessages) {
        return JSON.parse(savedMessages).map((m) => ({ ...m, isNew: false }));
      }
    }
    return [];
  });

  const [threadId, setThreadId] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("thread_id") || null;
    }
    return null;
  });

  // 🧩 Persist messages and thread ID
  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem(
        "chat_history",
        JSON.stringify(messages.map((m) => ({ role: m.role, text: m.text })))
      );
    }
  }, [messages]);

  useEffect(() => {
    if (threadId) {
      localStorage.setItem("thread_id", threadId);
    }
  }, [threadId]);

  // 🧹 Clear chat + reset memory
  const clearChat = () => {
    setMessages([
      {
        role: "bot",
        text: "👋 Hello! I’m ShadowClone AI, Prajwal’s virtual assistant. You can ask me anything about his background, experience, projects, skills, or interests.",
        isNew: false,
      },
    ]);
    setThreadId(null);
    localStorage.removeItem("chat_history");
    localStorage.removeItem("thread_id");
  };

  // 🧭 Auto-scroll
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  // 👋 Initial greeting when chat opens for the first time
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const greeting = {
        role: "bot",
        text: "👋 Hello! I’m ShadowClone AI, Prajwal’s virtual assistant. You can ask me anything about his background, experience, projects, skills, or interests.",
        isNew: false,
      };
      setMessages([greeting]);
    }
  }, [isOpen]);

  // ✉️ Send Message (with persistent memory)
  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = { role: "user", text: input };
    setMessages((msgs) => [...msgs, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch(`${API_BASE}/ask`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: input, thread_id: threadId }), // ✅ send existing thread ID
      });

      const data = await res.json();
      const botText = (data?.answer || "").replace(/undefined/gi, "").trim();

      // ✅ Save thread_id if backend returns one (new conversation)
      if (data?.thread_id && data.thread_id !== threadId) {
        setThreadId(data.thread_id);
        localStorage.setItem("thread_id", data.thread_id);
      }

      setMessages((msgs) => [
        ...msgs,
        { role: "bot", text: botText, isNew: true },
      ]);
    } catch (e) {
      setMessages((msgs) => [
        ...msgs,
        { role: "bot", text: "⚠️  Error connecting to server.", isNew: true },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="edina_tm_hero" id="home">
      <div className="content">
        {/* Hero Section */}
        <div className="img-shape" data-aos="fade-up" data-aos-duration="1200">
          <Image src={heroImage} alt="brand" />
        </div>

        <div className="extra">
          <h5 data-aos="fade-up" data-aos-duration="1200" data-aos-delay="100">
            Hello, I&apos;m Prajwal Tidke
          </h5>
          <h1
            className="name"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="200"
          >
            <span className="typer-toper">
              <ReactTyped
                loop
                typeSpeed={150}
                backSpeed={60}
                strings={[
                  "Data Engineer",
                  "ML/AI Researcher",
                  "Student",
                  "Photographer",
                ]}
                smartBackspace
                backDelay={1}
                showCursor
                cursorChar="|"
              />
            </span>
          </h1>
          <p
            className="text"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="300"
          >
            I’m a product-focused data engineer and ML researcher, crafting
            intelligent, scalable digital solutions for 4+ years across
            analytics, automation, and deep learning.
          </p>

          <div
            className="social"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="400"
          >
            <Social />
          </div>
        </div>

        {/* ✨ Buttons */}
        <div
          className="edina_tm_button"
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay="500"
        >
          <a href="/img/Prajwal_Resume_DS.pdf" download className="color">
            Download CV
          </a>
        </div>

        <button
          onClick={() => setIsOpen(true)}
          className="glow-button"
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay="600"
        >
          <span>Ask AI about Prajwal</span>
        </button>

        {/* 🪟 Modal Chat */}
        {isOpen && (
          <div className="chat-modal-overlay" onClick={() => setIsOpen(false)}>
            <div className="chat-modal" onClick={(e) => e.stopPropagation()}>
              <div className="chat-header">
                <h5>ShadowClone AI</h5>
                <div
                  style={{ display: "flex", gap: "10px", alignItems: "center" }}
                >
                  <button
                    onClick={clearChat}
                    style={{
                      background: "transparent",
                      border: "none",
                      color: "white",
                      fontSize: "0.85rem",
                      cursor: "pointer",
                    }}
                  >
                    Clear Chat
                  </button>
                  <button
                    onClick={() => setIsOpen(false)}
                    style={{
                      background: "transparent",
                      border: "none",
                      color: "white",
                      fontSize: "1.2rem",
                      cursor: "pointer",
                    }}
                  >
                    ✕
                  </button>
                </div>
              </div>

              <div className="chat-body">
                {messages.map((m, i) => (
                  <AnimatedMessage
                    key={i}
                    text={m.text}
                    role={m.role}
                    isNew={m.isNew}
                  />
                ))}

                {loading && (
                  <div className="msg bot typing">
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                  </div>
                )}
                <div ref={chatEndRef}></div>
              </div>

              <div className="chat-input">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                  placeholder="Ask me about my work..."
                />
                <button onClick={sendMessage} disabled={loading}>
                  Send
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
