import ReactDOM          from "react-dom/client";
import App               from "./App";
import store             from '/src/store/store';
import { Provider }      from "react-redux";
import { Tema }          from './themes/tema';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
    <Tema>
      <App />
    </Tema>
    </Provider>
);
