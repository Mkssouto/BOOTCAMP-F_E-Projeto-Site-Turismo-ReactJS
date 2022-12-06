
import { FaRegPaperPlane } from 'react-icons/fa';
import Logo from "../../assets/img/logo.png";

import Button from "../../components/button/button";
import TextField from "../../components/textfield/textfield";
import Avatar from "../../components/avatar/avatar";
import Text from "../../components/Text/text";
import Checkbox from "../../components/checkbox/checkbox";

const Login = () => {
    const textFieldStyle = {
        width: "100%",
    }

    return <div style={{
        width: "100%",
        maxWidth: "400px",
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingLeft: '1em',
        paddingRight: '1em',
        boxSizing: 'border-box',
        marginTop: '3em'
    }}> 
            <Avatar
                image={Logo}
                style={{
                    width: '100px',
                    margin: '2em auto',
                    display: 'block'
                }}
            />
            <Text
                text="Efetue login"
                type="h2"
                style={{
                    color: "#3498db",
                    textAlign: 'center',
                    textTransform: 'uppercase'
                }}/>
            <TextField
                type="email"
                label="E-mail"
                id="email"
                textFieldStyle={textFieldStyle}
            />
            <TextField
                type="password"
                label="Senha"
                id="password"
                textFieldStyle={textFieldStyle}
            />
            <Checkbox 
                id="connected"
                label={"Manter conectado"}
                checked={false}
            />
            <Button
                buttonStyle={{
                    textTransform: "uppercase",
                    color: "#fff",
                    backgroundColor: "#3498db",
                    width: "100%",
                    marginTop: '16px'
                }}
                StartIcon={FaRegPaperPlane}
                uppercase={true}
                title={"Entrar"}
                type={"button"}/>
        </div>
}

export default Login;