import * as React from 'react'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

export default function BasicSelect({ placeholder, values }) {
  const [age, setAge] = React.useState('')

  const handleChange = event => {
    setAge(event.target.value)
  }

  return (
    <Box sx={{ minWidth: 201 }}>
      <FormControl fullWidth>
        <InputLabel id='demo-simple-select-label'>{placeholder}</InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={age}
          label='Age'
          onChange={handleChange}
        >
          <MenuItem value={values[0]} sx={{ fontFamily: 'Public Sans' }}>
            {values[0]}
          </MenuItem>
          <MenuItem value={values[1]} sx={{ fontFamily: 'Public Sans' }}>
            {values[1]}
          </MenuItem>
          <MenuItem value={values[2]} sx={{ fontFamily: 'Public Sans' }}>
            {values[2]}
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  )
}
