import React from "react";
import Message from "./Message";
import AlternativeMessage from "./AlternativeMessage";

const messageData = {
    avatar: "https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",
    name: "Artem",
    message: "npm run нажимал?",
    time: "22:00",
};

const altmessageData = {
    avatar: "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png",
    name: "Alex",
    message: "Yes. You are welcome!!!",
    time: "02:00",
};

function HW1() {
  return (
      <div>
        <hr/>
        Homeworks 1

        <Message messageData={messageData}/>

        <hr/>
        {/*для личного творчества, могу проверить*/}
         <AlternativeMessage altmessageData={altmessageData}/>
        <hr/>
      </div>
  );
}

export default HW1;
