import React from "react";

//actually a naming mismatch
const ChatBox = ({ text, username, handleTextChange }) => (
  <div>
    <div className="row">
      <div className="col-xs--12">
        <div className="my-5">
          <div className="col-xs-5 col-xs-offset-3">
            <input
              type="text"
              value={text}
              placeholder="Chat here.."
              className="form-control"
              onChange={handleTextChange}
              onKeyDown={handleTextChange}
            />
          </div>
          <div className="clearfix"></div>
        </div>
      </div>
      <h4 className="mt-12 text-center">Hello,{username}</h4>
    </div>
  </div>
);

export default ChatBox;
