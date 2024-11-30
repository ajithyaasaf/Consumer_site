import React, { useState } from "react"
import LoanFormModal from "@/components/Service/LoanFormModal"

const LoanOptions = () => {
  const [isModalOpen, setModalOpen] = useState(false)

  const handleLoanClick = () => {
    setModalOpen(true)
  }

  return (
    <div>
      <h3>Select a Loan Type</h3>
      <button onClick={handleLoanClick}>Apply for Loan</button>
      <LoanFormModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        loanType={""}
      />
    </div>
  )
}

export default LoanOptions
