import { Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import building from 'public/images/pages/building.svg'
import Card from '../../../@core/components/card/index'
import ChooseMenu from '../../../@core/components/chooseMenu/index'
import Switch from '@mui/material/Switch'
import usePagination from '@mui/material/usePagination'
import { styled } from '@mui/material/styles'
import { useSettings } from 'src/@core/hooks/useSettings'
import { useEffect } from 'react'
import Layout from './Layout'

const Index = () => {
  const kind = ['Aprtment', 'Studio', 'Hostel']
  const { settings, handlePageTitle } = useSettings()
  const mode = settings.mode
  useEffect(() => {
    const pageTitle = settings.direction === 'rtl' ? 'الوحدات' : 'Units'
    handlePageTitle(pageTitle)
  }, [handlePageTitle, settings.direction])

  const List = styled('ul')({
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex'
  })

  const { items } = usePagination({
    count: 5
  })

  return (
    <Layout>
      <Grid container>
        <Grid xs={12}>
          <Box
            sx={{
              backgroundImage: `url(${building.src})`,
              backgroundSize: 'cover',
              width: '100%',
              height: '200px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
              <Typography
                variant='h4'
                sx={{
                  fontSize: '26px',
                  fontWeight: '600',
                  color: mode === 'dark' ? 'rgba(208, 212, 241, 0.78)' : '#4B465C'
                }}
              >
                الوحدات الداخلية
              </Typography>
              <Typography
                variant='h5'
                sx={{
                  fontSize: '20px',
                  fontWeight: '300',
                  color: mode === 'dark' ? 'rgba(208, 212, 241, 0.78)' : '#4B465C'
                }}
              >
                ٧٢٥١ أم المؤمنين خديجة
              </Typography>
              <Typography
                variant='h5'
                sx={{
                  fontSize: '20px',
                  fontWeight: '300',
                  color: mode === 'dark' ? 'rgba(208, 212, 241, 0.78)' : '#4B465C'
                }}
              >
                القاهرة، مصر
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid
          xs={12}
          sx={{
            paddingY: '20px',
            display: ' flex',
            flexDirection: 'column',
            direction: 'rtl',
            alignItems: 'start'
          }}
        >
          <Grid
            container
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              alignItems: 'center'
            }}
          >
            <Grid xs={12} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <ChooseMenu placeholder={settings.direction === 'rtl' ? 'النوع' : 'Type'} values={kind} />
                <Box sx={{ display: 'flex', alignItems: 'center', marginRight: '10px' }}>
                  <Typography
                    sx={{
                      fontSize: '17px',
                      fontWeight: '400',
                      color: '#4B465C',
                      color: mode === 'dark' ? 'rgba(208, 212, 241, 0.78)' : '#4B465C'
                    }}
                  >
                    {settings.direction === 'rtl' ? 'المتاحة فقط' : 'Only available'}
                  </Typography>
                  <Switch />
                </Box>
              </Box>
              <Typography
                sx={{
                  fontSize: '18px',
                  fontWeight: '700',
                  color: '#4B465C',
                  color: mode === 'dark' ? 'rgba(208, 212, 241, 0.78)' : '#4B465C'
                }}
              >
                {settings.direction === 'rtl' ? 'الوحدات' : 'Units'}
              </Typography>
            </Grid>
          </Grid>
          <Grid
            xs={12}
            sx={{
              marginTop: '30px',
              marginX: { xs: 'auto', sm: '0' },
              display: 'flex',
              justifyContent: 'end',
              width: '100%'
            }}
          >
            <Card mode={mode} />
          </Grid>
          <Grid
            xs={12}
            sx={{ display: 'flex', justifyContent: 'center', direction: 'ltr', marginTop: '30px', marginX: 'auto' }}
          >
            <List>
              {items.map(({ page, type, selected, ...item }, index) => {
                let children = null

                if (type === 'start-ellipsis' || type === 'end-ellipsis') {
                  children = '…'
                } else if (type === 'page') {
                  children = (
                    <button
                      type='button'
                      className={selected ? 'mainBg' : 'hoverBg'}
                      style={{
                        fontWeight: selected ? '400' : undefined,
                        padding: '9px 14px',
                        color: !selected && mode !== 'dark' ? '#000000' : '#ffffff',
                        borderRadius: '6px',
                        boxShadow: selected ? '0px 2px 6px 0px rgba(47, 43, 61, 0.14)' : '',
                        border: 'none',
                        cursor: 'pointer',
                        outline: 'none',
                        fontSize: '0.8125rem',
                        height: '38px',
                        minWidth: '38px',
                        transition: '300ms'
                      }}
                      {...item}
                    >
                      {page}
                    </button>
                  )
                } else {
                  children = (
                    <button
                      type='button'
                      {...item}
                      className='hoverBg'
                      style={{
                        fontWeight: selected ? 'bold' : undefined,
                        padding: '9px 15px',
                        border: 'none',
                        cursor: 'pointer',
                        outline: 'none',
                        transition: '300ms',
                        borderRadius: '6px',
                        textTransform: 'capitalize',
                        color: mode === 'dark' ? '#fff' : ''
                      }}
                    >
                      {type}
                    </button>
                  )
                }

                return (
                  <li key={index} style={{ padding: '5px' }}>
                    {children}
                  </li>
                )
              })}
            </List>
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  )
}

export default Index
