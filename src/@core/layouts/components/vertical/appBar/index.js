// ** MUI Imports
import { styled } from '@mui/material/styles'
import MuiAppBar from '@mui/material/AppBar'
import MuiToolbar from '@mui/material/Toolbar'
import AddIcon from '@mui/icons-material/Add'

// ** Util Import
import { hexToRGBA } from 'src/@core/utils/hex-to-rgba'
import { Box } from '@mui/system'

// ** Next Import
import Image from 'next/image'

// ** Icon Import
import smartHome from 'public/images/icons/project-icons/smart-home.svg'
import { Button, Grid, Typography } from '@mui/material'
import Link from 'next/link'
import { useSettings } from 'src/@core/hooks/useSettings'
import { useRouter } from 'next/router'

const AppBar = styled(MuiAppBar)(({ theme }) => ({
  transition: 'none',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'transparent',
  color: theme.palette.text.primary,
  minHeight: theme.mixins.toolbar.minHeight,
  [theme.breakpoints.up('sm')]: {
    paddingLeft: theme.spacing(6),
    paddingRight: theme.spacing(6)
  },
  [theme.breakpoints.down('sm')]: {
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4)
  }
}))

const Toolbar = styled(MuiToolbar)(({ theme }) => ({
  width: '100%',
  marginTop: theme.spacing(4),
  borderRadius: theme.shape.borderRadius,
  padding: `${theme.spacing(0, 6)} !important`
}))

const LayoutAppBar = props => {
  const router = useRouter()

  const handleRoute = () => {
    router.push('/home/buildingslist/addbuilding')
  }

  // ** Props
  const { settings, appBarProps, appBarContent: userAppBarContent } = props

  // ** Vars
  const { skin, appBar, appBarBlur, contentWidth } = settings

  const appBarBlurEffect = appBarBlur && {
    '&:after': {
      top: 0,
      left: 0,
      zIndex: -1,
      width: '100%',
      content: '""',
      position: 'absolute',
      backdropFilter: 'blur(10px)',
      height: theme => `calc(${theme.mixins.toolbar.minHeight}px + ${theme.spacing(4)})`,
      mask: theme =>
        `linear-gradient(${theme.palette.background.default}, ${theme.palette.background.default} 18%, transparent 100%)`,
      background: theme =>
        `linear-gradient(180deg,${hexToRGBA(theme.palette.background.default, 0.7)} 44%, ${hexToRGBA(
          theme.palette.background.default,
          0.43
        )} 73%, ${hexToRGBA(theme.palette.background.default, 0)})`
    }
  }
  if (appBar === 'hidden') {
    return null
  }
  let userAppBarStyle = {}
  if (appBarProps && appBarProps.sx) {
    userAppBarStyle = appBarProps.sx
  }
  const userAppBarProps = Object.assign({}, appBarProps)
  delete userAppBarProps.sx

  const mode = settings.mode

  return (
    <AppBar
      elevation={0}
      color='default'
      className='layout-navbar'
      sx={{ ...appBarBlurEffect, ...userAppBarStyle }}
      position={appBar === 'fixed' ? 'sticky' : 'static'}
      {...userAppBarProps}
    >
      <Toolbar
        className='navbar-content-container'
        sx={{
          display: 'flex',
          flexDirection: 'column',
          ...(appBarBlur && { backdropFilter: 'blur(6px)' }),
          minHeight: theme => `${theme.mixins.toolbar.minHeight}px !important`,
          backgroundColor: theme => hexToRGBA(theme.palette.background.paper, appBarBlur ? 0.95 : 1),
          ...(skin === 'bordered' ? { border: theme => `1px solid ${theme.palette.divider}` } : { boxShadow: 2 }),
          ...(contentWidth === 'boxed' && {
            '@media (min-width:1440px)': { maxWidth: theme => `calc(1440px - ${theme.spacing(6 * 2)})` }
          })
        }}
      >
        <Box sx={{ width: '100%', display: 'flex', alignItems: 'center' }}>
          <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', marginTop: '20px' }}>
            {(userAppBarContent && userAppBarContent(props)) || null}
          </Box>
        </Box>
        <Box
          sx={{
            width: '104%',
            display: 'flex',
            justifyContent: 'center',
            marginTop: '20px',
            borderTop: '1px solid #DBDADE',
            paddingY: '5px'
          }}
        >
          <Button
            sx={{ display: 'flex', alignItems: 'center', paddingX: '10px', paddingY: '8px', color: '#4B465C' }}
            onClick={handleRoute}
          >
            <AddIcon sx={{ color: mode === 'dark' ? 'rgba(208, 212, 241, 0.78)' : '#4B465C' }} />
            <Typography
              sx={{
                fontFamily: 'Public Sans',
                fontSize: '15px',
                fontWeight: '400',
                marginLeft: '5px',
                color: mode === 'dark' ? 'rgba(208, 212, 241, 0.78)' : '#4B465C'
              }}
            >
              {settings.direction === 'rtl' ? ' إضافة إعلان/وحدة' : 'Add an ad/unit'}
            </Typography>
          </Button>
          <Link
            href={'/home'}
            sx={{ display: 'flex', alignItems: 'center', paddingX: '10px', paddingY: '8px', marginLeft: '10px' }}
          >
            <Button>
              <Typography
                sx={{
                  fontFamily: 'Public Sans',
                  fontSize: '15px',
                  fontWeight: '400',
                  marginRight: '5px',
                  color: mode === 'dark' ? 'rgba(208, 212, 241, 0.78)' : '#4B465C'
                }}
              >
                {settings.direction === 'rtl' ? 'الرئيسية' : 'Home'}
              </Typography>
              <Image
                src={smartHome}
                alt='smart-home'
                width={22}
                style={{ color: mode === 'dark' ? 'rgba(208, 212, 241, 0.78)' : '#4B465C' }}
              />
            </Button>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default LayoutAppBar
