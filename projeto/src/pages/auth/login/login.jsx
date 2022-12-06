import '../auth.css';

import { useState } from 'react';
import SendTwoToneIcon from '@mui/icons-material/SendTwoTone';
import { Link } from 'react-router-dom';
import Logo from "../../../assets/img/Tround_Ftransparente.png";


import Button from "../../../components/button/button";
import TextField from "../../../components/textfield/textfield";
import Avatar from "../../../components/avatar/avatar";
import Text from "../../../components/text/text";
import Checkbox from "../../../components/checkbox/checkbox";
import { Typography } from '@mui/material';

const Login = () => {
    const textFieldStyle = {
        width: "100%",
    }

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [checkedState, setCheckedState] = useState(false);

    const login = () => {
        console.log(email);
        console.log(password);
    }


    return <section style={{
        backgroundColor: '#001b33',
        width: '100vw',
        height: '100vh',
        paddingTop: '20px',
        // fontFamily: 'Lato'
    }}>
    
    <div style={{
        width: "100%",
        maxWidth: "450px",
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingLeft: '1em',
        paddingRight: '1em',
        boxSizing: 'border-box',
        marginTop: '3em',
        backgroundColor: 'rgb(49 97 139 / 95%)',
        // backgroundColor: '#f0f5f0',
        borderRadius: '20px'
    }}> 
    
            <Avatar
                image={Logo}
                style={{
                    width: '200px',
                    margin: '20px auto',
                    paddingTop: '20px',
                    display: 'block'
                }}
            />
            <Text
                text="Efetue login"
                type="h2"
                style={{
                    color: 'white',
                    textAlign: 'center',
                    textTransform: 'uppercase'
                }}
                />

            <TextField
                fullWidth={true}
                variant="filled"
                value={email}
                type="email"
                label="E-mail"
                id="email"
                onChange={(e) => setEmail(e.target.value) }
                textFieldStyle={textFieldStyle}
            />
            <TextField
                fullWidth={true}
                variant="filled"
                value={password}
                type="password"
                label="Senha"
                id="password"
                onChange={(e) => setPassword(e.target.value) }
                textFieldStyle={textFieldStyle}
            />
            <Checkbox 
                id="connected"       
                label={"Manter conectado"}
                checked={checkedState}
                onChange={() => setCheckedState(!checkedState)}
            />
           

            <Link to="/register" style={{
                textDecoration: null
            }}>
                <Button
                    buttonStyle={{
                        marginTop: '16px',
                        borderRadius: '15px',
                        borderColor: '#fff',
                        color: '#fff'
                    }}
                    // variant={"outlined"}
                    uppercase={true}
                    size={"large"}
                    title={"Registrar"}
                    type={"button"}
                    fullWidth={true}/>
            </Link>

            <Button
                buttonStyle={{
                    marginTop: '16px',
                    textTransform: "uppercase",
                    color: "#fff",
                    backgroundColor: "#001b33",
                    width: "100%",
                    marginTop: '20px',
                    marginBottom: '20px',
                    borderRadius: "15px",
                    marginBottom: '50px'
                }}
                // StartIcon={SendTwoToneIcon}
                uppercase={true}
                size={"large"}
                title={"Entrar"}
                type={"button"}
                fullWidth={true}
                onClick={login}/>
        </div>
        </section>
}

export default Login;