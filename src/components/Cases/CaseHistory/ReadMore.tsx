// components/Cases/CaseHistory/ReadMore.tsx

import React, { useState } from "react"

interface ReadMoreProps {
  content: string
  url: string
}

const ReadMore: React.FC<ReadMoreProps> = ({ content, url }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleContent = () => {
    setIsExpanded((prev) => !prev)
  }

  return (
    <div>
      <div className="read-more-content">
        {isExpanded ? content : `${content.substring(0, 150)}...`}
      </div>
      <button
        onClick={toggleContent}
        className="read-more-btn font-bold underline"
      >
        {isExpanded ? "Show Less" : ""}
      </button>
      {!isExpanded && (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold text-blue-600 underline ml-2"
        >
          Read More
        </a>
      )}
    </div>
  )
}

export default ReadMore
