import React, { useEffect, useContext, useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, ImageBackground, Image } from 'react-native';
import styles from './styles';
import ApiConfig from 'app/config/configUrl';
import Loader from 'app/components/loader';
import { apiCall } from "app/Utils/httpClient";
import { UserContext } from "app/Utils/UserContext";
import Header from 'app/components/Header';

const Home = (props) => {
  const [isLoading, setIsLoading] = useState(false)
  const [userData, setUserData] = useContext(UserContext)
  const [allData, setAllData] = useState()
  const [isSearch, setIsSearch] = useState(false)
  const [listRender, setlistRender] = useState(false)
  const [searchVal, setSerchValue] = useState(false)
  useEffect(() => {
    setIsLoading(true);
    getNewsList()
  }, [])

  const getNewsList = async () => {
    try {
      const result = await apiCall("GET", ApiConfig.BASE_COUNTRY + ApiConfig.API_KEY);
      if (result.status === 200) {
        const { data } = result
        if (data?.status == "ok") {
          setUserData(data?.articles)
          setAllData(data?.articles)
        }
      }
      setIsLoading(false)
    } catch (error) {
      console.log('error: ', error);
    }
  }

  const navigateToDetails = (item) => {
    props.navigation.navigate("DetailPage", { details: item })
  }

  const renderList = ({ item, index }) => {
    return (
      <View style={styles.cardHeader}>
        <TouchableOpacity onPress={() => { navigateToDetails(item) }}>
          <ImageBackground source={{ uri: item?.urlToImage }}
            resizeMode="cover" style={styles.cardImg} borderRadius={10} >
            <View style={styles.cardTitle}>
              <Text style={styles.titleText}>{item?.title}</Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
      </View>
    )
  }

  const onListEmpty = () => {
    return <View style={styles.onListEmpty}>
      <Text style={styles.emptyTxt}>No data available</Text>
    </View>
  }



  const searchFun = (val) => {
    setSerchValue(val)
    if (val) {
      const filterData = allData.filter(item => {
        return item.title.toLowerCase().includes(val.toLowerCase());
      });
      setUserData(filterData)
      setlistRender(!listRender)
      // console.log('filterData',filterData)
    }else{
      setUserData(allData)
      setlistRender(!listRender)
    }
  }

  return (
    <View style={styles.container}>
      <Loader loading={isLoading}></Loader>
      <Header
        type='drawer'
        isSearch={isSearch}
        setIsSearch={setIsSearch}
      />
      {isSearch &&
        <View style={styles.searchView}>
          <TextInput
            placeholder="Search..."
            placeholderTextColor="#a9a9a9"
            onChangeText={(val) => searchFun(val)}
            value={searchVal}
            style={{ width: '80%' }}
          />
          {/* <TouchableOpacity style={{ marginRight: 10 }}>
            <Image source={images.icons.search} style={styles.imgView} />
          </TouchableOpacity> */}
        </View>
      }
      <FlatList style={{ margin: 5 }}
        data={userData}
        numColumns={2}
        keyExtractor={(item, index) =>index}
        renderItem={renderList}
        ListEmptyComponent={onListEmpty}
        extraData={listRender}
      />
    </View>
  );
};

export default Home;
