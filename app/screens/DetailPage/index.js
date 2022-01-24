import React from 'react';
import { Image, ImageBackground, Text, TouchableOpacity, View, } from 'react-native';
import styles from './styles';
import Loader from 'app/components/loader';
import Header from 'app/components/Header';

const DetailPage = (props) => {
  const { details } = props.route.params

  return (
    <View style={styles.container}>
      <Loader loading={false}></Loader>
      <Header
        type='arrow'
        HeaderText='News Detail'
      />
      <ImageBackground source={{ uri: details?.urlToImage }}
        resizeMode="cover" style={{ minHeight: 200, }} >
      </ImageBackground>
      <View style={styles.txtMainView}>
        <Text style={styles.titleTxt}>{details?.title}</Text>
        <View>
          <Text style={styles.authorTxt}>Author : {(details?.author && details?.author) || "Author test"}{", "}{details?.source?.name}</Text>
          <Text>{details?.description}</Text>
        </View>

      </View>

    </View>
  );
};

export default DetailPage;
