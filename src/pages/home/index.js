// ** MUI Import
import Grid from '@mui/material/Grid'
import { Button } from '@mui/material'

// ** Components Import
import Card from '../../@core/components/card/index'
import ChooseMenu from '../../@core/components/chooseMenu/index'
import Layout from './Layout'

// ** Next Import
import Link from 'next/link'
import { useSettings } from '../../@core/hooks/useSettings'
import { useEffect } from 'react'

const Home = () => {
  const type = ['Aprtment', 'Studio', 'Hostel']
  const twon = ['Alexandria', 'Quds', 'Riyadh']
  const country = ['Egypt', 'Palestine', 'Saudi Arabia']

  const { settings, handlePageTitle } = useSettings()
  useEffect(() => {
    handlePageTitle('')
  }, [handlePageTitle, settings.direction])

  return (
    <Layout>
      <Grid container gap={1} sx={{ direction: 'ltr' }}>
        <Grid
          item
          xs={12}
          gap={1}
          sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '10px' }}
          className='justify-start'
        >
          <Grid item xs={8} sm={5} md={3}>
            <ChooseMenu
              placeholder={settings.direction === 'rtl' ? 'النوع' : 'Type'}
              values={type}
              mode={settings.mode}
            />
          </Grid>
          <Grid item xs={8} sm={5} md={3}>
            <ChooseMenu
              placeholder={settings.direction === 'rtl' ? 'المدينة' : 'Twon'}
              values={twon}
              mode={settings.mode}
            />
          </Grid>
          <Grid item xs={8} sm={5} md={3}>
            <ChooseMenu
              placeholder={settings.direction === 'rtl' ? 'الدولة' : 'Country'}
              values={country}
              mode={settings.mode}
            />
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Link href={'/home/units'} style={{ padding: '0', textDecoration: 'none' }}>
            <Card mode={settings.mode} />
          </Link>
        </Grid>
      </Grid>
    </Layout>
  )
}

export default Home
