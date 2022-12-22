import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Text from '../text/text';
import Rating from '@mui/material/Rating';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Select from "../select/select";
import { useState } from 'react';
import Button from '../button/button';
import { Link } from 'react-router-dom';
import * as React from 'react';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import BedroomParentIcon from '@mui/icons-material/BedroomParent';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import { useNavigate } from 'react-router-dom';
import { buy, addToCart } from '../../services/buy';


const ProductItem = ({ product }) => {
    const navigate = useNavigate();

    const [value, setValue] = useState(4);
    const [size, setSize] = useState([]);
    const [color, setColor] = useState([]);

    return <Container sx={{bgColor: '#fff'}}>
        <Grid
        sx={{
            maxWidth: '1080px',
            margin: '0 auto'
        }}
        container spacing={2}>
        <Grid xs={12} md={6}>
            <Box
                sx={{
                    width: '100%',
                    padding: '5%',
                    boxSizing: 'border-box'
                }}
            >
                <img
                    style={{
                        width: '100%',
                        maxHeight: '350px'
                    }}
                    src={product.image} />

                <Text
                    variant='p'
                    component='p'
                    text={product.description}
                    boxStyle={{
                        textAlign: 'Justify',
                        lineHeight: '22px',
                        margin: '20px 0 0',
                    }}
                />

            </Box>
        </Grid>
        <Grid xs={12} md={6}>
            <Box
                sx={{
                    width: '100%',
                    padding: '5%',
                    boxSizing: 'border-box'
                }}
            >
                <Text
                    variant='h4'
                    component='h1'
                    text={product.name}
                    boxStyle={{
                        color: '#001b33',
                    }}
                />

                <Stack direction="row" spacing={1}>
                    <Rating
                        name="simple-controlled"
                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                    />
                </Stack>

                <Chip
                    sx={{
                        bgcolor: "#001b33",
                        fontSize: '26px',
                        color: '#fff',
                        letterSpacing: '2px',
                        marginTop: '23px',
                        marginLeft: 0
                    }}
                    label="Viaje entre Mar/2024 e Set/2024"
                />


                <Text
                    icon={<AirplanemodeActiveIcon sx={{
                        fontSize: '35px',
                        paddingRight: '5px',
                        borderBox: 'box-sizing',
                        color: '#001b33'
                    }} />}
                    variant='p'
                    component='p'
                    text="Passagem aerea ida e volta - Classe Econômica"
                    boxStyle={{
                        fontSize: '18px',
                        color: '#001b33',
                        alignSelf: 'center',
                        margin: '10px 0 5px 0'
                    }}
                />

                <Text
                    icon={<BedroomParentIcon sx={{
                        fontSize: '35px',
                        paddingRight: '5px',
                        borderBox: 'box-sizing',
                        alignSelf: 'center',
                        color: '#001b33'
                    }} />}
                    variant='p'
                    component='p'
                    text="Hospedagem em hotel 3 ou 4 estrelas"
                    boxStyle={{
                        fontSize: '18px',
                        color: '#001b33',
                        margin: '5px 0 5px 0'
                    }}
                />
                <Text
                    icon={<CalendarMonthIcon sx={{
                        fontSize: '35px',
                        paddingRight: '5px',
                        borderBox: 'box-sizing',
                        alignSelf: 'center',
                        color: '#001b33'
                    }} />}
                    variant='p'
                    component='p'
                    text={product.period}
                    boxStyle={{
                        fontSize: '18px',
                        color: '#001b33',
                        margin: '5px 0 5px 0'
                    }}
                />
                <Text
                    icon={<LibraryAddIcon sx={{
                        fontSize: '35px',
                        paddingRight: '5px',
                        borderBox: 'box-sizing',
                        alignSelf: 'center',
                        color: '#001b33'
                    }} />}
                    variant='p'
                    component='p'
                    text={product.extra}
                    boxStyle={{
                        fontSize: '18px',
                        color: '#001b33',
                        margin: '5px 0 10px 0'
                    }}
                />

                {
                    product.promo_price ?
                        <Chip
                            sx={{
                                bgcolor: 'red',
                                color: '#fff'
                            }}
                            label={(100 - (product.promo_price / product.price) * 100).toFixed(0) + "%"}
                        /> : ""
                }

                <p style={{
                    fontSize: product.promo_price ? '1.2em' : '2.0em',
                    color: product.promo_price ? '#aaa' : '#001b33',
                    textDecoration: product.promo_price ? 'line-through' : 'none',
                    margin: '0',
                    padding: product.promo_price ? '10px 0 0 0' : '65px 0 10px 0'
                }}>
                    {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.price)}
                </p>
                {
                    product.promo_price ? <p style={{
                        fontSize: '2.0em',
                        color: '#001b33',
                        margin: '0',
                        padding: '0 0 10px 0',
                    }}>
                        {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.promo_price)}
                    </p> : ''
                }

                <Stack direction="column" sx={{
                    marginTop: 1,
                    marginBottom: 1
                }}>
                    <span style={{
                        marginTop: '10px', marginBottom: '5px'
                    }}>
                        <Select
                            sx={{ borderRadius: '20px' }}
                            id="select-color"
                            label={"Viajantes"}
                            chips={false}
                            value={color}
                            onChange={setColor}
                            options={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                        />
                    </span>
                    <span style={{
                        marginTop: '5px', marginBottom: '20px'
                    }}>
                        <Select
                            sx={{ borderRadius: '20px' }}
                            id="select-color"
                            label={"Periodo"}
                            chips={false}
                            value={color}
                            onChange={setColor}
                            options={['Março 2024', 'Abril 2024', 'Maio 2024', 'Junho 2024', 'Julho 2024', 'Agosto 2024', 'Setembro 2024']}
                        />
                    </span>
                </Stack >

                <Stack direction="row" >
                    
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
                            onClick={() => buy(product, navigate)}
                        />
                    
                    <Link to={`/cart/`}>    
                        <Button
                            fullWidth={false}
                            title={'Comprar'}
                            buttonStyle={{
                                backgroundColor: '#001b33f2',
                                borderRadius: '20px'
                            }}
                            onClick={() => addToCart(product)}
                        />
                    </Link>
                   

                </Stack>
            </Box>
        </Grid>
    </Grid>
    </Container>
}

export default ProductItem;