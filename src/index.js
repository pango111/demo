import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// 注释掉 AOS 初始化，因为我们已经注释掉了导入
// AOS.init();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);