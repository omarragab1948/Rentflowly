// pages/units.js
// Import React and useEffect from React
import React, { useEffect } from 'react'

// Import necessary components and styles from Material-UI
import UnitsLayout from './Layout'
import { Box } from '@mui/system'
import { Button, Grid } from '@mui/material'
import Typography from '@mui/material/Typography'

// Import images using Next.js Image component
import Image from 'next/image'
import cardImage1 from 'public/images/pages/Carousel.svg'
import cardImage2 from 'public/images/pages/most-expensive-houses-in-the-world-reviews-luxe-digital.jpg'
import cardImage3 from 'public/images/pages/white-modern-house-curved-patio-archway-c0a4a3b3-aa51b24d14d0464ea15d36e05aa85ac9.jpg'

// Import Carousel component from 'react-material-ui-carousel'
import Carousel from 'react-material-ui-carousel'

// Import icons using Next.js Image component
import bed from '/public/images/icons/project-icons/bed (1).svg'
import bath from '/public/images/icons/project-icons/bath.svg'
import dimensions from '/public/images/icons/project-icons/dimensions2.svg'
import clock from '/public/images/icons/project-icons/clock.svg'
import checks from '/public/images/icons/project-icons/checks.svg'
import share from '/public/images/icons/project-icons/share.svg'
import flag from '/public/images/icons/project-icons/flag.svg'
import pencil from '/public/images/icons/project-icons/pencil.svg'
import user from '/public/images/icons/project-icons/user.svg'
import map from '/public/images/pages/Screenshot 2023-03-24 at 6.41 1.svg'
import avatar from '/public/images/avatars/1.png'

// Import the Accordion component
import Accordion from 'src/pages/components/accordion'

// Import custom hooks from the project
import { useSettings } from 'src/@core/hooks/useSettings'

// Import translation hook from 'react-i18next'
import { useTranslation } from 'react-i18next'

const UnitsPage = () => {
  const items = [
    {
      image: cardImage1,
      caption: 'Item 1'
    },
    {
      image: cardImage2,
      caption: 'Item 2'
    },
    {
      image: cardImage3,
      caption: 'Item 3'
    }
  ]

  const properties = [
    {
      icon: checks,
      text: {
        rtl: 'موقف خاص',
        ltr: 'Private Parking'
      }
    },
    {
      icon: user,
      text: {
        rtl: '٤-٨ أفراد',
        ltr: '4-8 Persons'
      }
    },
    {
      icon: flag,
      text: {
        rtl: 'بدون تدخين',
        ltr: 'Non-smoking'
      }
    },
    {
      icon: pencil,
      text: {
        rtl: 'غسالة ملابس',
        ltr: 'Laundry Machine'
      }
    },
    {
      icon: clock,
      text: {
        rtl: 'غسالة صحون',
        ltr: 'Dishwasher'
      }
    },
    {
      icon: clock,
      text: {
        rtl: 'يمكن إيصال الانترنت',
        ltr: 'Internet Available'
      }
    }
  ]

  const columnCount = 3 // Number of columns

  const columns = []
  for (let i = 0; i < properties.length; i += columnCount) {
    columns.push(properties.slice(i, i + columnCount))
  }
  const { settings, handlePageTitle } = useSettings()
  const mode = settings.mode
  const { t } = useTranslation()

  useEffect(() => {
    const pageTitle = settings.direction === 'rtl' ? 'الرئيسية / عرض الوحدة' : 'Home / Unit View'
    handlePageTitle(pageTitle)
  }, [handlePageTitle, settings.direction])

  return (
    <UnitsLayout>
      <Grid container sx={{ padding: '10px' }}>
        <Grid xs={12} md={6} lg={3} sx={{ paddingX: { xs: '0', md: '15px' } }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'end', paddingBottom: '10px' }}>
            <Button sx={{ fontSize: '16px' }}>{settings.direction === 'rtl' ? 'شقة' : 'Apartment'}</Button>
            <Button>
              <Image src={share} alt='share' />
            </Button>
          </Box>
          <Box sx={{ border: '1px solid #DBDADE', borderRadius: '5px 5px 0 0', padding: '0', overflow: 'hidden' }}>
            <Accordion mode={settings.mode} />
          </Box>
          <Box sx={{ border: '1px solid #DBDADE', borderRadius: '5px 5px 0 0', padding: '24px', marginTop: '20px' }}>
            <Typography sx={{ fontSize: '20px', fontWeight: '500', fontFamily: 'Dubai' }}>
              {settings.direction === 'rtl' ? 'لديك شقة او منزل ؟' : '?Do you have an apartment or a house'}
            </Typography>
            <Button
              sx={{
                width: '100%',
                fontSize: '15px',
                fontWeight: '500',
                border: '1px solid #7367F0',
                borderRadius: '5px',
                marginTop: '20px',
                fontFamily: 'Public Sans',
                letterSpacing: '0.43px'
              }}
            >
              {settings.direction === 'rtl' ? 'إضافة إعلان/وحدة (مجانًا) +' : 'Add ad/unit (free) +'}
            </Button>
          </Box>
        </Grid>
        <Grid xs={12} md={6} lg={9} sx={{ border: '1px solid #DBDADE', borderRadius: '24px' }} className='mt-10'>
          <Box>
            <Box>
              <Carousel>
                {items.map((item, index) => (
                  <Box key={index}>
                    <Image
                      src={item.image}
                      alt={item.caption}
                      style={{ borderRadius: '24px 24px 0 0', width: '100%', height: '350px' }}
                    />
                    <Typography sx={{ marginRight: '20px' }}>{item.caption}</Typography>
                  </Box>
                ))}
              </Carousel>
            </Box>
            <Box sx={{ paddingX: '15px' }}>
              <Box>
                <Typography
                  variant='h4'
                  sx={{
                    color: mode === 'dark' ? 'rgba(208, 212, 241, 0.78)' : '#4B465C',
                    fontSize: '20px',
                    fontWeight: '500',
                    fontFamily: 'Dubai'
                  }}
                >
                  {settings.direction === 'rtl' ? 'نبذة' : 'Overview'}
                </Typography>
                <Typography
                  sx={{
                    fontSize: '16px',
                    fontWeight: '300',
                    color: mode === 'dark' ? 'rgba(208, 212, 241, 0.78)' : '#4B465C'
                  }}
                >
                  Learn web design in 1 hour with 25+ simple-to-use rules and guidelines — tons of amazing web design
                  resources included!
                </Typography>
                <Box
                  sx={{
                    width: '100%',
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-around',
                    marginTop: '30px'
                  }}
                >
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography
                      sx={{
                        fontSize: '14px',
                        fontWeight: '400',
                        color: mode === 'dark' ? 'rgba(208, 212, 241, 0.78)' : '#4B465C',
                        fontFamily: 'Dubai'
                      }}
                    >
                      {settings.direction === 'rtl' ? 'غرف النوم' : 'Bedrooms'}
                    </Typography>
                    <Box sx={{ display: 'flex' }}>
                      <Image src={bed} alt='bet' />
                      <Typography
                        sx={{
                          fontSize: '18px',
                          fontWeight: '700',
                          color: mode === 'dark' ? 'rgba(208, 212, 241, 0.78)' : '#4B465C',
                          marginRight: '5px',
                          fontFamily: 'Dubai W23 Bold'
                        }}
                      >
                        5
                      </Typography>
                    </Box>
                  </Box>
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography
                      sx={{
                        fontSize: '14px',
                        fontWeight: '400',
                        color: mode === 'dark' ? 'rgba(208, 212, 241, 0.78)' : '#4B465C',
                        fontFamily: 'Dubai'
                      }}
                    >
                      {settings.direction === 'rtl' ? ' الحمامات' : 'Bathrooms'}
                    </Typography>
                    <Box sx={{ display: 'flex' }}>
                      <Image src={bath} alt='bet' />
                      <Typography
                        sx={{
                          fontSize: '18px',
                          fontWeight: '700',
                          color: mode === 'dark' ? 'rgba(208, 212, 241, 0.78)' : '#4B465C',
                          marginRight: '5px',
                          fontFamily: 'Dubai W23 Bold'
                        }}
                      >
                        3
                      </Typography>
                    </Box>
                  </Box>
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Typography
                      sx={{
                        fontSize: '14px',
                        fontWeight: '400',
                        color: mode === 'dark' ? 'rgba(208, 212, 241, 0.78)' : '#4B465C',
                        fontFamily: 'Dubai'
                      }}
                    >
                      {settings.direction === 'rtl' ? ' المساحة' : 'Area'}
                    </Typography>
                    <Box
                      sx={{
                        display: 'flex',
                        fontSize: '18px',
                        fontWeight: '700',
                        color: '#4B465C',
                        marginRight: '5px',
                        alignItems: 'center'
                      }}
                    >
                      <Image src={dimensions} alt='bet' />
                      <Box
                        sx={{
                          direction: 'ltr',
                          marginRight: '5px',
                          fontFamily: 'Dubai W23 Bold',
                          fontWeight: '700',
                          fontSize: '18px',
                          display: 'flex',
                          alignItems: 'center'
                        }}
                      >
                        <Typography
                          sx={{ fontFamily: 'Public  Sans', fontWeight: '400', fontSize: '12px', marginX: '5px' }}
                        >
                          m<sup>2</sup>
                        </Typography>
                        25
                      </Box>
                    </Box>
                  </Box>
                  <Box
                    sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}
                  >
                    <Typography
                      sx={{
                        fontSize: '14px',
                        fontWeight: '400',
                        color: mode === 'dark' ? 'rgba(208, 212, 241, 0.78)' : '#4B465C',
                        fontFamily: 'Dubai'
                      }}
                    >
                      {settings.direction === 'rtl' ? ' الحالة' : 'Status'}
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                      <Image src={clock} alt='bet' />
                      <Typography
                        sx={{
                          fontSize: '18px',
                          fontWeight: '700',
                          color: mode === 'dark' ? 'rgba(208, 212, 241, 0.78)' : '#4B465C',
                          marginRight: '5px',
                          fontFamily: 'Dubai'
                        }}
                      >
                        {settings.direction === 'rtl' ? ' متاحة' : 'Available'}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'column',
                    marginY: '20px',
                    justifyContent: 'end'
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: '20px',
                      fontWeight: '500',
                      color: mode === 'dark' ? 'rgba(208, 212, 241, 0.78)' : '#4B465C',
                      width: '100%',
                      fontFamily: 'Dubai'
                    }}
                  >
                    {settings.direction === 'rtl' ? 'مواصفات' : 'Specification'}
                  </Typography>
                  <Grid container sx={{ display: 'flex', flexDirection: 'row' }}>
                    {columns.map((column, columnIndex) => (
                      <Grid
                        lg={3}
                        key={columnIndex}
                        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                      >
                        {column.map((property, index) => (
                          <Box
                            key={index}
                            sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center', width: '100%' }}
                          >
                            <Image src={property.icon} alt={property.text} />
                            <Typography
                              sx={{
                                fontSize: '16px',
                                fontWeight: '300',
                                color: mode === 'dark' ? 'rgba(208, 212, 241, 0.78)' : '#4B465C',
                                marginRight: '5px',
                                fontFamily: 'Dubai W23 Light'
                              }}
                            >
                              {property.text[settings.direction]}
                            </Typography>
                          </Box>
                        ))}
                      </Grid>
                    ))}
                  </Grid>
                </Box>
                <Box
                  sx={{
                    width: '100%',
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-around',
                    marginTop: '30px'
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: '20px',
                      fontWeight: '500',
                      color: mode === 'dark' ? 'rgba(208, 212, 241, 0.78)' : '#4B465C',
                      width: '100%',
                      fontFamily: 'Dubai'
                    }}
                  >
                    {settings.direction === 'rtl' ? 'المنطقة السكنية' : 'Residential Area'}
                  </Typography>
                  <Grid container>
                    <Grid lg={12}>
                      <Image src={map} alt='map' style={{ width: '100%' }} />
                      <Typography
                        sx={{
                          fontSize: '16px',
                          fontWeight: '300',
                          color: mode === 'dark' ? 'rgba(208, 212, 241, 0.78)' : '#4B465C',
                          marginY: '20px',
                          fontFamily: 'Dubai W23 Light'
                        }}
                      >
                        {settings.direction === 'rtl'
                          ? ' المنطقة حيوية ومليئة بالمدارس، الأسواق، وقريبة من محطة الباصات ومحطة القطار، المنطقة حيوية ومليئة بالمدارس، الأسواق، وقريبة من محطة الباصات ومحطة القطار. المنطقة حيوية ومليئة بالمدارس، الأسواق، وقريبة من محطة الباصات ومحطة القطار، المنطقة حيوية ومليئة بالمدارس، الأسواق، وقريبة من محطة الباصات ومحطة القطار.'
                          : 'The area is lively and full of schools, markets, and close to the bus station and train station. The area is livelyIt is full of schools, markets, and close to the bus station and train station. The area is lively and full of schools.Markets, and close to the bus station and train station. The area is lively and full of schools, markets, and close to Bus station and train station.'}
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              width: '100% ',
              backgroundColor: '#685DD7',
              borderRadius: ' 0px 0px 22px 22px',
              paddingX: '10px',
              paddingY: '30px'
            }}
          >
            <Typography sx={{ fontSize: '18px', fontWeight: '700', color: '#ffffff', fontFamily: 'Dubai W23 Bold' }}>
              {settings.direction === 'rtl' ? 'معروضة من قبل' : 'Presented By '}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
              <Box sx={{ width: '38px', height: '38px', marginLeft: '10px' }}>
                <Image src={avatar} alt='avatar' style={{ width: '100%', height: '100%', borderRadius: '100%' }} />
              </Box>
              <Typography
                variant='h5'
                sx={{ fontSize: '15px', fontWeight: '600', color: '#ffffff', fontFamily: 'Public Sans' }}
              >
                Devonne Wallbridge
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </UnitsLayout>
  )
}

export default UnitsPage
