import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import './MyCalender.css'
const MyCalendar = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div>
  
      <Calendar 
        onChange={setStartDate} 
        value={startDate} 
        minDate={new Date()} 
        className="custom-calendar"
      />
    </div>
  );
};

export default MyCalendar;
