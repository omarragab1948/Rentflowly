// ** MUI Imports
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'

// ** Custom Components Imports
import CardSnippet from 'src/@core/components/card-snippet'

// ** Demo Components Imports
import PaginationSizes from 'src/views/components/pagination/PaginationSizes'
import PaginationSimple from 'src/views/components/pagination/PaginationSimple'
import PaginationRanges from 'src/views/components/pagination/PaginationRanges'
import PaginationRounded from 'src/views/components/pagination/PaginationRounded'
import PaginationButtons from 'src/views/components/pagination/PaginationButtons'
import PaginationOutlined from 'src/views/components/pagination/PaginationOutlined'
import PaginationDisabled from 'src/views/components/pagination/PaginationDisabled'
import PaginationControlled from 'src/views/components/pagination/PaginationControlled'

// ** Source code imports
import * as source from 'src/views/components/pagination/PaginationSourceCode'

// Styled component for Grid container
const GridContainer = styled(Grid)(({ theme }) => ({
  '& .demo-space-y > *': {
    marginBottom: theme.spacing(5.2),
    '&:last-of-type': {
      marginBottom: 0
    }
  }
}))

const Pagination = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <CardSnippet
          title='Rounded Pagination'
          code={{
            tsx: null,
            jsx: source.PaginationRoundedJSXCode
          }}
        ></CardSnippet>
        <PaginationRounded />
      </Grid>
    </Grid>
  )
}

export default Pagination
