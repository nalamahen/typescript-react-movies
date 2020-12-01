import React, { FC } from 'react';
import MainContent from '../content/main-content/MainContent';

import './Main.scss';

const Main: FC = () => {
  return (
    <div className="main">
      <MainContent />
    </div>
  );
};

export default Main;
