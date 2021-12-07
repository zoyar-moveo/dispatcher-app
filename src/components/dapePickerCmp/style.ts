import styled from "styled-components";

export const DataPickerContainer = styled.div`
  width: 100%100px;
  .react-datepicker {
    font-size: 0.875rem;
    border: none;
    width: -webkit-fill-available;
  }
  .react-datepicker__day--selected,
  .react-datepicker__day--keyboard-selected:hover,
  .react-datepicker__day--in-range,
  .react-datepicker__day--keyboard-selected {
    background-color: "blue";
    color: "white" !important;
  }
  .react-datepicker__day {
    margin: 8px;
    font-weight: 100;
  }
  .react-datepicker__day-name {
    font-weight: 100;
  }
  .react-datepicker__current-month {
    font-weight: 400;
  }
  .react-datepicker__current-month,
  .react-datepicker__day-name,
  .react-datepicker__day {
    color: "purple";
  }
  .react-datepicker__month-container {
    width: -webkit-fill-available;
  }

  .react-datepicker__header {
    border-bottom: 1px solid "grey";
    background: "white";
  }
`;
