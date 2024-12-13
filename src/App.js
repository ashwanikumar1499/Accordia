import { useState } from "react";
import { Accordian } from "./Accordian";
import "./styles.css";
import { accordionData } from "./utils/const";

export default function App() {
  const [isOpenArr, setIsopenArr] = useState(
    new Array(accordionData.length).fill(0)
  );

  const handleAccordianClick = (index) => {
    const tempArr = [...isOpenArr];

    if (isOpenArr[index]) {
      tempArr[index] = 0;
    } else {
      tempArr.fill(0);
      tempArr[index] = 1;
    }

    setIsopenArr([...tempArr]);
  };

  return (
    <div className="App">
      <div className="accordian">
        {accordionData.map((data, index) => (
          <Accordian
            key={index}
            title={data.title}
            content={data.content}
            isOpen={!!isOpenArr[index]}
            onAccordianClick={() => handleAccordianClick(index)}
          />
        ))}
      </div>
    </div>
  );
}
