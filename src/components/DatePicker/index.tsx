import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface DatePickerProps {
  selectedDate: Date | null;
  onChange: (date: Date | null) => void;
}

const CustomDatePicker: React.FC<DatePickerProps> = ({ selectedDate, onChange }) => {
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

  const handleDateChange = (date: Date | null) => {
    onChange(date);
  };

  return (
    <div className="relative">
      <input
        type="text"
        className="border border-gray-300 px-2 py-1 rounded-md"
        value={selectedDate ? selectedDate.toLocaleDateString() : ''}
        onFocus={() => setIsDatePickerOpen(true)}
        readOnly
      />
      {isDatePickerOpen && (
        <div className="absolute z-10">
          <DatePicker selected={selectedDate} onChange={handleDateChange} />
        </div>
      )}
    </div>
  );
};

export default CustomDatePicker;
