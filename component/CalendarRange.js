

import React, { useState } from "react";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // Main style file
import "react-date-range/dist/theme/default.css"; // Theme

const CalendarRange = ({ selectionRange, setSelectionRange, setSelectDate }) => {
    // State to store the selected date range

    // Function to handle date selection
    const handleSelect = (ranges) => {
        setSelectionRange(ranges.selection);
    };

    return (
        <div className="calendar-overlay">
            <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
            <button class="btn btn-primary" onClick={() => setSelectDate(false)}>Done</button>
        </div>
    );
};

export default CalendarRange;
