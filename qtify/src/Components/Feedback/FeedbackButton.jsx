import React from "react";
import "./Feedbackbutton.css";

const FeedbackButton = ({ onFeedbackButtonClick }) => {
  return (
    <div className="feedback">
      <h3 onClick={onFeedbackButtonClick}>Give FeedBack</h3>
    </div>
  );
};

export default FeedbackButton;
