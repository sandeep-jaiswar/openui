import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';

interface DateTimePickerProps {
  selectedDateTime: Date | null;
  onChange: (dateTime: Date | null) => void;
}

const CustomDateTimePicker: React.FC<DateTimePickerProps> = ({ selectedDateTime, onChange }) => {
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const [isTimePickerOpen, setIsTimePickerOpen] = useState(false);

  const handleDateChange = (date: Date | null) => {
    onChange(date);
  };

  const handleTimeChange = (time: string | null) => {
    if (selectedDateTime) {
      const [hours, minutes] = time ? time.split(':') : ['', ''];
      const updatedDateTime = new Date(selectedDateTime);
      updatedDateTime.setHours(Number(hours));
      updatedDateTime.setMinutes(Number(minutes));
      onChange(updatedDateTime);
    }
  };

  return (
    <div className="relative">
      <div className="flex items-center">
        <input
          type="text"
          className="border border-gray-300 px-2 py-1 rounded-md"
          value={selectedDateTime ? selectedDateTime.toLocaleDateString() : ''}
          onFocus={() => setIsDatePickerOpen(true)}
          readOnly
        />
        <input
          type="text"
          className="ml-2 border border-gray-300 px-2 py-1 rounded-md"
          value={selectedDateTime ? selectedDateTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : ''}
          onFocus={() => setIsTimePickerOpen(true)}
          readOnly
        />
      </div>
      {isDatePickerOpen && (
        <div className="absolute z-10">
          <DatePicker selected={selectedDateTime} onChange={handleDateChange} />
        </div>
      )}
      {isTimePickerOpen && (
        <div className="absolute z-10">
          <TimePicker value={selectedDateTime ? selectedDateTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : null} onChange={handleTimeChange} clearIcon={null} />
        </div>
      )}
    </div>
  );
};

export default CustomDateTimePicker;
