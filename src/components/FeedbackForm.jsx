import { useState } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";
function FeedbackForm() {
  const [text, setText] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");

  const handleTextChange = (e) => {
    const newText = e.target.value;
    setText(newText);
    if (newText === "") {
      setBtnDisabled(true);
      setMessage(null);
    } else if (newText !== "" && newText.trim().length < 10) {
      setMessage("Text must be atleast 10 characters");
      setBtnDisabled(true);
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }
  };
  return (
    <Card>
      <form>
        <h2>How would you rate your service with us?</h2>
        {/* Rating select component */}
        <div className="input-group">
          <input
            type="text"
            placeholder="Write a review"
            onChange={handleTextChange}
            value={text}
          />
          <Button type="submit" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {<div>{text.length}</div>}
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}

export default FeedbackForm;
