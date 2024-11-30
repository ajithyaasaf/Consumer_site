"use client"

import React, { useEffect, useState } from "react"

interface Props {
  classname: string
}

const CounterTwo: React.FC<Props> = ({ classname }) => {
  // Define state to hold the current count values
  const [loanCount, setLoanCount] = useState(0)
  const [currentManCount, setCurrentManCount] = useState(0)

  useEffect(() => {
    const targetLoanCount = 2500
    const targetCurrentManCount = 1200

    // Update frequency (in milliseconds) for smooth counting animation
    const updateInterval = 30

    const loanCounter = setInterval(() => {
      setLoanCount((prevCount) => {
        const newCount = prevCount + 10
        if (newCount >= targetLoanCount) {
          clearInterval(loanCounter)
          return targetLoanCount
        }
        return newCount
      })
    }, updateInterval)

    const currentManCounter = setInterval(() => {
      setCurrentManCount((prevCount) => {
        const newCount = prevCount + 10
        if (newCount >= targetCurrentManCount) {
          clearInterval(currentManCounter)
          return targetCurrentManCount
        }
        return newCount
      })
    }, updateInterval)

    // Clear intervals on component unmount
    return () => {
      clearInterval(loanCounter)
      clearInterval(currentManCounter)
    }
  }, [])

  return (
    <div className="container">
      <div className={`counter-block ${classname}`}>
        <div className="grid xl:grid-cols-2 grid-cols-1 gap-y-8">
          <div className="item">
            <div className="flex flex-col items-center">
              <div className="count-block flex items-center">
                <div className="counter heading3">{loanCount}</div>
                <span className="heading3">+</span>
              </div>
              <div className="body1 text-secondary text-center">
                Successful Loans
              </div>
            </div>
          </div>
          <div className="item">
            <div className="flex flex-col items-center">
              <div className="count-block flex items-center">
                <div className="counter heading3">{currentManCount}</div>
              </div>
              <div className="body1 text-secondary text-center">
                Current Loan
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CounterTwo
