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
        className="fixed bottom-8 right-8 w-24 h-24 rounded-full bg-blue-500 shadow-lg hover:bg-blue-600 cursor-pointer z-50 animate-bounce transition-all duration-200 ease-in-out flex items-center justify-center"
      >
        {/* Text inside the ball */}
        <div className="text-black text-sm font-semibold text-center px-2">
          File a Complaint
        </div>
      </div>

      {isFormVisible && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-opacity-50 bg-black">
          <div className="relative bg-white rounded-lg p-6 shadow-lg w-full max-w-md top-4">
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
