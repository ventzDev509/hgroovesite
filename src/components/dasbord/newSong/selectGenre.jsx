import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import  "./css/drop.css"
import { useDataContext_user } from '../../dataProvider/user';
export default function SelectGenre () {
  const {setGenre}=useDataContext_user()
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
    setGenre(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }} className="ds">
      <FormControl fullWidth className='d'>
        <InputLabel id="demo-simple-select-label">Genre</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          placeholder='select Genre'
          className="input"
          onChange={handleChange}
        >
          <MenuItem value={"Rap-Creole"}>Rap-Creole</MenuItem>
          <MenuItem value={"Compas"}>Compas</MenuItem>
          <MenuItem value={"Drill"}>Drill</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
