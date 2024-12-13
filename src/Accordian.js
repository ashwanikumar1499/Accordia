import { useState } from "react";

export const Accordian = ({ title, content, isOpen, onAccordianClick }) => {
  return (
    <div className="accordian-item" onClick={onAccordianClick}>
      <div className="accordian-header">
        {title}
        <span>+</span>
      </div>
      {isOpen && <div className="accordian-content">{content}</div>}
    </div>
  );
};
