import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import classes from "./styles.module.css";

export default function Dropdown({ handleRandomizeLineData }) {
  const [age, setAge] = React.useState("");
  const [date, setDate] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
    handleRandomizeLineData();
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
    handleRandomizeLineData();
  };

  return (
    <div>
      <FormControl sx={{ m: 0, minWidth: 120 }}>
        <Select
          value={age}
          onChange={handleChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
          className={classes.dropdown}
        >
          <MenuItem value="">Manage</MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ m: 0, minWidth: 120 }}>
        <Select
          value={date}
          onChange={handleDateChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
          className={classes.dropdown}
        >
          <MenuItem value="">Manage</MenuItem>
          <MenuItem value={0o1}>January</MenuItem>
          <MenuItem value={0o2}>February</MenuItem>
          <MenuItem value={0o3}>March</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
