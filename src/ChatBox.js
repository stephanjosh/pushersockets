import React from "react";

const ChatBox =  ({ text, userName, handleTextChange }) => (
  <div>
    <div className="row">
      <div className="col-xs--12">
        <div class ="my-12">
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
      <h4 class="mt-9">Hello , {userName}</h4>
    </div>
  </div>
);

export default ChatBox;