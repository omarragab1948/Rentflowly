// ** MUI Imports
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Components
import Autocomplete from 'src/layouts/components/Autocomplete'
import ModeToggler from 'src/@core/layouts/components/shared-components/ModeToggler'
import UserDropdown from 'src/@core/layouts/components/shared-components/UserDropdown'
import LanguageDropdown from 'src/@core/layouts/components/shared-components/LanguageDropdown'
import NotificationDropdown from 'src/@core/layouts/components/shared-components/NotificationDropdown'
import ShortcutsDropdown from 'src/@core/layouts/components/shared-components/ShortcutsDropdown'

// ** Hook Import
import { useAuth } from 'src/hooks/useAuth'

// ** Next Import
import Image from 'next/image'

// ** logo Import
import logo from 'public/images/apple-touch-icon.png'
import { Button, Divider, Grid, Typography } from '@mui/material'
import Link from 'next/link'

const notifications = [
  {
    meta: 'Yesterday',
    avatarColor: 'primary',
    subtitle: '5 hours ago',
    avatarText: 'Robert Austin',
    title: 'New user registered.'
  },
  {
    meta: '11 Aug',
    avatarAlt: 'message',
    title: 'New message received 👋🏻',
    avatarImg: '/images/avatars/5.png',
    subtitle: 'You have 10 unread messages'
  },
  {
    meta: '25 May',
    title: 'Paypal',
    avatarAlt: 'paypal',
    subtitle: 'Received Payment',
    avatarImg: '/images/misc/paypal.png'
  },
  {
    meta: '19 Mar',
    avatarAlt: 'order',
    title: 'Received Order 📦',
    avatarImg: '/images/avatars/3.png',
    subtitle: 'New order received from John'
  },
  {
    meta: '27 Dec',
    avatarAlt: 'chart',
    subtitle: '25 hrs ago',
    avatarImg: '/images/misc/chart.png',
    title: 'Finance report has been generated'
  }
]

const shortcuts = [
  {
    title: 'Calendar',
    url: '/apps/calendar',
    icon: 'tabler:calendar',
    subtitle: 'Appointments'
  },
  {
    title: 'Invoice App',
    url: '/apps/invoice/list',
    icon: 'tabler:file-invoice',
    subtitle: 'Manage Accounts'
  },
  {
    title: 'User App',
    icon: 'tabler:users',
    url: '/apps/user/list',
    subtitle: 'Manage Users'
  },
  {
    url: '/apps/roles',
    icon: 'tabler:lock',
    subtitle: 'Permissions',
    title: 'Role Management'
  },
  {
    subtitle: 'CRM',
    title: 'Dashboard',
    url: '/dashboards/crm',
    icon: 'tabler:device-analytics'
  },
  {
    title: 'Settings',
    icon: 'tabler:settings',
    subtitle: 'Account Settings',
    url: '/pages/account-settings/account'
  },
  {
    icon: 'tabler:help',
    title: 'Help Center',
    url: '/pages/help-center',
    subtitle: 'FAQs & Articles'
  },
  {
    title: 'Dialogs',
    icon: 'tabler:square',
    subtitle: 'Useful Popups',
    url: '/pages/dialog-examples'
  }
]

const AppBarContent = props => {
  // ** Props
  const { hidden, settings, saveSettings, toggleNavVisibility } = props

  // ** Hook
  const auth = useAuth()
  const mode = settings.mode

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'end' }} className='to-hidden'>
        <Link
          href={'/home'}
          style={{ display: 'flex', alignItems: 'center', marginRight: '5px', textDecoration: 'none' }}
        >
          <Image src={logo} alt='logo' width={34} />
          <Typography
            sx={{
              fontFamily: 'Public Sans',
              marginLeft: '10px',
              fontSize: '22px',
              fontWeight: '700',
              color: mode === 'dark' ? 'rgba(208, 212, 241, 0.78)' : '#4B465C'
            }}
          >
            Rentflowly
          </Typography>
        </Link>
        <Box
          className='actions-left'
          sx={{ mr: 2, display: 'flex', alignItems: 'center', justifyContent: 'end', width: '100%' }}
        >
          {auth.user && <Autocomplete hidden={hidden} settings={settings} />}
        </Box>
        <Box className='actions-right' sx={{ display: 'flex', alignItems: 'center' }}>
          <LanguageDropdown settings={settings} saveSettings={saveSettings} />
          <ModeToggler settings={settings} saveSettings={saveSettings} />
          {auth.user && (
            <>
              <ShortcutsDropdown settings={settings} shortcuts={shortcuts} />
              <NotificationDropdown settings={settings} notifications={notifications} />
              <UserDropdown settings={settings} />
            </>
          )}
        </Box>
      </Box>
      <Grid
        container
        sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'end' }}
        className='from-hidden'
      >
        <Grid xs={12} sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link
            href={'/home'}
            style={{ display: 'flex', alignItems: 'center', marginRight: '5px', textDecoration: 'none' }}
          >
            <Image src={logo} alt='logo' width={34} />
            <Typography
              sx={{
                fontFamily: 'Public Sans',
                marginLeft: '10px',
                fontSize: '22px',
                fontWeight: '700',
                color: mode === 'dark' ? 'rgba(208, 212, 241, 0.78)' : '#4B465C'
              }}
            >
              Rentflowly
            </Typography>
          </Link>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <LanguageDropdown settings={settings} saveSettings={saveSettings} />
            <ModeToggler settings={settings} saveSettings={saveSettings} />
            {auth.user && (
              <>
                <ShortcutsDropdown settings={settings} shortcuts={shortcuts} />
                <NotificationDropdown settings={settings} notifications={notifications} />
                <UserDropdown settings={settings} />
              </>
            )}
          </Box>
        </Grid>
        <Grid xs={12} sx={{ mt: '10px', display: 'flex', alignItems: 'center', justifyContent: 'end', width: '100%' }}>
          {auth.user && <Autocomplete hidden={hidden} settings={settings} />}
        </Grid>
      </Grid>
    </Box>
  )
}

export default AppBarContent
