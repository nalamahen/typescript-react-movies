import React, { FC, useState } from 'react';
import SlideShow from '../slide-show/SlideShow';

import './MainContent.scss';
import Paginate from '../paginate/Paginate';
import Grid from '../grid/Grid';

const MainContent: FC = () => {
  const images: any[] = [
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOuLZ-332a3n7Bx0HJhi19tthDoz9OffMGrQ&usqp=CAU'
    },
    {
      url:
        'https://lh3.googleusercontent.com/proxy/iYz7XXRAnAVXvPqY6J7Y2hOfl2qEyunXlkUasRSWAxzB-0jeiWA5pkSDDIrp_MDlAvoArssoJtnfTcEm8gS_83nXfMT8eqmu6vU01ZYbMGuOpuXJFVi2V4pTMAnl0zhsoojOHNCRW0zrOjs8u7VGQ_ama_6zjhJzEEodVHxRoMlbfAcwW0_UA_DaWn4csaPnF9DLHQf6Ap5Xkeqx3n_hjhQANAGwWtXwzktqqw'
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
      <Grid />
    </div>
  );
};

export default MainContent;
