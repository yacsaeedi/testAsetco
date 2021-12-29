import React, {useEffect, useState} from 'react';
import {Text, ActivityIndicator} from 'react-native';
import {Appbar, View, FlatList} from 'view/components';

import style from 'view/style';
import gate from 'gate/index';
import {useTheme} from 'react-native-paper';


const Home = ({navigation}) => {
  const {appStyle} = style;
  const {colors} = useTheme();
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  console.log({data});
  const fetcher = async () => {
    try {
      const data = await gate.getUser();
      setData(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetcher();
  }, []);
  return (
    <View style={{flex: 1}}>
      <Appbar.Header style={appStyle.header}>
        <Appbar.Content title={'Setting'} />
      </Appbar.Header>
      {loading && <ActivityIndicator />}
      <FlatList
        style={{flex: 1, flexGrow: 1}}
        data={data?.data?.data || []}
        renderItem={({item}) => {
          return<View style={[appStyle.boxCard,{borderColor: colors.text,}]}><Text style={{color: colors.text}}>{item.first_name}</Text></View> ;
        }}
      />
    </View>
  );
};

export default Home;
