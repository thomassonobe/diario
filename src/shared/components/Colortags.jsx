import * as React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';

export const colortags = [
  '#ef9a9a',
  '#f48fb1',
  '#ce93d8',
  '#b39ddb',
  '#9fa8da',
  '#90caf9',
  '#80deea',
  '#80cbc4'
]

export const ColortagsGrid = ({tags}) => 
  <Grid container spacing={1} wrap='nowrap' sx={{ flex: 0 }}>
    {tags.sort().map(c =>
      <Grid item>
        <Box className="quadrado" sx={{backgroundColor: colortags[c]}}></Box>
      </Grid>)}
  </Grid>

export const ColortagsSelector = ({tags, setTags}) => {
  return (
    <ToggleButtonGroup value={tags} onChange={(_, v) => setTags(v)}>
      {
        colortags.map((c, i) =>
          <ToggleButton key={i} value={i}>
            <div className="quadrado" style={{ backgroundColor: c }}></div>
          </ToggleButton>)
      }
    </ToggleButtonGroup>
  )
}