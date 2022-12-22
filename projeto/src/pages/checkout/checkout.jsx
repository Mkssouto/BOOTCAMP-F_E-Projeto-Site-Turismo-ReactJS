import { useEffect, useState } from "react";
import Grid from '@mui/material/Grid';
import CartComponent from '../../components/cart/cart';
import Button from '../../components/button/button';
import TextField from "../../components/textfield/textfield";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import PixIcon from '@mui/icons-material/Pix';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import Text from '../../components/text/text';
import Stack from '@mui/material/Stack';



const Checkout = () => {
    const [cart, setCart] = useState([]);
    

    const loadData = async () => {
        let cartLocal = window.localStorage.getItem('cart');
        if(cartLocal){
            cartLocal = JSON.parse(cartLocal)
            setCart(cartLocal)
        }
    }

    useEffect(() => {
        loadData();
    }, [])

    return <Grid container spacing={2} style={{
                padding: '15px',
                boxSizing: 'border-box',
                margin: '0 auto',
                maxWidth: '1190px',
                width:' 100%'
            }}>
            <Grid item xs={12} sm={12} md={7} style={{
                    border: '2px solid #ccc',
                    boxSizing: 'border-box',
            }}>
                <Grid container spacing={2} style={{
                    padding: '14px'
                }}>
                    <Grid xs={12} sm={12} md={6} style={{
                        padding: '2px',
                        boxSizing: 'border-box',
                    }}>
                        <TextField 
                            type="text"
                            label="Nome"
                            fullWidth={true}
                        />
                    </Grid>
                    <Grid xs={12} sm={12} md={6} style={{
                        padding: '2px',
                        boxSizing: 'border-box',
                    }}>
                        <TextField 
                            type="text"
                            label="Sobrenome"
                            fullWidth={true}
                        />
                    </Grid>
                    <Grid xs={12} style={{
                        padding: '2px',
                        boxSizing: 'border-box',
                    }}>
                        <TextField 
                            label="E-mail"
                            type="email"
                            fullWidth={true}
                        />
                    </Grid>
                    <Grid xs={12} style={{
                        padding: '2px',
                        boxSizing: 'border-box',
                    }}>
                        <TextField 
                            type="tel"
                            label="Celular"
                            fullWidth={true}
                        />
                    </Grid>
                    <Grid xs={12} sm={12} md={9} style={{
                        padding: '2px',
                        boxSizing: 'border-box',
                    }}>
                        <TextField 
                            type="text"
                            label="Endereço"
                            fullWidth={true}
                        />
                    </Grid>
                    <Grid xs={12} sm={12} md={3} style={{
                        padding: '2px',
                        boxSizing: 'border-box',
                    }}>
                        <TextField 
                            type="text"
                            label="Número"
                            fullWidth={true}
                        />
                    </Grid>
                    <Grid xs={12} style={{
                        padding: '2px',
                        boxSizing: 'border-box',
                        marginTop: '15px'
                    }}>
                       <FormControl>
                            <FormLabel id="demo-row-radio-buttons-group-label">Forma de pagamento</FormLabel>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                                sx={{justifyContent: 'space-bettwen'}}
                            >
                                <CreditCardIcon sx={{
                                    alignSelf: 'center',
                                    color: 'rgba(0, 0, 0, 0.6)',
                                    marginRight: '5px'
                                }}/>
                                <FormControlLabel value="female" control={<Radio />} label="Cartão de Credito" labelPlacement="end"
                                sx={{color: 'rgba(0, 0, 0, 0.6)', paddingRight: '50px'}}/>  
                                <PixIcon sx={{
                                    alignSelf: 'center',
                                    color: 'rgba(0, 0, 0, 0.6)',
                                    marginRight: '5px'
                                }}/>
                                <FormControlLabel value="male" control={<Radio />} label="Pix" labelPlacement="end" 
                                sx={{color: 'rgba(0, 0, 0, 0.6)', paddingRight: '50px'}}/>
                                <AccountBalanceIcon sx={{
                                    alignSelf: 'center',
                                    color: 'rgba(0, 0, 0, 0.6)',
                                    marginRight: '5px'
                                }}/>
                                 <FormControlLabel value="other" control={<Radio />} label="Boleto" labelPlacement="end" 
                                 sx={{color: 'rgba(0, 0, 0, 0.6)'}}/>
                                
                            </RadioGroup>
                            </FormControl>

                    </Grid>
                    <Grid xs={12} style={{
                        padding: '2px',
                        boxSizing: 'border-box',
                    }}>
                        <TextField 
                            label="Número do cartão"
                            type="text"
                            fullWidth={true}
                        />
                    </Grid>
                    <Grid xs={12} style={{
                        padding: '2px',
                        boxSizing: 'border-box',
                    }}>
                        <TextField 
                            type="text"
                            label="Nome igual ao impresso no cartão"
                            fullWidth={true}
                        />
                    </Grid>
                    <Grid xs={12} sm={12} md={6} style={{
                        padding: '2px',
                        boxSizing: 'border-box',
                    }}>
                        <TextField 
                            type="text"
                            label="Validade"
                            fullWidth={true}
                        />
                    </Grid>
                    <Grid xs={12} sm={12} md={6} style={{
                        padding: '2px',
                        boxSizing: 'border-box',
                    }}>
                        <TextField 
                            type="text"
                            label="Código de segurança"
                            fullWidth={true}
                        />
                    </Grid>

                    <Grid xs={12} sm={12} md={3} style={{
                        padding: '2px',
                        boxSizing: 'border-box',
                    }}>
                        <Button title="Pagar" buttonStyle={{
                            marginTop: '14px'
                        }}/>
                    </Grid>
                </Grid>
            </Grid>
            
            <Grid item xs={12} sm={12} md={5} style={{
                    border: '2px solid #ccc',
                    boxSizing: 'border-box',
                    padding: '10px'
            }}>
                <Text
                    variant='h6 '
                    component='p'
                    text="RESUMO DA COMPRA"
                    boxStyle={{
                        fontSize: '20px',
                        color: '#001b33',
                        borderBottom: '1.5px solid rgba(0, 0, 0, 0.6)',
                        paddingBottom: '10px',
                        alignSelf: 'center',
                        margin: '10px 0 20px 0'
                    }}
                />
                <Grid container spacing={2} style={{
                    padding: '10px',
                    boxSizing: 'border-box'
                }}>
                    <Grid>{ cart.length > 0 ? 
                        cart.map((product, idx) => {
                        return <CartComponent quantity={false} del={false} product={product}/>
                        })
                    : "Nenhum produto adicionado ao carrinho"}
                    </Grid>
                    
                </Grid>

                <Text
                    variant='p'
                    component='p'
                    text="TOTAL A PAGAR: R$ 5.000,00"
                    boxStyle={{
                        fontSize: '18px',
                        alignItens: 'justify',
                        color: '#001b33',
                        alignSelf: 'center',
                        paddingTop: '10px',
                        margin: '50px 0 20px 0',
                        borderTop: '1.5px solid rgba(0, 0, 0, 0.6)',
                        justifyContent: 'end',
                        display: 'flex'
                    }}
                />
            </Grid>
        </Grid>
}

export default Checkout;