import LocalizationProvider from "@mui/lab/LocalizationProvider";
// import DateAdapter from "@mui/lab/AdapterDateFns";
import TextField from "@mui/material/TextField";
import DateAdapter from "@mui/lab/AdapterDayjs";
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import {useState} from "react";

export default function Calendar() {

    const [value, setValue] = useState(new Date());

    const handleChange = (newValue) => {
        setValue(newValue);
      };
  return (
    <div>
      <LocalizationProvider dateAdapter={DateAdapter}>
        <DesktopDatePicker
          label="Date desktop"
          inputFormat="MM/DD/YYYY"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    </div>
  );
}
