"use client"

import React, { useState } from "react"
import blogData from "@/data/blog.json"
import HandlePagination from "@/components/Other/HandlePagination"
import ReadMore from "@/components/Cases/CaseHistory/ReadMore"
import TopNavOne from "@/components/Header/TopNav/TopNavOne"
import MenuOne from "@/components/Header/Menu/MenuOne"
import Footer from "@/components/Footer/Footer"
import ComplaintForm from "@/components/Cases/complaintform/ComplaintForm"
import Image from "next/image" // Importing Image component from Next.js

const CaseHistoryPage = () => {
  const [currentPage, setCurrentPage] = useState(0)
  const casesPerPage = 3
  const offset = currentPage * casesPerPage
  const pageCount = Math.ceil(blogData.length / casesPerPage)
  const currentCases = blogData.slice(offset, offset + casesPerPage)

  const handlePageChange = (selected: number) => {
    setCurrentPage(selected)
  }

  return (
    <>
      <TopNavOne />
      <MenuOne />
      <div className="case-history lg:py-[100px] sm:py-16 py-10">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-y-10 lg:gap-y-0">
            {/* Case List Section */}
            <div className="w-full lg:w-2/3 lg:pr-[55px]">
              <div className="list flex flex-col gap-y-10">
                {currentCases.map((item) => (
                  <div key={item.id} className="case-item block">
                    <div className="w-full">
                      <div className="bg-img w-full overflow-hidden rounded-2xl">
                        {/* Using Next.js Image component here */}
                        <Image
                          className="w-full h-full object-cover"
                          src={item.img}
                          alt={item.title}
                          layout="responsive" // Makes the image responsive
                          width={1200} // Adjust the width based on your design
                          height={800} // Adjust the height based on your design
                        />
                      </div>

                      <div className="heading6 mt-2">{item.title}</div>
                      <ReadMore content={item.desc} url={item.url ?? "#"} />
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              {pageCount > 1 && (
                <div className="list-pagination w-full flex items-center md:mt-10 mt-6">
                  <HandlePagination
                    pageCount={pageCount}
                    onPageChange={handlePageChange}
                  />
                </div>
              )}
            </div>

            {/* Complaint Form Section */}
            <div className="w-full lg:w-1/3">
              <ComplaintForm />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default CaseHistoryPage
