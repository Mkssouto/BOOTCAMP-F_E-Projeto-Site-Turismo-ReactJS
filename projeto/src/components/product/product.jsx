import PropTypes from 'prop-types';
import Text from '../text/text';
import Button from '../button/button';
import Chip from '@mui/material/Chip';
import React from 'react';
import { Link } from 'react-router-dom';

import CheckIcon from '@mui/icons-material/Check';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import { bgcolor } from '@mui/system';


const Product = ({ product }) => {
      const {
          id,
          image,
          name,
          price,
          promo_price,
          period,
          extra,
          description
      } = product;
  
  
      return <div style={{ 
        bgcolor: '#001b33'}}>

      <Card sx={{ 
        maxWidth: 320,
        borderRadius: '20px',
        position: 'relative'
         }}>
        
      <div style={{
        height: '180px'
      }}>
        <CardMedia
        component="img"
        height="100%"
        image={image}
        alt="teste"
        />
      </div>

        <CardContent>
        <Typography variant="body2" color="text.secondary">
        <Text
                  variant='h5'
                  component='p'
                  text={name}
                  boxStyle={{
                    color: '#001b33',
                    margin: '10px 0 '
                  }}
               />
               
              <Text
                 icon={<CheckIcon sx={{ fontSize: 16, paddingRight: 1, color: '#001b33'}}/>}
                  variant='p'
                  component='p'
                  text={(period) + " de hospedagem"}
                  boxStyle={{
                      fontSize: '15px',
                      margin: '5px 0',
                  }}
               />               
               <Text
                  icon={<CheckIcon sx={{ fontSize: 16, paddingRight: 1, color: '#001b33'}}/>}
                  variant='p'
                  component='p'
                  text="Passagem aerea ida e volta"
                  boxStyle={{
                      fontSize: '15px',
                      margin: '5px 0',
                  }}
               />
               <Text
                  icon={<CheckIcon sx={{ fontSize: 16, paddingRight: 1, color: '#001b33'}}/>}
                  variant='p'
                  component='p'
                  text={extra}
                  boxStyle={{
                      fontSize: '15px',
                      margin: '5px 0',
                  }}
               /> 
              
               
             <Text
                  variant='p'
                  component='p'
                  text="Pacote por pessoa"
                  boxStyle={{
                      margin: 0,
                      padding: '40px 0 15px 0'
                  }}
               />
               {
                promo_price ? 
               <Chip 
                    sx={{
                      bgcolor: 'red',
                      color: '#fff'
                    }}
                    label={(100 - (promo_price / price) * 100).toFixed(0) + "%"} 
                     /> : ""
                  }    

              <p style={{
                    fontSize: promo_price ? '1.2em' : '2.0em',
                    color: promo_price ? '#aaa' : '#001b33',
                    textDecoration: promo_price ? 'line-through' : 'none',
                    margin: '0',
                    padding: promo_price ? '10px 0 0 0': '65px 0 10px 0'
                }}>
                    {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(price)}
                </p>
                {
                    promo_price ? <p style={{
                        fontSize: '2.0em',
                        color: '#001b33',
                        margin: '0',
                        padding: '0 0 10px 0',
                         }}>
                        {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(promo_price)}
                    </p> : ''
                }
                

              <Text
                  variant='p'
                  component='p'
                  text="Em até 15 vezes."
                  boxStyle={{
                      margin: '5px 0',
                      fontSize: '0.8em'
                  }}
               /> 
               
               
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon 
          // sx={{color: 'red'}}
          />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon 
          sx={{color: '#001b33'}}/>
        </IconButton>
        
        <Link to={`/cart`}>
        <Button
                fullWidth={false}
                title={<LocalGroceryStoreOutlinedIcon />}
                buttonStyle={{  
                  backgroundColor: 'yellow',
                  borderRadius: '20px',
                  marginRight: '10px',
                  marginLeft: '10px',
                  color: '#001b33'
                }}
             />
        </Link>

        <Link to={`/product/${id}`}>
        <Button
                fullWidth={false}
                title={'Comprar'}
                buttonStyle={{  
                  backgroundColor: '#001b33f2',
                  borderRadius: '20px'
                }}
             />
        </Link>

        </CardActions>
        
        </Card>
      </div>
      ;
    }
          
        
  Product.defaultPros = {
      id: "",
      image: null,
      name: "",
      price: 0.0,
      promo_price: 0.0,
      period: "",
      extra: "",
      description: ""
  }
  
  
  Product.propTypes = {
      id: PropTypes.number,
      image: PropTypes.string,
      name: PropTypes.string,
      price: PropTypes.number,
      promo_price: PropTypes.number,
      period: PropTypes.string,
      extra: PropTypes.string,
      description: PropTypes.string
  }
  
  export default Product;



