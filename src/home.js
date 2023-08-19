import React from "react";
import { Link } from "react-router-dom";

function Home(props) {
  return (
    <div>
      <ul>
        <li>
          <Link to={"/tooltip"}>ToolTip Example</Link>
        </li>
        <li>
          <Link to={"/flip-example"}>FlipComponent Example</Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;
