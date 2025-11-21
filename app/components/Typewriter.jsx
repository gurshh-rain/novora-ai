"use client";

import { useState, useEffect } from "react";

const Typewriter = ({ words, finalWord, typingSpeed = 150, pauseTime = 1000 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let timeout;
    const currentWord = wordIndex < words.length ? words[wordIndex] : finalWord;

    if (!isDeleting && displayedText.length < currentWord.length) {
      // Typing
      setIsTyping(true);
      timeout = setTimeout(() => {
        setDisplayedText(currentWord.slice(0, displayedText.length + 1));
      }, typingSpeed);
    } else if (!isDeleting && displayedText.length === currentWord.length) {
      // Pause at end of word
      setIsTyping(false);
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, pauseTime);
    } else if (isDeleting && displayedText.length > 0 && wordIndex < words.length) {
      // Deleting
      setIsTyping(true);
      timeout = setTimeout(() => {
        setDisplayedText(currentWord.slice(0, displayedText.length - 1));
      }, typingSpeed / 2);
    } else if (isDeleting && displayedText.length === 0) {
      setIsDeleting(false);
      setWordIndex(wordIndex + 1);
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, wordIndex, words, finalWord, typingSpeed, pauseTime]);

  return (
    <h1 className="typewriter">
      {displayedText}
      <span className={`cursor ${isTyping ? "typing" : ""}`}>l</span>
    </h1>
  );
};

export default Typewriter;
