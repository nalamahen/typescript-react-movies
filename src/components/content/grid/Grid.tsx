import React, { FC } from 'react';
import Rating from '../rating/Rating';

import './Grid.scss';

const Grid: FC = () => {
  const images: any[] = [
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOuLZ-332a3n7Bx0HJhi19tthDoz9OffMGrQ&usqp=CAU',
      rating: 7.5
    },
    {
      url:
        'https://lh3.googleusercontent.com/proxy/iYz7XXRAnAVXvPqY6J7Y2hOfl2qEyunXlkUasRSWAxzB-0jeiWA5pkSDDIrp_MDlAvoArssoJtnfTcEm8gS_83nXfMT8eqmu6vU01ZYbMGuOpuXJFVi2V4pTMAnl0zhsoojOHNCRW0zrOjs8u7VGQ_ama_6zjhJzEEodVHxRoMlbfAcwW0_UA_DaWn4csaPnF9DLHQf6Ap5Xkeqx3n_hjhQANAGwWtXwzktqqw',
      rating: 8.5
    },
    {
      url:
        'https://lh3.googleusercontent.com/proxy/iYz7XXRAnAVXvPqY6J7Y2hOfl2qEyunXlkUasRSWAxzB-0jeiWA5pkSDDIrp_MDlAvoArssoJtnfTcEm8gS_83nXfMT8eqmu6vU01ZYbMGuOpuXJFVi2V4pTMAnl0zhsoojOHNCRW0zrOjs8u7VGQ_ama_6zjhJzEEodVHxRoMlbfAcwW0_UA_DaWn4csaPnF9DLHQf6Ap5Xkeqx3n_hjhQANAGwWtXwzktqqw',
      rating: 7.8
    },
    {
      url:
        'https://lh3.googleusercontent.com/proxy/iYz7XXRAnAVXvPqY6J7Y2hOfl2qEyunXlkUasRSWAxzB-0jeiWA5pkSDDIrp_MDlAvoArssoJtnfTcEm8gS_83nXfMT8eqmu6vU01ZYbMGuOpuXJFVi2V4pTMAnl0zhsoojOHNCRW0zrOjs8u7VGQ_ama_6zjhJzEEodVHxRoMlbfAcwW0_UA_DaWn4csaPnF9DLHQf6Ap5Xkeqx3n_hjhQANAGwWtXwzktqqw',
      rating: 9.7
    },
    {
      url:
        'https://lh3.googleusercontent.com/proxy/iYz7XXRAnAVXvPqY6J7Y2hOfl2qEyunXlkUasRSWAxzB-0jeiWA5pkSDDIrp_MDlAvoArssoJtnfTcEm8gS_83nXfMT8eqmu6vU01ZYbMGuOpuXJFVi2V4pTMAnl0zhsoojOHNCRW0zrOjs8u7VGQ_ama_6zjhJzEEodVHxRoMlbfAcwW0_UA_DaWn4csaPnF9DLHQf6Ap5Xkeqx3n_hjhQANAGwWtXwzktqqw',
      rating: 6.5
    },
    {
      url: 'https://htmlcolorcodes.com/assets/images/html-color-codes-color-tutorials-hero.jpg',
      rating: 8.7
    }
  ];
  return (
    <>
      <div className="grid">
        {images.map((image, i) => (
          <div key={i}>
            <div className="grid-cell" style={{ backgroundImage: `url(${image.url})` }}>
              <div className="grid-read-more">
                <button className="grid-cell-button">read more</button>
              </div>
              <div className="grid-detail">
                <span className="gird-detail-title">Mission Impossible</span>
                <div className="grid-detail-rating">
                  <Rating rating={image.rating} totalStars={10} />
                  &nbsp;&nbsp;
                  <div className="grid-vote-average">{image.rating}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Grid;
