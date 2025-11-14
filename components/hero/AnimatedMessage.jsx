import React from "react";
import useTypingEffect from "./hooks/useTypingEffect";

export default function AnimatedMessage({ text, role, isNew }) {
  const isBot = role === "bot";
  const animated = useTypingEffect(isBot && isNew ? text : "", 25, 400);
  const displayText = isBot && isNew ? animated : text;

  const clean = (str = "") =>
    String(str).replace(/undefined/gi, "").replace(/\s+/g, " ").trim();

  const safeText = clean(displayText);

  return (
    <div className={`msg ${role}`}>
      <div
        className="msg-text"
        dangerouslySetInnerHTML={{
          __html: safeText
            .replace(/\n/g, "<br/>")
            .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
            .replace(/\*(.*?)\*/g, "<em>$1</em>")
            .replace(/^- (.*$)/gm, "• $1")
            .replace(/\n•/g, "<br/>•"),
        }}
      />
    </div>
  );
}
