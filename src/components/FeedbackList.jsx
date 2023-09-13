import PropTypes from "prop-types";

import FeedbackItem from "./FeedbackItem";
function FeedbackList({ feedback, handleDelete }) {
  if (!feedback || feedback.length === 0) {
    return <div>No Feedback Yet</div>;
  }
  return (
    <div className="feedback-list">
      {feedback.map((item, index) => (
        <FeedbackItem key={index} item={item} handleDelete={handleDelete} />
      ))}
    </div>
  );
}

FeedbackList.propTypes = {
  feedback: PropTypes.array,
  handleDelete: PropTypes.func,
};
export default FeedbackList;
