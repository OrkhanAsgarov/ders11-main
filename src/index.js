import React from 'react';
import ReactDOM from 'react-dom/client';
import C1 from './components/C1';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  < C1 ad="Orhan" soyad="Asgarov" ugurluSayilar={[3,5,8]} />
);


