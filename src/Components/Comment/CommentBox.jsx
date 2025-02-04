import React from "react";

const CommentBox = ({setShowComments}) => {
  return (
    <div>
      <h3 className="mb-4 text-xl font-semibold">کامنت‌ها</h3>
      <div className="comment mb-3">
        <p>این یک کامنت نمونه است!</p>
      </div>
      <div className="comment mb-3">
        <p>کامنت بعدی...</p>
      </div>
      <div className="comment mb-3">
        <p>کامنت جدید...</p>
      </div>
      <button
        onClick={() => setShowComments(false)} // برای بستن دراپ‌دان
        className="mt-4 text-red-500"
      >
        بستن
      </button>
    </div>
  );
};

export default CommentBox;
