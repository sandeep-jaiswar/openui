import React, { useState } from 'react';
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';

interface TimePickerProps {
  selectedTime: string | null;
  onChange: (time: string | null) => void;
}

const CustomTimePicker: React.FC<TimePickerProps> = ({ selectedTime, onChange }) => {
  const [isTimePickerOpen, setIsTimePickerOpen] = useState(false);

  const handleTimeChange = (time: string | null) => {
    onChange(time);
  };

  return (
    <div className="relative">
      <input
        type="text"
        className="border border-gray-300 px-2 py-1 rounded-md"
        value={selectedTime || ''}
        onFocus={() => setIsTimePickerOpen(true)}
        readOnly
      />
      {isTimePickerOpen && (
        <div className="absolute z-10">
          <TimePicker value={selectedTime} onChange={handleTimeChange} clearIcon={null} />
        </div>
      )}
    </div>
  );
};

export default CustomTimePicker;
