import React, { useState } from "react";

type ReadMoreTextProps = {
  text: string;
  maxLength?: number; // optional, default if not passed
};

export default function ReadMoreText({ text, maxLength = 200 }: ReadMoreTextProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  const displayText = isExpanded ? text : text.slice(0, maxLength) + (text.length > maxLength ? "..." : "");

  return (
    <div className="text-gray-700 text-md md:text-lg leading-relaxed">
      <p>{displayText}</p>
      {text.length > maxLength && (
        <button
          onClick={toggleReadMore}
          className="text-gray-700 font-medium mt-1 focus:outline-none"
        >
          {isExpanded ? "Read Less" : "Read More"}
        </button>
      )}
    </div>
  );
}
