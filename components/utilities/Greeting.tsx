import React from "react";

const Greeting = () => {
  const currentHour = new Date().getHours();
  let greetingMessage = "";
  if (currentHour < 12) {
    greetingMessage = "Good Morning!";
  } else if (currentHour < 18) {
    greetingMessage = "Good Afternoon!";
  } else {
    greetingMessage = "Good Evening!";
  }

  return (
    <div className="flex flex-col">
      <span>Hi,</span>
      <span>{greetingMessage}</span>
    </div>
  );
};

export default Greeting;
