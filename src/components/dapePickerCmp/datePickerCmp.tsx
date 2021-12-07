import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { DataPickerContainer } from "./style";

const DatePickerCmp: React.FC<{
  updateDateFilter: (start: string, end: string) => void;
}> = (props) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const onChange = (dates: any) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    props.updateDateFilter(start, end);
  };
  return (
    <DataPickerContainer>
      <DatePicker
        selected={startDate}
        onChange={onChange}
        startDate={startDate}
        endDate={endDate}
        selectsRange
        inline
      />
    </DataPickerContainer>
  );
};

export default DatePickerCmp;
