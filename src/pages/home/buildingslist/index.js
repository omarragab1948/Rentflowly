import React, { useEffect, useState } from 'react'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'
import { Grid } from '@mui/material'
import { useRouter } from 'next/router'
import image from '/public/images/pages/building.svg'
import Image from 'next/image'
import { useSettings } from 'src/@core/hooks/useSettings'
import { Box } from '@mui/system'
import Layout from './Layout'

const Table = () => {
  const data = [
    { id: 1, type: 'House', status: 'Sold', area: 1500, image: image },
    {
      id: 2,
      type: 'Apartment',
      status: 'Rented',
      area: 1000,
      image: image
    },
    {
      id: 3,
      type: 'Studio',
      status: 'Available',
      area: 500,
      image: image
    },
    {
      id: 4,
      type: 'Building',
      status: 'Rented',
      area: 4500,
      image: image
    },
    {
      id: 5,
      type: 'House',
      status: 'Sold',
      area: 1500,
      image: image
    },
    {
      id: 6,
      type: 'Apartment',
      status: 'Rented',
      area: 1000,
      image: image
    },
    {
      id: 7,
      type: 'Studio',
      status: 'Available ',
      area: 500,
      image: image
    },
    {
      id: 8,
      type: 'Building',
      status: 'Available',
      area: 4500,
      image: image
    }
  ]
  const { settings, handlePageTitle } = useSettings()
  const mode = settings.mode
  useEffect(() => {
    const pageTitle = settings.direction === 'rtl' ? 'ادارة الوحدات' : 'Unit management'
    handlePageTitle(pageTitle)
  }, [handlePageTitle, settings.direction])

  const [selectedRows, setSelectedRows] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const rowsPerPage = 5
  const router = useRouter()

  const handleCheckboxChange = id => {
    const newSelectedRows = selectedRows.includes(id)
      ? selectedRows.filter(rowId => rowId !== id)
      : [...selectedRows, id]
    setSelectedRows(newSelectedRows)
  }

  const indexOfLastRow = currentPage * rowsPerPage
  const indexOfFirstRow = indexOfLastRow - rowsPerPage
  const currentRows = data.slice(indexOfFirstRow, indexOfLastRow)

  const isAllRowsSelected = selectedRows.length === currentRows.length

  const handlePageChange = page => {
    setCurrentPage(page)
  }

  const handleNextPage = () => {
    setCurrentPage(prevPage => prevPage + 1)
  }

  const handlePrevPage = () => {
    setCurrentPage(prevPage => prevPage - 1)
  }

  const handleRoute = id => {
    router.push(`/home/buildingslist/editebuilding/${id}`)
  }

  const getStatusColor = status => {
    switch (status) {
      case 'Sold':
        return 'red'
      case 'Rented':
        return 'orange'
      case 'Available':
        return 'green'
      default:
        return '#6F7885' // Default color for other statuses
    }
  }

  return (
    <Layout>
      <Grid xs={12} lg={10} sx={{ overflowX: 'auto' }}>
        <Box
          sx={{
            boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.05)',
            padding: '10px',
            borderRadius: '10px',
            width: { xs: '1000px', md: 'auto' }
          }}
        >
          <table style={{ borderCollapse: 'collapse', width: '100%' }}>
            <thead>
              <tr>
                <th style={{ padding: '8px', textAlign: 'left' }}>
                  <input
                    type='checkbox'
                    onChange={() => setSelectedRows(isAllRowsSelected ? [] : currentRows.map(row => row.id))}
                    checked={isAllRowsSelected}
                  />
                </th>
                <th
                  style={{
                    padding: '8px',
                    textAlign: 'left',
                    fontSize: '14px',
                    color: mode === 'dark' ? 'rgba(208, 212, 241, 0.78)' : '#4B465C',
                    fontWeight: '600'
                  }}
                >
                  KIND
                </th>
                <th
                  style={{
                    padding: '8px',
                    textAlign: 'left',
                    fontSize: '14px',
                    color: mode === 'dark' ? 'rgba(208, 212, 241, 0.78)' : '#4B465C',
                    fontWeight: '600'
                  }}
                >
                  STATUS
                </th>
                <th
                  style={{
                    padding: '8px',
                    textAlign: 'left',
                    fontSize: '14px',
                    color: mode === 'dark' ? 'rgba(208, 212, 241, 0.78)' : '#4B465C',
                    fontWeight: '600'
                  }}
                >
                  AREA
                </th>
                <th
                  style={{
                    padding: '8px',
                    textAlign: 'left',
                    fontSize: '14px',
                    color: mode === 'dark' ? 'rgba(208, 212, 241, 0.78)' : '#4B465C',
                    fontWeight: '600'
                  }}
                >
                  IMAGE
                </th>
              </tr>
            </thead>
            <tbody>
              {currentRows.map(row => (
                <tr
                  className='hover-row'
                  key={row.id}
                  style={{
                    borderTop: '1px solid #ddd',
                    borderBottom: '1px solid #ddd',
                    cursor: 'pointer',
                    transition: '200ms'
                  }}
                >
                  <td style={{ padding: '8px', textAlign: 'left' }}>
                    <input
                      type='checkbox'
                      onChange={() => handleCheckboxChange(row.id)}
                      checked={selectedRows.includes(row.id)}
                    />
                  </td>
                  <td
                    style={{ padding: '8px', display: 'flex', alignItems: 'center' }}
                    onClick={() => handleRoute(row.id)}
                  >
                    <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '5px' }}>
                      <h3
                        style={{
                          color: mode === 'dark' ? 'rgba(208, 212, 241, 0.78)' : '#4B465C',
                          fontSize: '18px',
                          fontWeight: '700',
                          margin: '0'
                        }}
                      >
                        {row.type}
                      </h3>
                    </div>
                  </td>
                  <td
                    style={{
                      padding: '8px',
                      textAlign: 'left',
                      fontSize: '18px',
                      fontWeight: '400',
                      color: getStatusColor(row.status), // Call a function to determine the color
                      cursor: 'pointer' // Add cursor style for better UX
                    }}
                    onClick={() => handleRoute(row.id)}
                  >
                    {row.status}
                  </td>

                  <td
                    style={{ padding: '8px', textAlign: 'left', color: '#6F7885', fontSize: '18px', fontWeight: '400' }}
                    onClick={() => handleRoute(row.id)}
                  >
                    {row.area} m<sup>2</sup>
                  </td>
                  <td
                    style={{
                      padding: '8px',
                      textAlign: 'left',
                      color: '#6F7885',
                      fontSize: '18px',
                      fontWeight: '400',
                      width: '300px'
                    }}
                    onClick={() => handleRoute(row.id)}
                  >
                    <Image src={row.image} alt='image' style={{ width: '100%', height: '100%' }} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Box>
        <div style={{ textAlign: 'center', marginTop: '10px', display: 'flex', justifyContent: 'center' }}>
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            style={{
              boxShadow: '0px 6px 20px rgba(144, 144, 144, 0.20)',
              border: 'none',
              borderRadius: '100%',
              width: '40px',
              height: '40px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              cursor: 'pointer'
            }}
          >
            <KeyboardArrowLeftIcon />
          </button>
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(data.length / rowsPerPage)}
            onPageChange={handlePageChange}
          />
          <button
            onClick={handleNextPage}
            disabled={currentPage === Math.ceil(data.length / rowsPerPage)}
            style={{
              boxShadow: '0px 6px 20px rgba(144, 144, 144, 0.20)',
              border: 'none',
              borderRadius: '100%',
              width: '40px',
              height: '40px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              cursor: 'pointer'
            }}
          >
            <KeyboardArrowRightIcon />
          </button>
        </div>
      </Grid>
    </Layout>
  )
}

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const { settings } = useSettings()
  const mode = settings.mode
  const pageNumbers = []

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i)
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', margin: '0 10px' }}>
      {pageNumbers.map(number => (
        <span
          key={number}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '40px',
            height: '40px',
            margin: '2px',
            cursor: 'pointer',
            backgroundColor: currentPage === number ? '#765DA5' : '',
            color: currentPage === number ? '#ffffff' : mode === 'dark' ? '#ffffff' : '#000000',
            borderRadius: '100%'
          }}
          onClick={() => onPageChange(number)}
        >
          {number}
        </span>
      ))}
    </div>
  )
}

export default Table
