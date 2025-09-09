import React from "react";
import logo from "./logo.svg";
const ChartList = ({ chats }) => (
  <ul className="list-none">
    {chats.map((chat) => {
      return (
        <div>
          <div className="row show-grid ">
            <div className="col-xs-12">
              <div className="relative border rounded-none m-5 w-96 table">
                <div
                  key={chat.id}
                  className="bg-white p-5 rounded-r-sm object-right-top"
                >
                  <p>
                    <strong>{chat.username}</strong>
                  </p>
                  <p>{chat.message}</p>
                </div>
                <div className="w-5 h-5 absolute">
                  <img src={logo} className="img-responsive logo" alt="logo" />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    })}
  </ul>
);

export default ChartList;
