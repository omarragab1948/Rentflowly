// components/UnitsLayout.js
import Head from 'next/head'
import { Box } from '@mui/system'
import { Grid } from '@mui/material'

const UnitsLayout = ({ children }) => {
  return (
    <>
      <Head>
        <meta
          name='description'
          content="Discover a world of architecture and real estate with our diverse collection of buildings. Whether you're looking for a cozy home, a modern apartment, or a spacious commercial property, our listings cater to all. Explore the beauty of construction and find your dream space today."
        />
        <title>Units</title>
      </Head>
      <main style={{ display: 'flex', direction: 'rtl', boxShadow: '0px 4px 18px 0px rgba(47, 43, 61, 0.1)' }}>
        {children}
      </main>
    </>
  )
}

export default UnitsLayout
