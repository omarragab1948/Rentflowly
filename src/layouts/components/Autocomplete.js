// ** React Imports
import { useEffect, useCallback, useRef, useState } from 'react'

// ** Next Imports
import { useRouter } from 'next/router'

// ** MUI Imports
import Box from '@mui/material/Box'

import IconButton from '@mui/material/IconButton'
import useMediaQuery from '@mui/material/useMediaQuery'
import { styled, useTheme } from '@mui/material/styles'

// ** Third Party Imports
import axios from 'axios'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Configs Imports
import { InputBase } from '@mui/material'

const AutocompleteComponent = ({ hidden, settings }) => {
  // ** States
  const [searchValue, setSearchValue] = useState('')

  // ** Hooks & Vars
  const theme = useTheme()
  const router = useRouter()
  const { layout } = settings
  const wrapper = useRef(null)
  const fullScreenDialog = useMediaQuery(theme.breakpoints.down('sm'))

  // Get all data using API
  const handleSearch = useCallback(() => {
    console.log(searchValue)
  }, [searchValue])
  useEffect(() => {
    axios
      .get('/app-bar/search', {
        params: { q: searchValue }
      })
      .then(response => {
        if (response.data && response.data.length) {
        } else {
        }
      })
    handleSearch()
  }, [searchValue, handleSearch])

  const mode = settings.mode

  return (
    <Box
      ref={wrapper}
      sx={{
        display: 'flex',
        alignItems: 'center',
        borderRadius: '6px',
        border: '1px solid #E4D2D2',
        width: '90%',
        justifyContent: 'end'
      }}
    >
      <IconButton sx={{}} onClick={handleSearch}>
        <Icon
          fontSize='1.625rem'
          icon='tabler:search'
          color={mode === 'dark' ? 'rgba(208, 212, 241, 0.78)' : '#4B465C'}
        />
      </IconButton>
      <InputBase
        placeholder={settings.direction === 'ltr' ? 'Search...' : 'ابحث...'}
        value={searchValue}
        onChange={e => setSearchValue(e.target.value)}
        sx={{
          color: mode === 'dark' ? 'rgba(208, 212, 241, 0.78)' : '#4B465C',
          fontSize: '15px',
          fontWeight: '400',
          width: '100%',
          display: 'flex',
          justifyContent: 'end'
        }}
      />
    </Box>
  )
}

export default AutocompleteComponent
