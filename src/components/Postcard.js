import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
// import { styled } from '@mui/material/styles';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
// import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
// import IconButton, { IconButtonProps } from '@mui/material/IconButton';
// import FavoriteIcon from '@mui/icons-material/Favorite';



function Postcard() {
    return (
        <>
            <Container maxWidth="sm">
            <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        // avatar={
        // //   <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
        // //     R
        // //   </Avatar>
        // }
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image="/static/images/cards/paella.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
        </CardContent>
    </Card>
            </Container>{/* <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg sx={{ width: 56, height: 56 }}" /> */}
        </>
                        
    )
};

export default Postcard;