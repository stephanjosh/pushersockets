import React from "react";
import logo from "./logo.svg";
const ChartList =  ({chats}) =>(
    <ul class ="list-none">
        {chats.map(chat =>{
            return(
                <div>
                    <div className="row show-grid">
                        <div className="col-xs-12">
                            <div class="relative border rounded-none m-5 w-96">
                                <div key={chat.id} class="bg-white p-5 rounded-r-none">
                                    <p>
                                        <strong>{chat.username}</strong>
                                      </p>
                                    <p>{chat.message}</p>
                                </div>
                                <div class="w-12 h-12 absolute">
                                    <img src={logo} className="img-responsive logo" alt="logo"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })}
    </ul>
)

export default ChartList;