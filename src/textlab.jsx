// 最大组件的入口文件，用于挂到html的挂载点上
// 代码执行顺序应该是html——>入口文件——>组件
import { createRoot } from "react-dom/client";
import TextLabPage from "./components/TextLabPage.jsx";

import "./css/reset.css";
import "./css/variables.css";
import "./css/layout.css";
import "./css/hero.css";
import "./css/nav.css";
import "./css/cards.css";
import "./css/lab.css";
import "./css/responsive.css";

createRoot(document.getElementById("root")).render(
  <div className="app-shell">
    <div className="page-shell">
      <main className="page-content">
        <TextLabPage current="textlab" onNavigate={() => {}} />
      </main>
    </div>
  </div>,
);
