import React, { Fragment, useState } from 'react';
import { Text, StyleSheet, Image, View, TouchableOpacity, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import images from 'app/config/images'

const Header = (props) => {
    const navigation = useNavigation();

    const {
        HeaderText, setIsSearch, isSearch, type
    } = props;

    const OnpressBack = () => {
        navigation.goBack(null);
    }
    return (
        <>
            {type == 'drawer' ?
                <View style={styles.mainContainerView}>
                    <View style={styles.txtView}>
                        <Text style={styles.headingTxt}>{HeaderText}</Text>
                    </View>
                    <View style={styles.innerContainerView}>
                        <TouchableOpacity onPress={() => setIsSearch(!isSearch)} style={{ marginRight: 10 }}>
                            <Image source={images.icons.search} style={styles.imgView} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={images.icons.menu} style={styles.imgView} />
                        </TouchableOpacity>
                    </View>
                </View>
                :
                <View style={styles.secondViewCon}>
                    <TouchableOpacity onPress={() => OnpressBack()} style={styles.txtView}>
                        <Image source={images.icons.backArrow}
                            style={styles.imgView2}
                        />
                    </TouchableOpacity>
                    <View style={{ paddingLeft: 20 }}>
                        <Text style={styles.headingTxt}>{HeaderText}</Text>
                    </View>
                </View>
            }
        </>

    );
}
Header.defaultProps = {
    HeaderText: "Top Headlines",
};
const styles = StyleSheet.create({
    mainContainerView: {
        height: 50,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',    
    },
    secondViewCon: {
        height: 50,
        backgroundColor: '#5cf0c1',
        alignItems: 'center',
        flexDirection: 'row'
    },
    txtView: {
        paddingLeft: 8
    },
    headingTxt: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 18
    },
    innerContainerView: {
        paddingRight: 10,
        alignItems: 'center',
        justifyContent: "space-evenly",
        flexDirection: 'row'
    },
    imgView: {
        width: 25,
        height: 25
    },
    imgView2: {
        width: 30,
        height: 30
    },
})
export default Header;