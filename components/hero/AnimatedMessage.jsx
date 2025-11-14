import React, { useEffect, useState } from "react";
import useTypingEffect from "./hooks/useTypingEffect";

/**
 * AnimatedMessage component
 * - Restores old messages immediately
 * - Animates only new bot messages
 * - For long messages: animates first 250 chars, then reveals rest instantly
 */
export default function AnimatedMessage({ text = "", role, isNew = false }) {
  const isBot = role === "bot";
  const messageText = String(text || "").trim();

  // ---- initialise displayed text ----
  const [finalText, setFinalText] = useState(messageText);
  const [showRest, setShowRest] = useState(false);

  // skip all animation for restored (old) messages
  const shouldAnimate = isBot && isNew && messageText.length > 0;

  const firstPart = shouldAnimate ? messageText.slice(0, 250) : messageText;
  const rest = shouldAnimate ? messageText.slice(250) : "";

  const animatedPart = useTypingEffect(shouldAnimate ? firstPart : "", 25, 400);

  // when animation finishes, reveal rest
  useEffect(() => {
    if (
      shouldAnimate &&
      animatedPart === firstPart &&
      messageText.length > 250
    ) {
      const t = setTimeout(() => setShowRest(true), 150);
      return () => clearTimeout(t);
    }
  }, [animatedPart, firstPart, messageText, shouldAnimate]);

  useEffect(() => {
    if (!shouldAnimate) {
      // restored or user messages → show full text immediately
      setFinalText(messageText);
    } else {
      setFinalText(showRest ? firstPart + rest : animatedPart);
    }
  }, [showRest, animatedPart, firstPart, rest, shouldAnimate, messageText]);

  // ---- format text (links + markdown) ----
  const formatText = (str = "") => {
    let clean = String(str)
      .replace(/undefined/gi, "")
      .trim();

    // markdown bold/italic
    clean = clean
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
      .replace(/\*(.*?)\*/g, "<em>$1</em>");

    // numbered lists → wrap in a real ordered list
    clean = clean.replace(/(^|\n)(\d+\..*(\n\d+\..*)*)/g, (match) => {
      const items = match
        .trim()
        .split(/\n/)
        .map((line) => line.replace(/^\d+\.\s*/, "").trim())
        .map((text) => `<li>${text}</li>`)
        .join("");
      return `<ol class="numbered-list">${items}</ol>`;
    });

    // bullet lists
    clean = clean.replace(
      /^- (.*)$/gm,
      '<div class="list-item bullet">• $1</div>'
    );

    // newlines → spacing
    clean = clean.replace(/\n{2,}/g, "<br/><br/>").replace(/\n/g, "<br/>");

    // hyperlinks
    clean = clean.replace(
      /(https?:\/\/[^\s]+)/g,
      '<a href="$1" target="_blank" rel="noopener noreferrer" class="chat-link">$1</a>'
    );
    clean = clean.replace(
      /\[([^\]]+)\]\((https?:\/\/[^\s]+)\)/g,
      '<a href="$2" target="_blank" rel="noopener noreferrer" class="chat-link">$1</a>'
    );

    return clean;
  };

  const safeHTML = formatText(finalText);

  return (
    <div className={`msg ${role}`}>
      <div
        className="msg-text"
        dangerouslySetInnerHTML={{ __html: safeHTML }}
      />
    </div>
  );
}
