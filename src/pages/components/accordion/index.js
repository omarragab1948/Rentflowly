import * as React from 'react'
import { styled } from '@mui/material/styles'
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp'
import MuiAccordion from '@mui/material/Accordion'
import MuiAccordionSummary from '@mui/material/AccordionSummary'
import MuiAccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import Checkbox from '@mui/material/Checkbox'
import { Box } from '@mui/system'
import { useSettings } from 'src/@core/hooks/useSettings'

const Accordion = styled(props => <MuiAccordion disableGutters elevation={0} square {...props} />)(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0
  },
  '&:before': {
    display: 'none'
  },
  margin: '0',
  borderRadius: '0'
}))

const AccordionSummary = styled(props => (
  <MuiAccordionSummary expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />} {...props} />
))(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, .05)' : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)'
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1)
  }
}))

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)'
}))

export default function CustomizedAccordions({ mode }) {
  const [expanded, setExpanded] = React.useState('panel1')

  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false)
  }
  const { settings } = useSettings()

  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls='panel1d-content' id='panel1d-header'>
          <Typography
            sx={{
              fontSize: '18px',
              fontWeight: '500',
              lineHeight: '24px',
              color: mode === 'dark' ? 'rgba(208, 212, 241, 0.78)' : '#4B465C',
              fontFamily: 'Public Sans'
            }}
          >
            {settings.direction === 'rtl' ? 'المختصر' : 'Summary'}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Checkbox defaultChecked />
            <Typography
              sx={{
                fontSize: '16px',
                fontWeight: '500',
                lineHeight: '22px',

                color: mode === 'dark' ? 'rgba(208, 212, 241, 0.78)' : '#4B465C',
                fontFamily: 'Dubai'
              }}
            >
              {settings.direction === 'rtl' ? 'الوحدة متاحة' : 'Unit is available'}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Checkbox defaultChecked />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography
                sx={{
                  fontSize: '16px',
                  fontWeight: '500',
                  lineHeight: '22px',

                  color: mode === 'dark' ? 'rgba(208, 212, 241, 0.78)' : '#4B465C',
                  fontFamily: 'Dubai'
                }}
              >
                {settings.direction === 'rtl' ? ' الإيجار (شهريًا)' : 'Rent (monthly)'}
              </Typography>
              <Typography sx={{ fontSize: '16px', fontWeight: '400', fontFamily: 'Dubai' }}>
                {settings.direction === 'rtl' ? '1500 جنيه مصري' : 'EGP 1500'}
              </Typography>
            </Box>
          </Box>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls='panel2d-content' id='panel2d-header'>
          <Typography sx={{ fontFamily: 'Public Sans', lineHeight: '24px', fontSize: '18px', fontWeight: '500' }}>
            {settings.direction === 'rtl' ? 'التواصل والاستفسار' : 'Communication and inquiries'}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}
