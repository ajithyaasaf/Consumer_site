'use client';

import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import blogData from '@/data/blog.json';
import BlogItem from '@/components/Blog/BlogItem';
import HandlePagination from '@/components/Other/HandlePagination';

const LayoutGrid = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const productsPerPage = 9;
  const offset = currentPage * productsPerPage;

  const searchParams = useSearchParams();
  let dataCategory = searchParams.get('category');
  let dataTag = searchParams.get('tag');
  const [category, setCategory] = useState<string | null>(dataCategory);
  const [tag, setTag] = useState<string | null>(dataTag);

  const handleCategory = (category: string) => {
    setCategory((prevCategory) => (prevCategory === category ? null : category));
    setCurrentPage(0);
  };

  const handleTag = (tag: string) => {
    setTag((prevTag) => (prevTag === tag ? null : tag));
    setCurrentPage(0);
  };

  let filteredData = blogData.filter((blog) => {
    let isCategoryMatched = true;
    if (category) {
      isCategoryMatched = blog.category === category;
    }

    let isTagMatched = true;
    if (tag) {
      isTagMatched = blog.tag === tag;
    }

    return isCategoryMatched && isTagMatched;
  });

  if (filteredData.length === 0) {
    filteredData = [
      {
        id: -1,
        category: 'no-data',
        tag: 'no-data',
        title: 'No blogs available',
        date: 'N/A',
        author: 'N/A',
        avatar: '/images/no-avatar.png', // A fallback avatar image
        img: '/images/no-image.png', // A fallback blog image
        desc: 'No blogs match the selected criteria.',
        listImg: [],
        url: '#', // A fallback URL
      },
    ];
  }

  const pageCount = Math.ceil(filteredData.length / productsPerPage);

  if (pageCount === 0) {
    setCurrentPage(0);
  }

  const currentBlogs = filteredData.slice(offset, offset + productsPerPage);

  const handlePageChange = (selected: number) => {
    setCurrentPage(selected);
  };

  return (
    <div className="list-blog lg:py-[100px] sm:py-16 py-10">
      <div className="container">
        <div className="list grid lg:grid-cols-3 sm:grid-cols-2 gap-8">
          {currentBlogs.map((item) =>
            item.id === -1 ? (
              <div key={item.id} className="no-data-blog">
                {item.desc}
              </div>
            ) : (
              <BlogItem key={item.id} data={item} type="grid" />
            )
          )}
        </div>
        {pageCount > 1 && (
          <div className="list-pagination w-full flex items-center justify-center md:mt-10 mt-6">
            <HandlePagination pageCount={pageCount} onPageChange={handlePageChange} />
          </div>
        )}
      </div>
    </div>
  );
};

export default LayoutGrid;
