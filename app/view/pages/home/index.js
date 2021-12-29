import React,{useState,useEffect} from 'react';
import {Text} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {Appbar, Button, Image, View, Alert,Switch} from 'view/components';

import style from 'view/style';
import {toggleTheme} from 'store/reducers/appearance';
import {useTheme} from 'react-native-paper';
import { getTheme } from 'store/selectors/appearance';


const Home = () => {
  const {appStyle, homeStyle = {}} = style;
  const {colors} = useTheme();
  const themeState = useSelector(getTheme);
  const [isSwitchOn, setIsSwitchOn] = useState(themeState === "light" ? true : false);
 
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  const dispatch = useDispatch();
  useEffect(()=>{
    isSwitchOn? dispatch(toggleTheme({theme: 'light'})) : dispatch(toggleTheme({theme: 'dark'}));
  },[isSwitchOn])

  return (
    <View style={appStyle.container}>
      <Appbar.Header style={appStyle.header}>
        <Appbar.Content title={"Home"} />
      </Appbar.Header>
      <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
      <View style={[appStyle.content,{backgroundColor: colors.background}]}>
          <Text style={{fontSize: 30,color: colors.text}}>Theme app is {themeState}</Text>
      </View>
    </View>
  );
};

export default Home;
