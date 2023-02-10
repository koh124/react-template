import React from "react";
// 型定義ファイル（.d.ts）があれば.cssのインポートでもエディタ補完が効く
import styles from "../css/App.module.css";
import scss from "../css/scss.module.scss";

const App: React.FC = () => {
  return (
    <div className={scss.blue}>
      <LikeButton />
    </div>
  );
};

function LikeButton(): React.ReactElement {
  const count = 999;
  return <span className={styles.likeButton}>♥ {count}</span>;
}

export default App;
