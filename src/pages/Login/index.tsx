import React,{useState} from 'react';
import Lottie from 'lottie-react-web'
import { 
    Container, 
    Input, 
    Form, 
    Button, 
    ErrorMessage ,
    Lamp
} from './styles';
import { IReducers } from '../../store/reducers/index'
import { ThemeTypes } from '../../store/types/theme'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import SuccessAnimation from '../../animation/success.json'
import userAnimation from '../../animation/user2.json'

interface IForm {
    user: string;
    password:string;
}

const successAnimationOptions = {
    loop:false,
    autoplay: true,
    speed:10,
    animationData: SuccessAnimation,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
}

const userAnimationOptions = {
    loop:false,
    autoplay: true,
    speed:-1,
    animationData: userAnimation,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
}

const Login: React.FC = () => {
    const [successLogIn, setSuccessLogin] = useState<boolean>(false)
    const [data, setData] = useState<IForm>({} as IForm)
    const [error,setError] = useState<boolean>(false)
    
    const {theme} = useSelector((state:IReducers) => state)
    const history = useHistory()
    const dispatch = useDispatch()

    const handleInputChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        setData({...data,[event.target.name]:event.target.value})
    }

    const handleLogIn = () => {
        if(data.user !== 'admin' || data.password !== 'admin'){
            setError(true)
        }else{
            setSuccessLogin(!successLogIn)
            localStorage.setItem('auth',JSON.stringify({isLogged:true}))
            setTimeout(() => {
                history.push('/home')
            },4500)
        }
    }

    const handleToggleTheme = (): void => {
        if(theme.theme === ThemeTypes.DARK_THEME){
            localStorage.setItem('theme', ThemeTypes.LIGHT_THEME)
            dispatch({type: ThemeTypes.LIGHT_THEME})
        }else{
            localStorage.setItem('theme', ThemeTypes.DARK_THEME)
            dispatch({type: ThemeTypes.DARK_THEME})
        }
    }

    

    return (
        <Container>
            <Form>
                <Lottie 
                    options={userAnimationOptions}
                    height={320}
                    width={320}
                /> 
                <Input placeholder="User" name="user" onChange={handleInputChange}/>
                <Input placeholder="Password" name="password" onChange={handleInputChange}/>
                <Button onClick={handleLogIn}>
                    {
                        successLogIn ?  
                        <Lottie 
                            options={successAnimationOptions}
                            height={30}
                            width={30}
                        /> 
                        : 
                        'Log In'
                    }
                </Button>
                {error && <ErrorMessage>User or password is incorrect!</ErrorMessage>}
            </Form>
            <Lamp on={theme.theme === ThemeTypes.LIGHT_THEME}>
                <i className="fas fa-lightbulb fa-lg" onClick={handleToggleTheme}/>
            </Lamp>
        </Container>
    );
}

export default Login;