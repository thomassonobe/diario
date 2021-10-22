import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

const CardAnotacao = (props) => {
  const { title, dailyNote, humor } = props.daily
  return (
    <>
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item s={1}>
            <h3>{humor}</h3>
          </Grid>
          <Grid item s={1}>
            <h3>{title}</h3>
          </Grid>
        </Grid>
      </Box>
        
        <span>01/01/1999</span>
        <p>{dailyNote}</p>
      </CardContent>

      <CardActions>
        <Button size="small">Ver</Button>
        <Button size="small">Editar</Button>
      </CardActions>
    </Card>

    <br />
    </>
  );
}

export default CardAnotacao;