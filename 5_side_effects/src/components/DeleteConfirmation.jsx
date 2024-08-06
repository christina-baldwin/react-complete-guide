import { useEffect } from "react";
import ProgressBar from "./ProgressBar";

const TIMER = 3000;

// renders the content of the modal
export default function DeleteConfirmation({ onConfirm, onCancel }) {
  useEffect(() => {
    // close modal after 3 seconds
    const timer = setTimeout(() => {
      onConfirm();
    }, TIMER);
    // cleanup function: executed by react before the function runs again and before it leaves the DOM
    return () => {
      clearTimeout(timer);
    };
  }, [onConfirm]);

  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text">
          No
        </button>
        <button onClick={onConfirm} className="button">
          Yes
        </button>
      </div>
      <ProgressBar timer={TIMER} />
    </div>
  );
}
