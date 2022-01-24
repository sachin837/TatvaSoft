import {View,Modal,ActivityIndicator} from 'react-native';
import AppStyles from 'app/config/styles';
import React  from 'react';
import styles from './style'

const Loader = (props) => {
  const {
    loading,
  } = props;

  return (
    <Modal
      transparent={true}
      animationType={'none'}
      visible={loading}
     >
      <View style={styles.modalBackground}>
        <View style={styles.activityIndicatorWrapper}>
          <ActivityIndicator
          color={AppStyles.color.COLOR_THEME}
          size={60}
            animating={loading} />
        </View>
      </View>
    </Modal>
  )
}



export default Loader;

