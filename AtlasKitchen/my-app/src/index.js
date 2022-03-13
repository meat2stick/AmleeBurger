import React from 'react';
import { render } from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import Menu from './component/Menu';

const App = () => {
  return (
    <div className="bg-orange-50 bg-opacity-10 ">
      <div className='flex justify-center'>
        <div className='max-w-6xl'>
          <Menu />
        </div>
      </div>
    </div>
  );
};

render(<App />, document.getElementById('root'));