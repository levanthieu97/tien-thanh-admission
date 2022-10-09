import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import { Provider } from "react-redux";
import store from "./reducer";
import Routes from "./pages/routes";
require('./common/Listeners');
const zaloWidget = `<div class="zalo-chat-widget" data-oaid="4233629128719414828" data-welcome-message="Rất vui khi được hỗ trợ bạn!" data-autopopup="0" data-width="400" data-height="600"></div>`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Routes/>
    <div dangerouslySetInnerHTML={{ __html: zaloWidget }} />
  </Provider>
);
