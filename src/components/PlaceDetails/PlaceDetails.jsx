import React from "react";
import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import Rating from "@material-ui/lab/Rating";

import useStyles from './styles';
const imgurl='data:image/jpeg;base64,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';
const PlaceDetails = ({ place ,selected,refProp}) => {
    const classes = useStyles();
    if (selected) refProp?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    return (
        <Card elevation={6}>
            <CardMedia
                style={{ height: 350 }}
                image={place.photo ? place.photo.images.large.url : imgurl}
                title={place.name}
            />
            <CardContent>
                <Typography gutterBottom variant='h5'>{place.name}</Typography>
                <Box justifyContent='space-between' display='flex'>
                    <Rating name="size-small" defaultValue={place.rating} size="small" />
                    <Typography variant="subtitle0">{place.num_reviews} Reviews</Typography>
                </Box>
                
                <Box justifyContent='space-between' display='flex'>
                    <Typography variant="subtitle1">Price</Typography>
                    <Typography variant="subtitle1">{place.price_level}</Typography>
                </Box>
                <Box justifyContent='space-between' display='flex'>
                    <Typography variant="subtitle1">Ranking</Typography>
                    <Typography variant="subtitle1">{place.ranking}</Typography>
                </Box>
                {place?.awards?.map((award) => (
                <Box display="flex" justifyContent="space-between" my={1} alignItems="center">
                    <img src={award.images.small} />
                    <Typography variant="subtitle2" color="textSecondary">{award.display_name}</Typography>
                </Box>
                ))}
                
                {
                    place?.cuisine?.map((cu) => (
                        
                           
                        <Chip key={cu.name} label={cu.name} size='small' className={ classes.chip} />
                            
                            
                       
                    ))
                }

                {
                    place?.address && (
                        <Typography gutterBottom variant="body2" color="textSecondary" className={classes.subtitle}>
                            <LocationOnIcon/>{place.address}
                        </Typography>
                    )
                }
                {
                    place?.phone && (
                        <Typography gutterBottom variant="body2" color="textSecondary" className={classes.spacing}>
                            <PhoneIcon/>{place.phone}
                        </Typography>
                    )
                }
            </CardContent>
            <CardActions>
                <Button size="small" color="primary" onClick={() => window.open(place.web_url, '_blank')}>
                Trip Advisor
                </Button>
                <Button size="small" color="primary" onClick={() => window.open(place.website, '_blank')}>
                Website
                </Button>
            </CardActions>
            
        </Card>
    );
}

export default PlaceDetails;