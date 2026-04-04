import React, { useState, useRef, useEffect } from "react";
import Social from "../Social";
import ReactTyped from "react-typed";
import Image from "next/image";
import heroImage from "../../public/img/hero/pic.png";
import AnimatedMessage from "./AnimatedMessage";
import TextareaAutosize from "react-textarea-autosize";

// 👉 UPDATE this to your deployed backend URL
// const API_BASE = "http://127.0.0.1:8000";
const API_BASE = "https://portfolio-backend-l8ty.onrender.com";

// Simple ping function to warm up backend
const wakeBackend = async () => {
  try {
    await fetch(`${API_BASE}/ping`, { method: "GET", cache: "no-cache" });
    console.log("✅ Backend wake-up ping sent");
  } catch (err) {
    console.warn("⚠️ Wake-up ping failed:", err);
  }
};

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef(null);
  const inputRef = useRef(null); // 👈 new ref

  useEffect(() => {
    if (isOpen && inputRef.current) {
      // Give browser a moment to render modal before focusing
      setTimeout(() => inputRef.current.focus(), 150);
    }
  }, [isOpen]);

  useEffect(() => {
    // wake backend when the page first loads
    wakeBackend();
  }, []);

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

  const scrollYRef = useRef(0);

  // 🔒 Lock background scroll when modal is open (works on iOS + desktop)
  useEffect(() => {
    if (!isOpen) {
      // restore
      const y = scrollYRef.current || 0;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      window.scrollTo(0, y);
      return;
    }

    // lock
    scrollYRef.current = window.scrollY || window.pageYOffset || 0;
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollYRef.current}px`;
    document.body.style.width = "100%";
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    // cleanup just in case
    return () => {
      const y = scrollYRef.current || 0;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      window.scrollTo(0, y);
    };
  }, [isOpen]);

  // 🧩 Persist messages and thread ID
  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem(
        "chat_history",
        JSON.stringify(messages.map((m) => ({ role: m.role, text: m.text }))),
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

    // 👇 Start wake-up timer
    const wakeMessageTimeout = setTimeout(() => {
      setMessages((msgs) => [
        ...msgs,
        {
          role: "bot",
          text: "⏳ ShadowClone AI is waking up... please wait a few seconds.",
          isNew: false,
        },
      ]);
    }, 7000); // show if backend takes >7 seconds

    try {
      const res = await fetch(`${API_BASE}/ask`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: input, thread_id: threadId }),
      });

      clearTimeout(wakeMessageTimeout);

      const data = await res.json();
      const botText = (data?.answer || "").replace(/undefined/gi, "").trim();

      if (data?.thread_id && data.thread_id !== threadId) {
        setThreadId(data.thread_id);
        localStorage.setItem("thread_id", data.thread_id);
      }

      setMessages((msgs) => [
        ...msgs,
        { role: "bot", text: botText, isNew: true },
      ]);
    } catch (e) {
      clearTimeout(wakeMessageTimeout);
      setMessages((msgs) => [
        ...msgs,
        {
          role: "bot",
          text: "⚠️  Error connecting to ShadowClone AI. Please try again shortly.",
          isNew: false,
        },
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
            <span className="typer-toper" style={{ color: "#BA0C2F" }}>
              <ReactTyped
                loop
                typeSpeed={150}
                backSpeed={60}
                strings={[
                  "Senior Data Engineer",
                  "AI/ML Engineer",
                  "LLM Application Builder",
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
            Senior Data Engineer with 5+ years architecting production ETL systems
            processing 1 TB+ daily across AWS, Databricks, and Snowflake. Currently
            building LLM-powered applications with RAG, fine-tuned models, and
            real-time inference while pursuing MS in Data Science (4.0 GPA) at SDSU.
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
          <a href="/img/Prajwal_Tidke_Resume.pdf" download className="color">
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
                <TextareaAutosize
                  ref={inputRef} // 👈 add this
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      sendMessage();
                    }
                  }}
                  placeholder="Ask me about Prajwal..."
                  minRows={1}
                  maxRows={6}
                  className="chat-textarea"
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
