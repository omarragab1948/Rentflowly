import * as React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Image from 'next/image'
import { Box } from '@mui/system'
import cardImage from '/public/images/pages/Image.png'
import bed from '/public/images/icons/project-icons/bed.svg'
import dimensions from '/public/images/icons/project-icons/dimensions.svg'
import location from '/public/images/icons/project-icons/location.svg'
import Paper from 'src/@core/theme/overrides/paper'

export default function MediaCard({ mode }) {
  console.log(mode)

  return (
    <Card sx={{ maxWidth: 345, display: 'flex', flexDirection: 'column' }}>
      <Box sx={{}}>
        <Image src={cardImage} alt='card image' style={{ width: '100%' }} />
      </Box>
      <CardContent>
        <Typography
          sx={{
            fontSize: '18px',
            fontWeight: '700',
            color: mode === 'dark' ? 'rgba(208, 212, 241, 0.78)' : '#4B465C',
            fontFamily: 'Public Sans',
            lineHeight: '24px'
          }}
        >
          Property Name
        </Typography>
        <Typography
          variant='body2'
          color='text.secondary'
          sx={{ fontFamily: 'Public Sans', fontSize: '15px', fontWeight: '400', lineHeight: '22px' }}
        >
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </Typography>
      </CardContent>
      <CardActions sx={{ direction: 'rtl' }}>
        <Button size='small'>
          <Image src={bed} alt='bed' />
        </Button>
        <Button size='small'>
          <Image src={location} alt='location' />
          <Typography sx={{ color: 'inherit', fontSize: '16px', marginRight: '5px', fontFamily: ' Dubai W23 Regular' }}>
            المعادي
          </Typography>
        </Button>
        <Button size='small' sx={{ fontSize: '16px' }}>
          <Image src={dimensions} alt='dimensions' />
          <Box sx={{ direction: 'ltr', fontFamily: 'Public Sans' }}>
            25 m<sup>2</sup>
          </Box>
        </Button>
      </CardActions>
    </Card>
  )
}
