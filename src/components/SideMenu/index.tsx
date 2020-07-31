import React, { useEffect, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { Resizable } from "re-resizable";
import { 
    Container, 
    Header, 
    Divider, 
    Favorites,
    Menu,
    List,
    CollapseList,
    Lamp,
    SelectLanguage
} from './styles';
import { ThemeTypes } from '../../store/types/theme'
import CircularProfile from '../CircularProfile/index'
import Button from '../Button/index'
import { IReducers } from '../../store/reducers';
import BR_FLAG from '../../assets/br_flag.png'
import US_FLAG from '../../assets/us_flag.png'
import { ActionTypes } from '../../store/types/language'

interface ISubMenu {
    id:number;
    name:string;
}

interface IMenu {
    id:number;
    name:string;
    subMenus:ISubMenu[];
}

interface IProps {
    handleFetchMessage: (id:number) => void
}

const style = {
    maxWidth:"500px",
    overflow:"hidden"
  } as const;

const SideMenu: React.FC<IProps> = ({handleFetchMessage}) => {
    const [menus, setMenus] = useState<IMenu[]>([])
    const [tab, setTab] = useState(-1)
    const {language, theme} = useSelector((state:IReducers) => state)

    const dispath = useDispatch()
    const handleClick = () => {}

    useEffect(() => {
        (async() => {
            const response = await fetch('https://my-json-server.typicode.com/EnkiGroup/DesafioReactEncontact/menus')
            const result:IMenu[] = await response.json()
            setMenus(result)
        })()
    }, [])

    const handleToggleTheme = (): void => {
        if(theme.theme === ThemeTypes.DARK_THEME){
            localStorage.setItem('theme', ThemeTypes.LIGHT_THEME)
            dispath({type: ThemeTypes.LIGHT_THEME})
        }else{
            localStorage.setItem('theme', ThemeTypes.DARK_THEME)
            dispath({type: ThemeTypes.DARK_THEME})
        }
    }

    const handleToggleTabs = (id:number) => {
        if(tab === id){
            setTab(-1)
        }else{
            setTab(id)
        }
    }

    const handleToggleLanguage = (type:string) => {
        localStorage.setItem('language',type)
        dispath({type:type})
    }

    return (
        <Resizable
            style={style}
            defaultSize={{
                width: '300px',
                height: '100vh'
            }}
            maxWidth={400}
            minWidth={200}

        >
             <Container>
                <Header>
                    <CircularProfile userName="OA"/>
                    <Button onClick={handleClick}><i className="fas fa-envelope" style={{marginRight:'7px'}}/>{language.content.compose}</Button>
                </Header>
                <Divider/>
                <Favorites>
                    <span>
                        <i className="far fa-star" style={{marginRight:'7px',top:'-1px',position:'relative'}}/>
                        {language.content.favorites}
                    </span>
                   <b>30</b> 
                </Favorites>
                <Menu>
                    <List>
                        {menus.map((menu, index) => {
                            return (
                                <>
                                    <li onClick={(evt) => handleToggleTabs(menu.id)}>
                                        <div>
                                            <span>
                                                <i className="fas fa-caret-down fa-lg" style={{transform:tab === menu.id ? 'rotate(180deg)' : 'rotate(0deg)'}}/>
                                                {menu.name}
                                            </span>
                                            <b>{5 * index}</b>
                                        </div>
                                        <CollapseList open={tab === menu.id} qtySubMenu={menu.subMenus.length}>
                                            {menu.subMenus.map((subMenu,index2) =>  (
                                                <li onClick={(evt) => {handleFetchMessage(subMenu.id); evt.stopPropagation()}}>
                                                    <span>{subMenu.name}</span> 
                                                    <span>15</span>
                                                </li>
                                            ))}
                                        </CollapseList>
                                    </li>
                                </>
                            )
                        })}
                    </List>
                </Menu>
    
                <Lamp on={theme.theme === ThemeTypes.LIGHT_THEME}>
                    <i className="fas fa-lightbulb fa-lg" onClick={handleToggleTheme}/>
                </Lamp>
                        
                <SelectLanguage>
                    <img src={BR_FLAG} alt="BR_FLAG" onClick={() => handleToggleLanguage(ActionTypes.PT_BR) }/>
                    <img src={US_FLAG} alt="US_FLAG" onClick={() => handleToggleLanguage(ActionTypes.EN_US) }/>
                </SelectLanguage>
            </Container>
        </Resizable>
    )
}

export default SideMenu;