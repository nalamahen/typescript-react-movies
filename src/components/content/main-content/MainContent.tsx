import React, { FC, useState } from 'react';
import SlideShow from '../slide-show/SlideShow';

import './MainContent.scss';
import Paginate from '../paginate/Paginate';

const MainContent: FC = () => {
  const images: any[] = [
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOuLZ-332a3n7Bx0HJhi19tthDoz9OffMGrQ&usqp=CAU'
    },
    {
      url:
        'https://lh3.googleusercontent.com/proxy/oTJ7mq5IILkmwWz4xai2d8qom5iZla-QUdcYAyE19JGlNMi60gKY23XJTA9JbaqgSdiU1by34DLAb-DkES562uLRI6RPla0ckSA-V2xLGL6_cMICaJRz-M_ugJ6-l-Qo0noC7VjAk9WZOkDxGUaLkoiuAW8LYRQlFUyiEUqne1KhfrLWraZIW6FquHSuvtZ3dqPb6D2GSt55As8FdkYG7biG7wWJchvVtvwPrQ'
    },
    {
      url: 'https://htmlcolorcodes.com/assets/images/html-color-codes-color-tutorials-hero.jpg'
    }
  ];

  const [currentPage, setCurrentPage] = useState<number>(1);

  const paginate = (type: string) => {
    if (type === 'prev' && currentPage >= 1) {
      setCurrentPage((prev) => prev - 1);
    } else {
      setCurrentPage((prev) => prev + 1);
    }
  };

  return (
    <div className="main-content">
      <SlideShow images={images} auto={true} showArrow={true} />
      <div className="grid-moive-title">
        <div className="movie-type"> Now playing</div>
        <div className="paginate">
          <Paginate currentPage={currentPage} totalPages={10} paginate={paginate} />
        </div>
      </div>
      {/* displya grid component */}
    </div>
  );
};

export default MainContent;
