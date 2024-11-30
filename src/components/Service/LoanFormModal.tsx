import React, { useState } from "react"
import { initializeApp } from "firebase/app"
import { getDatabase, ref, set } from "firebase/database"

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMOdvQW248_4ul-ciFEEmuOghb4xdS3gs",
  authDomain: "jpfinserv-892e1.firebaseapp.com",
  projectId: "jpfinserv-892e1",
  storageBucket: "jpfinserv-892e1.appspot.com",
  messagingSenderId: "166323272116",
  appId: "1:166323272116:web:f440b4c76307ea463c5ae1",
  databaseURL: "https://jpfinserv-892e1-default-rtdb.firebaseio.com/",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const database = getDatabase(app)

// Define the props interface
interface LoanFormModalProps {
  isOpen: boolean
  onClose: () => void
  loanType: string // Add loanType prop
}

const LoanFormModal: React.FC<LoanFormModalProps> = ({
  isOpen,
  onClose,
  loanType,
}) => {
  const [name, setName] = useState("")
  const [number, setNumber] = useState("")
  const [selectedLoanType, setSelectedLoanType] = useState(loanType)
  const [successMessage, setSuccessMessage] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!name || !number) {
      return // Prevent submission if fields are empty
    }

    const loanData = { name, number, loanType: selectedLoanType }

    // Store the data in Firebase
    const loanRef = ref(database, "loans/" + Date.now()) // Unique key based on timestamp
    set(loanRef, loanData)
      .then(() => {
        setSuccessMessage("Loan information submitted successfully!")
        setName("") // Clear input fields
        setNumber("")
        setSelectedLoanType(loanType) // Reset loan type to initial value

        // Close the modal and clear the success message after 2 seconds
        setTimeout(() => {
          setSuccessMessage("") // Clear success message
          onClose() // Close the modal
        }, 2000) // Close modal after 2 seconds
      })
      .catch((error) => {
        console.error("Error storing data: ", error)
      })
  }

  if (!isOpen) return null

  const loanOptions = [
    "Home Loan",
    "Mortgage Loan",
    "BT + Topup",
    "Business Loan",
    "Personal Loan",
    "Vehicle Loan",
    "NRI Loan",
  ]

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Apply for {loanType}</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Your Number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            required
          />
          <select
            value={selectedLoanType}
            onChange={(e) => setSelectedLoanType(e.target.value)}
            required
          >
            {loanOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <button type="submit">Submit</button>
          <button type="button" onClick={onClose}>
            Close
          </button>
        </form>
        {successMessage && (
          <div style={{ color: "green", marginTop: "10px" }}>
            {successMessage}
          </div>
        )}
      </div>
    </div>
  )
}

export default LoanFormModal
