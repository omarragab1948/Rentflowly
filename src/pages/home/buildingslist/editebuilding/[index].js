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
import dynamic from 'next/dynamic'

const DynamicEditor = dynamic(() => import('../../../../@core/components/texteditor/index'), {
  ssr: false
})

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
    { title: { ar: 'عمارة', en: 'Building' }, image: office },
    { title: { ar: 'بيت', en: 'House' }, image: diamond },
    { title: { ar: 'شقة/ستوديو', en: 'Apartment/Studio' }, image: suitcase }
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
            marginBottom: '30px',
            flexWrap: 'wrap'
          }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'start', flexDirection: 'column', alignItems: 'end' }}>
            <Typography
              sx={{
                color: mode === 'dark' ? 'rgba(208, 212, 241, 0.78)' : '#4B465C',
                fontSize: '22px',
                fontWeight: '500',
                width: '100%',
                display: 'flex',
                justifyContent: 'start',
                fontFamily: 'Public Sans'
              }}
            >
              {settings.direction === 'rtl' ? 'اضافة اعلان جديد' : 'Add a new ad'}
            </Typography>
            <Typography
              sx={{
                color: mode === 'dark' ? 'rgba(208, 212, 241, 0.78)' : '#4B465C',
                fontSize: '15px',
                fontWeight: '400',
                fontFamily: 'Public Sans'
              }}
            >
              {settings.direction === 'rtl'
                ? '  إضافتك لأكبر قدر من البيانات والصور سيساعد في عرض العقار في أفضل صورة'
                : 'Adding as much data and images as possible will help display the property in the best light'}
            </Typography>
          </Box>
          <Box>
            <Button sx={{ fontFamily: 'Public Sans' }}>{settings.direction === 'rtl' ? 'الغاء' : 'Cancel'} </Button>
            <Button sx={{ marginX: '10px', fontFamily: 'Public Sans' }}>
              {settings.direction === 'rtl' ? 'حفظ' : 'Save'}
            </Button>
            <Button
              sx={{
                backgroundColor: '#7367F0',
                borderRadius: '6px',
                fontSize: '15px',
                fontWeight: '500',
                color: '#ffffff',
                fontFamily: 'Public Sans',

                ':hover': {
                  backgroundColor: '#7367F0'
                }
              }}
            >
              {settings.direction === 'rtl' ? 'نشر الاعلان' : 'Post the ad'}
            </Button>
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
                fontWeight: '500',
                width: '100%',
                display: 'flex',
                justifyContent: 'end'
              }}
            >
              {settings.direction === 'rtl' ? 'سعر الإيجار' : 'Rent price'}
            </Typography>
            <Box sx={{ marginY: '20px' }}>
              <Typography
                sx={{
                  color: mode === 'dark' ? 'rgba(208, 212, 241, 0.78)' : '#4B465C',
                  fontSize: '14px',
                  fontWeight: '400',
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'end'
                }}
              >
                {settings.direction === 'rtl' ? 'سعر الوحدة' : 'Unit price'}
              </Typography>
              <InputBase
                sx={{
                  direction: 'ltr',
                  padding: '5px',
                  borderRadius: '6px',
                  border: '1px solid #D6D6D6',
                  width: '100%'
                }}
                placeholder={settings.direction === 'rtl' ? ' السعر' : 'Price'}
              />
            </Box>
            <Box sx={{ marginY: '20px' }}>
              <Typography
                sx={{
                  color: mode === 'dark' ? 'rgba(208, 212, 241, 0.78)' : '#4B465C',
                  fontSize: '14px',
                  fontWeight: '400',
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'end'
                }}
              >
                {settings.direction === 'rtl' ? 'العملة' : 'Currency'}
              </Typography>
              <InputBase
                sx={{
                  direction: 'ltr',
                  padding: '5px',
                  borderRadius: '6px',
                  border: '1px solid #D6D6D6',
                  width: '100%'
                }}
                placeholder={settings.direction === 'rtl' ? 'حدد العملة' : 'Select the currency'}
              />
            </Box>
            <Box sx={{ marginY: '20px' }}>
              <Typography
                sx={{
                  color: mode === 'dark' ? 'rgba(208, 212, 241, 0.78)' : '#4B465C',
                  fontSize: '14px',
                  fontWeight: '400',
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'end'
                }}
              >
                {settings.direction === 'rtl' ? 'مدة العقد' : 'Duration of the contract'}
              </Typography>
              <InputBase
                sx={{
                  direction: 'ltr',
                  padding: '5px',
                  borderRadius: '6px',
                  border: '1px solid #D6D6D6',
                  width: '100%'
                }}
                placeholder={settings.direction === 'rtl' ? 'اختر المدة' : 'Choose the duration'}
              />
            </Box>
            <Box sx={{ marginY: '20px' }}>
              <Typography
                sx={{
                  color: mode === 'dark' ? 'rgba(208, 212, 241, 0.78)' : '#4B465C',
                  fontSize: '14px',
                  fontWeight: '400',
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'end'
                }}
              >
                {settings.direction === 'rtl' ? 'حالة الوحدة' : 'Unit status'}
              </Typography>
              <InputBase
                sx={{
                  direction: 'ltr',
                  padding: '5px',
                  borderRadius: '6px',
                  border: '1px solid #D6D6D6',
                  width: '100%'
                }}
                placeholder={settings.direction === 'rtl' ? 'متاحة' : 'Available'}
              />
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
                fontWeight: '500',
                width: '100%',
                display: 'flex',
                justifyContent: 'end',
                fontFamily: 'Dubai'
              }}
            >
              {settings.direction === 'rtl' ? 'سعر الإيجار' : 'Reent price'}
            </Typography>
            <Box sx={{ marginY: '20px' }}>
              <Typography
                sx={{
                  color: mode === 'dark' ? 'rgba(208, 212, 241, 0.78)' : '#4B465C',
                  fontSize: '14px',
                  fontWeight: '400',
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'end',
                  fontFamily: 'Dubai'
                }}
              >
                {settings.direction === 'rtl' ? 'سعر الوحدة' : 'Unit price'}
              </Typography>
              <InputBase
                sx={{
                  direction: 'ltr',
                  padding: '5px',
                  borderRadius: '6px',
                  border: '1px solid #D6D6D6',
                  width: '100%'
                }}
                placeholder={settings.direction === 'rtl' ? ' السعر' : 'Price'}
              />
            </Box>
            <Box sx={{ marginY: '20px' }}>
              <Typography
                sx={{
                  color: mode === 'dark' ? 'rgba(208, 212, 241, 0.78)' : '#4B465C',
                  fontSize: '14px',
                  fontWeight: '400',
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'end',
                  fontFamily: 'Dubai'
                }}
              >
                {settings.direction === 'rtl' ? 'العملة' : 'Currency'}
              </Typography>
              <InputBase
                sx={{
                  direction: 'ltr',
                  padding: '5px',
                  borderRadius: '6px',
                  border: '1px solid #D6D6D6',
                  width: '100%'
                }}
                placeholder={settings.direction === 'rtl' ? 'حدد العملة' : 'Select the currency'}
              />
            </Box>
            <Box sx={{ marginY: '20px' }}>
              <Typography
                sx={{
                  color: mode === 'dark' ? 'rgba(208, 212, 241, 0.78)' : '#4B465C',
                  fontSize: '14px',
                  fontWeight: '400',
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'end',
                  fontFamily: 'Dubai'
                }}
              >
                {settings.direction === 'rtl' ? 'مدة العقد' : 'Duration of the contract'}
              </Typography>
              <InputBase
                sx={{
                  direction: 'ltr',
                  padding: '5px',
                  borderRadius: '6px',
                  border: '1px solid #D6D6D6',
                  width: '100%'
                }}
                placeholder={settings.direction === 'rtl' ? 'اختر المدة' : 'Choose the duration'}
              />
            </Box>
            <Box sx={{ marginY: '20px' }}>
              <Typography
                sx={{
                  color: mode === 'dark' ? 'rgba(208, 212, 241, 0.78)' : '#4B465C',
                  fontSize: '14px',
                  fontWeight: '400',
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'end',
                  fontFamily: 'Dubai'
                }}
              >
                {settings.direction === 'rtl' ? 'حالة الوحدة' : 'Unit status'}
              </Typography>
              <InputBase
                sx={{
                  direction: 'ltr',
                  padding: '5px',
                  borderRadius: '6px',
                  border: '1px solid #D6D6D6',
                  width: '100%'
                }}
                placeholder={settings.direction === 'rtl' ? 'متاحة' : 'Available'}
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
                  borderColor: selectedBuilding === `building_${child.title.en}` ? 'primary.main' : '#DBDADE',
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
                    marginY: '5px',
                    fontFamily: 'Public Sans'
                  }}
                >
                  {settings.direction === 'rtl' ? child.title.ar : child.title.en}
                </Typography>

                <FormControlLabel
                  value={`building_${child.title.en}`} // Use the English title for uniqueness
                  control={
                    <Radio
                      checked={selectedBuilding === `building_${child.title.en}`}
                      onChange={() => handleRadioChange(`building_${child.title.en}`)}
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
                  fontWeight: '500',
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'end',
                  fontFamily: 'Dubai'
                }}
              >
                {settings.direction === 'rtl' ? '  البيانات الأساسية' : 'basic information'}
              </Typography>
            </Box>
            <Box sx={{ marginY: '20px' }}>
              <Typography
                sx={{
                  color: mode === 'dark' ? 'rgba(208, 212, 241, 0.78)' : '#4B465C',
                  fontSize: '14px',
                  fontWeight: '400',
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'end',
                  fontFamily: 'Dubai'
                }}
              >
                {settings.direction === 'rtl' ? (
                  <>
                    <span style={{ color: '#B35959' }}>(إلزامي)</span> عنوان قصير
                  </>
                ) : (
                  <>
                    Short address (<span style={{ color: '#B35959' }}>mandatory</span>)
                  </>
                )}
              </Typography>
              <InputBase
                sx={{
                  direction: 'ltr',
                  padding: '5px',
                  borderRadius: '6px',
                  border: '1px solid #D6D6D6',
                  width: '100%'
                }}
                placeholder={
                  settings.direction === 'rtl'
                    ? ' أدخل عنوان قصير للعقار لجذب المهتمين'
                    : ' Enter a short address of the property to attract interested people'
                }
              />
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'end' }}>
              <Box sx={{ marginY: '20px', marginLeft: ' 20px', width: '30%' }}>
                <Typography
                  sx={{
                    color: mode === 'dark' ? 'rgba(208, 212, 241, 0.78)' : '#4B465C',
                    fontSize: '14px',
                    fontWeight: '400',
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'end',
                    fontFamily: 'Dubai'
                  }}
                >
                  {settings.direction === 'rtl' ? 'مساحة الشقة (بالمتر المربع)' : 'Apartment area (in square metres)'}
                </Typography>
                <InputBase
                  sx={{
                    direction: 'ltr',
                    padding: '5px',
                    borderRadius: '6px',
                    border: '1px solid #D6D6D6',
                    width: '100%'
                  }}
                />
              </Box>
              <Box sx={{ marginY: '20px', width: '30%' }}>
                <Typography
                  sx={{
                    color: mode === 'dark' ? 'rgba(208, 212, 241, 0.78)' : '#4B465C',
                    fontSize: '14px',
                    fontWeight: '400',
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'end',
                    fontFamily: 'Dubai'
                  }}
                >
                  {settings.direction === 'rtl' ? (
                    <>
                      <span style={{ color: '#B35959' }}>(إلزامي)</span> مفروشة؟
                    </>
                  ) : (
                    <>
                      Furnished? (<span style={{ color: '#B35959' }}>mandatory</span>)
                    </>
                  )}
                </Typography>
                <InputBase
                  sx={{
                    direction: 'ltr',
                    padding: '5px',
                    borderRadius: '6px',
                    border: '1px solid #D6D6D6',
                    width: '100%'
                  }}
                />
              </Box>
            </Box>
            <Box sx={{ marginY: '20px' }}>
              <Typography
                sx={{
                  color: mode === 'dark' ? 'rgba(208, 212, 241, 0.78)' : '#4B465C',
                  fontSize: '14px',
                  fontWeight: '400',
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'end',
                  fontFamily: 'Dubai'
                }}
              >
                {settings.direction === 'rtl' ? (
                  <>
                    <span style={{ color: '#B35959' }}>(إلزامي)</span> وصف العقار
                  </>
                ) : (
                  <>
                    Apartment area (in square metres) (<span style={{ color: '#B35959' }}>mandatory</span>)
                  </>
                )}
              </Typography>
              <DynamicEditor direction={settings.direction} />
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
                  fontWeight: '500',
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'end',
                  fontFamily: 'Dubai'
                }}
              >
                {settings.direction === 'rtl' ? ' الصور' : 'Images'}
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
                marginBottom: '10px',
                width: '100%',
                display: 'flex',
                justifyContent: 'end',
                fontFamily: 'Dubai'
              }}
            >
              {settings.direction === 'rtl' ? 'المنطقة السكنية' : 'residential area '}
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
                  fontWeight: '700',
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'end'
                }}
              >
                {settings.direction === 'rtl' ? ' مواصفات العقار' : 'Property specifications '}
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'row' } }}>
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
                    marginTop: { xs: '10px', lg: '0' },
                    fontFamily: 'Public Sans'
                  }}
                >
                  {settings.direction === 'rtl' ? 'خيارات' : 'Options'}
                </Typography>
                <Box sx={{ direction: 'ltr' }}>
                  <Typography sx={{ fontFamily: 'Public Sans', fontWeight: '500', paddingRight: '15px' }}>
                    {settings.direction === 'rtl' ? 'أضف إلى المخزون' : 'Add to Stock'}
                  </Typography>
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
                      <CheckIcon />
                      {settings.direction === 'rtl' ? 'تأكيد' : 'Confirm'}
                    </Button>
                  </Box>
                  <Box sx={{ marginTop: '15px' }}>
                    <Typography
                      sx={{
                        color: mode === 'dark' ? 'rgba(208, 212, 241, 0.78)' : '#4B465C',
                        fontSize: '15px',
                        fontWeight: '600',
                        marginBottom: '5px',
                        fontFamily: 'Public Sans'
                      }}
                    >
                      {settings.direction === 'rtl' ? 'المنتج المتوفر حاليا: 54' : 'Product in stock now: 54'}
                    </Typography>
                    <Typography
                      sx={{
                        color: mode === 'dark' ? 'rgba(208, 212, 241, 0.78)' : '#4B465C',
                        fontSize: '15px',
                        fontWeight: '600',
                        marginBottom: '5px',
                        fontFamily: 'Public Sans'
                      }}
                    >
                      {settings.direction === 'rtl' ? 'المنتج قيد النقل: 390' : ' Product in transit: 390'}
                    </Typography>
                    <Typography
                      sx={{
                        color: mode === 'dark' ? 'rgba(208, 212, 241, 0.78)' : '#4B465C',
                        fontSize: '15px',
                        fontWeight: '600',
                        marginBottom: '5px',
                        fontFamily: 'Public Sans'
                      }}
                    >
                      {settings.direction === 'rtl'
                        ? 'آخر مرة تمت إعادة تخزينها: 24 يونيو 2022'
                        : '  Last time restocked: 24th June, 2022'}
                    </Typography>
                    <Typography
                      sx={{
                        color: mode === 'dark' ? 'rgba(208, 212, 241, 0.78)' : '#4B465C',
                        fontSize: '15px',
                        fontWeight: '600',
                        fontFamily: 'Public Sans'
                      }}
                    >
                      {settings.direction === 'rtl'
                        ? 'إجمالي المخزون على مدى العمر: 2,430'
                        : 'Total stock over lifetime: 2,430'}
                    </Typography>
                  </Box>
                </Box>
              </Box>
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
                    alignItems: 'center',
                    justifyContent: 'end',
                    fontFamily: 'Dubai'
                  }}
                >
                  {settings.direction === 'rtl' ? '  الغرف' : 'Rooms'}
                  <Image src={box} alt='box' style={{ marginRight: '5px', marginLeft: '5px' }} />
                </Typography>
                <Typography
                  sx={{
                    fontSize: '15px',
                    fontWeight: '500',
                    color: mode === 'dark' ? 'rgba(208, 212, 241, 0.78)' : '#4B465C',
                    marginY: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    padding: '10px',
                    justifyContent: 'end',
                    fontFamily: 'Dubai'
                  }}
                >
                  {settings.direction === 'rtl' ? ' تفاصيل إضافية' : 'Additional details'}
                  <Image src={car} alt='car' style={{ marginRight: '5px', marginLeft: '5px' }} />
                </Typography>
                <Typography
                  sx={{
                    fontSize: '15px',
                    fontWeight: '500',
                    color: mode === 'dark' ? 'rgba(208, 212, 241, 0.78)' : '#4B465C',
                    marginY: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    padding: '10px',
                    justifyContent: 'end',
                    fontFamily: 'Dubai'
                  }}
                >
                  {settings.direction === 'rtl' ? ' الحي/المنطقة' : 'Neighborhood/area '}
                  <Image src={car} alt='car' style={{ marginRight: '5px', marginLeft: '5px' }} />
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Layout>
  )
}

export default Index
