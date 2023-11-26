import { Box, Button, FormControlLabel, Grid, Radio, Typography } from '@mui/material'
import InputBase from '@mui/material/InputBase'
import office from '/public/images/pages/office.svg'
import diamond from '/public/images/pages/Diamond.svg'
import suitcase from '/public/images/pages/Suitcase.svg'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import UploadImages from '../../../../@core/components/drag&drop/index'
import map from '/public/images/pages/Screenshot 2023-03-24 at 6.41 1.svg'
import box from '/public/images/pages/box.svg'
import car from '/public/images/pages/car.svg'
import CheckIcon from '@mui/icons-material/Check'
import { useSettings } from 'src/@core/hooks/useSettings'
import Layout from './Layout'

const Index = () => {
  const [selectedBuilding, setSelectedBuilding] = useState(null)
  const { settings, handlePageTitle } = useSettings()
  const mode = settings.mode
  useEffect(() => {
    const pageTitle = settings.direction === 'rtl' ? 'ادارة الوحدات/ اضافة وحدة' : 'Manage units/add a unit'
    handlePageTitle(pageTitle)
  }, [handlePageTitle, settings.direction])

  const handleRadioChange = buildingId => {
    setSelectedBuilding(buildingId)
  }

  const data = [
    { title: 'عمارة', image: office },
    { title: 'بيت', image: diamond },
    { title: 'شقة/ستوديو', image: suitcase }
  ]

  return (
    <Layout>
      <Grid container>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '30px'
          }}
        >
          <Box>
            <Button
              sx={{
                backgroundColor: '#7367F0',
                borderRadius: '6px',
                fontSize: '15px',
                fontWeight: '500',
                color: '#ffffff',
                ':hover': {
                  backgroundColor: '#7367F0'
                }
              }}
            >
              نشر الإعلان
            </Button>
            <Button sx={{ marginX: '10px' }}>حفظ </Button>
            <Button>إلغاء</Button>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'start', flexDirection: 'column', alignItems: 'end' }}>
            <Typography
              sx={{
                color: mode === 'dark' ? 'rgba(208, 212, 241, 0.78)' : '#4B465C',
                fontSize: '22px',
                fontWeight: '500'
              }}
            >
              إضافة إعلان جديد
            </Typography>
            <Typography
              sx={{
                color: mode === 'dark' ? 'rgba(208, 212, 241, 0.78)' : '#4B465C',
                fontSize: '15px',
                fontWeight: '400'
              }}
            >
              .إضافتك لأكبر قدر من البيانات والصور سيساعد في عرض العقار في أفضل صورة
            </Typography>
          </Box>
        </Box>
        <Grid lg={3} sx={{ width: '100%', display: { xs: 'block', lg: 'none' } }}>
          <Box
            sx={{
              marginTop: '10px',
              boxShadow: '-30px 20px 40px rgba(8, 17, 66, 0.04)',
              direction: 'rtl',
              padding: '10px'
            }}
          >
            <Typography
              sx={{
                color: mode === 'dark' ? 'rgba(208, 212, 241, 0.78)' : '#4B465C',
                fontSize: '20px',
                fontWeight: '500'
              }}
            >
              سعر الإيجار
            </Typography>
            <Box sx={{ marginY: '20px' }}>
              <Typography
                sx={{
                  color: mode === 'dark' ? 'rgba(208, 212, 241, 0.78)' : '#4B465C',
                  fontSize: '14px',
                  fontWeight: '400'
                }}
              >
                سعر الوحدة
              </Typography>
              <InputBase
                sx={{ padding: '5px', borderRadius: '6px', border: '1px solid #D6D6D6', width: '100%' }}
                placeholder='السعر'
              />
            </Box>
            <Box sx={{ marginY: '20px' }}>
              <Typography
                sx={{
                  color: mode === 'dark' ? 'rgba(208, 212, 241, 0.78)' : '#4B465C',
                  fontSize: '14px',
                  fontWeight: '400'
                }}
              >
                العملة
              </Typography>
              <InputBase
                sx={{ padding: '5px', borderRadius: '6px', border: '1px solid #D6D6D6', width: '100%' }}
                placeholder='حدّد العملة'
              />
            </Box>
            <Box sx={{ marginY: '20px' }}>
              <Typography
                sx={{
                  color: mode === 'dark' ? 'rgba(208, 212, 241, 0.78)' : '#4B465C',
                  fontSize: '14px',
                  fontWeight: '400'
                }}
              >
                مدة العقد
              </Typography>
              <InputBase
                sx={{ padding: '5px', borderRadius: '6px', border: '1px solid #D6D6D6', width: '100%' }}
                placeholder='اختر المدة'
              />
            </Box>
            <Box sx={{ marginY: '20px' }}>
              <Typography
                sx={{
                  color: mode === 'dark' ? 'rgba(208, 212, 241, 0.78)' : '#4B465C',
                  fontSize: '14px',
                  fontWeight: '400'
                }}
              >
                حالة الوحدة
              </Typography>
              <InputBase
                sx={{ padding: '5px', borderRadius: '6px', border: '1px solid #D6D6D6', width: '100%' }}
                placeholder='متاحة'
              />
            </Box>
          </Box>
        </Grid>
        <Grid lg={9} sx={{ width: '100%' }}>
          <Box
            sx={{
              width: '100%',
              marginTop: '10px',
              boxShadow: '-30px 20px 40px rgba(8, 17, 66, 0.04)',
              paddingY: '10px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingX: '15px',
              flexWrap: 'wrap'
            }}
          >
            {data.map(child => (
              <Box
                key={child}
                border={1}
                p={4}
                sx={{
                  borderColor: selectedBuilding === `building_${child.title}` ? 'primary.main' : '#DBDADE',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexDirection: 'column',
                  width: '30%',
                  borderRadius: '6px'
                }}
              >
                <Image src={child.image} alt={`Building ${child}`} width='100%' />

                <Typography
                  gutterBottom
                  sx={{
                    color: mode === 'dark' ? 'rgba(208, 212, 241, 0.78)' : '#4B465C',
                    fontSize: '15px',
                    fontWeight: '600',
                    marginY: '5px'
                  }}
                >
                  {child.title}
                </Typography>

                <FormControlLabel
                  value={`building_${child.title}`}
                  control={
                    <Radio
                      checked={selectedBuilding === `building_${child.title}`}
                      onChange={() => handleRadioChange(`building_${child.title}`)}
                    />
                  }
                />
              </Box>
            ))}
          </Box>
          <Box
            sx={{
              width: '100%',
              marginTop: '20px',
              boxShadow: '-30px 20px 40px rgba(8, 17, 66, 0.04)',
              paddingY: '10px',
              paddingX: '25px',
              direction: 'rtl'
            }}
          >
            <Box>
              <Typography
                sx={{
                  color: mode === 'dark' ? 'rgba(208, 212, 241, 0.78)' : '#4B465C',
                  fontSize: '20px',
                  fontWeight: '500'
                }}
              >
                البيانات الأساسية
              </Typography>
            </Box>
            <Box sx={{ marginY: '20px' }}>
              <Typography
                sx={{
                  color: mode === 'dark' ? 'rgba(208, 212, 241, 0.78)' : '#4B465C',
                  fontSize: '14px',
                  fontWeight: '400'
                }}
              >
                سعر الوحدة
              </Typography>
              <InputBase
                sx={{ padding: '5px', borderRadius: '6px', border: '1px solid #D6D6D6', width: '100%' }}
                placeholder='السعر'
              />
            </Box>
            <Box sx={{ display: 'flex' }}>
              <Box sx={{ marginY: '20px', marginLeft: ' 20px', width: '30%' }}>
                <Typography
                  sx={{
                    color: mode === 'dark' ? 'rgba(208, 212, 241, 0.78)' : '#4B465C',
                    fontSize: '14px',
                    fontWeight: '400'
                  }}
                >
                  سعر الوحدة
                </Typography>
                <InputBase
                  sx={{ padding: '5px', borderRadius: '6px', border: '1px solid #D6D6D6', width: '100%' }}
                  placeholder='السعر'
                />
              </Box>
              <Box sx={{ marginY: '20px', width: '30%' }}>
                <Typography
                  sx={{
                    color: mode === 'dark' ? 'rgba(208, 212, 241, 0.78)' : '#4B465C',
                    fontSize: '14px',
                    fontWeight: '400'
                  }}
                >
                  سعر الوحدة
                </Typography>
                <InputBase
                  sx={{ padding: '5px', borderRadius: '6px', border: '1px solid #D6D6D6', width: '100%' }}
                  placeholder='السعر'
                />
              </Box>
            </Box>
            <Box sx={{ marginY: '20px' }}>
              <Typography
                sx={{
                  color: mode === 'dark' ? 'rgba(208, 212, 241, 0.78)' : '#4B465C',
                  fontSize: '14px',
                  fontWeight: '400'
                }}
              >
                سعر الوحدة
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              width: '100%',
              marginTop: '20px',
              boxShadow: '-30px 20px 40px rgba(8, 17, 66, 0.04)',
              paddingY: '10px',
              paddingX: '25px',
              direction: 'rtl'
            }}
          >
            <Box>
              <Typography
                sx={{
                  color: mode === 'dark' ? 'rgba(208, 212, 241, 0.78)' : '#4B465C',
                  fontSize: '20px',
                  fontWeight: '500'
                }}
              >
                الصور
              </Typography>
            </Box>
            <Box sx={{ marginTop: '30px' }}>
              <UploadImages />
            </Box>
          </Box>
          <Box
            sx={{
              width: '100%',
              marginTop: '20px',
              boxShadow: '-30px 20px 40px rgba(8, 17, 66, 0.04)',
              paddingY: '10px',
              paddingX: '25px',
              direction: 'rtl'
            }}
          >
            <Typography
              sx={{
                fontSize: '18px',
                fontWeight: '700',
                width: '100%',
                marginBottom: '10px'
              }}
            >
              المنطقة السكنية
            </Typography>
            <Box>
              <Image src={map} alt='map' style={{ width: '100%' }} />
            </Box>
          </Box>
          <Box
            sx={{
              width: '100%',
              marginTop: '20px',
              boxShadow: '-30px 20px 40px rgba(8, 17, 66, 0.04)',
              paddingY: '10px',
              paddingX: '25px',
              direction: 'rtl',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <Box sx={{ marginY: '20px', width: '100%' }}>
              <Typography
                sx={{
                  color: mode === 'dark' ? 'rgba(208, 212, 241, 0.78)' : '#4B465C',
                  fontSize: '18px',
                  fontWeight: '700'
                }}
              >
                مواصفات العقار
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'row' } }}>
              <Box sx={{ width: { xs: '100%', lg: '30%' }, paddingLeft: '10px' }}>
                <Typography
                  sx={{
                    backgroundColor: '#7367F0',
                    borderRadius: '6px',
                    color: '#ffffff',
                    fontSize: '15px',
                    fontWeight: '500',
                    padding: '10px',
                    display: 'flex',
                    alignItems: 'center'
                  }}
                >
                  <Image src={box} alt='box' style={{ marginLeft: '5px' }} />
                  الغرف
                </Typography>
                <Typography
                  sx={{
                    fontSize: '15px',
                    fontWeight: '500',
                    color: mode === 'dark' ? 'rgba(208, 212, 241, 0.78)' : '#4B465C',
                    marginY: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    padding: '10px'
                  }}
                >
                  <Image src={car} alt='car' style={{ marginLeft: '5px' }} />
                  تفاصيل إضافية
                </Typography>
                <Typography
                  sx={{
                    fontSize: '15px',
                    fontWeight: '500',
                    color: mode === 'dark' ? 'rgba(208, 212, 241, 0.78)' : '#4B465C',
                    marginY: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    padding: '10px'
                  }}
                >
                  <Image src={car} alt='car' style={{ marginLeft: '5px' }} />
                  الحي/المنطقة
                </Typography>
              </Box>
              <Box
                sx={{
                  width: { xs: '100%', lg: '70%' },
                  borderRight: { xs: 'none', lg: '1px solid #DBDADE' },
                  borderTop: { xs: '1px solid #DBDADE', lg: 'none' },
                  paddingX: '5px'
                }}
              >
                <Typography
                  sx={{
                    color: mode === 'dark' ? 'rgba(208, 212, 241, 0.78)' : '#4B465C',
                    fontSize: '15px',
                    fontWeight: '500',
                    paddingRight: '15px',
                    marginTop: { xs: '10px', lg: '0' }
                  }}
                >
                  Options
                </Typography>
                <Box sx={{ direction: 'ltr' }}>
                  <Typography>Add to Stock</Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                    <InputBase
                      sx={{
                        ml: 1,
                        flex: 1,
                        border: '1px solid #DBDADE',
                        padding: '5px',
                        borderRadius: '6px',
                        width: '80%'
                      }}
                      placeholder='Quantity'
                    />
                    <Button
                      sx={{
                        backgroundColor: '#7367F0',
                        color: '#fff',
                        marginLeft: '10px',
                        ':hover': {
                          backgroundColor: '#7367F0'
                        }
                      }}
                    >
                      <CheckIcon /> Confirm
                    </Button>
                  </Box>
                  <Box sx={{ marginTop: '15px' }}>
                    <Typography
                      sx={{
                        color: mode === 'dark' ? 'rgba(208, 212, 241, 0.78)' : '#4B465C',
                        fontSize: '15px',
                        fontWeight: '600',
                        marginBottom: '5px'
                      }}
                    >
                      Product in stock now: 54
                    </Typography>
                    <Typography
                      sx={{
                        color: mode === 'dark' ? 'rgba(208, 212, 241, 0.78)' : '#4B465C',
                        fontSize: '15px',
                        fontWeight: '600',
                        marginBottom: '5px'
                      }}
                    >
                      Product in transit: 390
                    </Typography>
                    <Typography
                      sx={{
                        color: mode === 'dark' ? 'rgba(208, 212, 241, 0.78)' : '#4B465C',
                        fontSize: '15px',
                        fontWeight: '600',
                        marginBottom: '5px'
                      }}
                    >
                      Last time restocked: 24th June, 2022
                    </Typography>
                    <Typography
                      sx={{
                        color: mode === 'dark' ? 'rgba(208, 212, 241, 0.78)' : '#4B465C',
                        fontSize: '15px',
                        fontWeight: '600'
                      }}
                    >
                      Total stock over lifetime: 2,430
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid lg={3} sx={{ width: '100%', display: { xs: 'none', lg: 'block' } }}>
          <Box
            sx={{
              marginTop: '10px',
              boxShadow: '-30px 20px 40px rgba(8, 17, 66, 0.04)',
              direction: 'rtl',
              padding: '10px'
            }}
          >
            <Typography
              sx={{
                color: mode === 'dark' ? 'rgba(208, 212, 241, 0.78)' : '#4B465C',
                fontSize: '20px',
                fontWeight: '500'
              }}
            >
              سعر الإيجار
            </Typography>
            <Box sx={{ marginY: '20px' }}>
              <Typography
                sx={{
                  color: mode === 'dark' ? 'rgba(208, 212, 241, 0.78)' : '#4B465C',
                  fontSize: '14px',
                  fontWeight: '400'
                }}
              >
                سعر الوحدة
              </Typography>
              <InputBase
                sx={{ padding: '5px', borderRadius: '6px', border: '1px solid #D6D6D6', width: '100%' }}
                placeholder='السعر'
              />
            </Box>
            <Box sx={{ marginY: '20px' }}>
              <Typography
                sx={{
                  color: mode === 'dark' ? 'rgba(208, 212, 241, 0.78)' : '#4B465C',
                  fontSize: '14px',
                  fontWeight: '400'
                }}
              >
                العملة
              </Typography>
              <InputBase
                sx={{ padding: '5px', borderRadius: '6px', border: '1px solid #D6D6D6', width: '100%' }}
                placeholder='حدّد العملة'
              />
            </Box>
            <Box sx={{ marginY: '20px' }}>
              <Typography
                sx={{
                  color: mode === 'dark' ? 'rgba(208, 212, 241, 0.78)' : '#4B465C',
                  fontSize: '14px',
                  fontWeight: '400'
                }}
              >
                مدة العقد
              </Typography>
              <InputBase
                sx={{ padding: '5px', borderRadius: '6px', border: '1px solid #D6D6D6', width: '100%' }}
                placeholder='اختر المدة'
              />
            </Box>
            <Box sx={{ marginY: '20px' }}>
              <Typography
                sx={{
                  color: mode === 'dark' ? 'rgba(208, 212, 241, 0.78)' : '#4B465C',
                  fontSize: '14px',
                  fontWeight: '400'
                }}
              >
                حالة الوحدة
              </Typography>
              <InputBase
                sx={{ padding: '5px', borderRadius: '6px', border: '1px solid #D6D6D6', width: '100%' }}
                placeholder='متاحة'
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Layout>
  )
}

export default Index
