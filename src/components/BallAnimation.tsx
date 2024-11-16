"use client"

import React, { useState } from "react"
import ComplaintForm from "@/components/Cases/complaintform/ComplaintForm"

const BallAnimation: React.FC = () => {
  const [isFormVisible, setIsFormVisible] = useState(false)

  const toggleFormVisibility = () => {
    setIsFormVisible((prev) => !prev)
  }

  return (
    <>
      <div
        onClick={toggleFormVisibility}
        className="fixed bottom-8 right-8 w-16 h-16 rounded-full bg-blue-500 shadow-lg hover:bg-blue-600 cursor-pointer z-50 animate-bounce transition-all duration-200 ease-in-out flex items-center justify-center"
      >
        {/* Black dot in the center of the ball */}
        <div className="w-4 h-4 bg-black rounded-full"></div>
      </div>

      {isFormVisible && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-opacity-50 bg-black">
          <div className="relative bg-white rounded-lg p-6 shadow-lg w-full max-w-md">
            <button
              onClick={toggleFormVisibility}
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-800"
            >
              ✕
            </button>

            <ComplaintForm />
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes bounce {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-bounce {
          animation: bounce 1.5s infinite;
        }
      `}</style>
    </>
  )
}

export default BallAnimation
