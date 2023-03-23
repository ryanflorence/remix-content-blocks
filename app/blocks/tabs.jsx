import { useState } from "react";

export default function Tabs({ tabs }) {
  let [activeIndex, setIndex] = useState(0);
  return (
    <div>
      <ul>
        {tabs.map((tab, index) => (
          <li key={index}>
            <button onClick={() => setIndex(index)}>{tab.title}</button>
          </li>
        ))}
      </ul>
      {tabs.map((tab, index) => (
        <div key={index} hidden={index !== activeIndex}>
          {tab.content}
        </div>
      ))}
    </div>
  );
}
