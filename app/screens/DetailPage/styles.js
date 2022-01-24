import { Platform, StyleSheet } from 'react-native';
import AppConstant from 'app/config/constant';
import AppStyles from 'app/config/styles';

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    backgroundColor: AppStyles.color.COLOR_WHITE_LILAC,
    flex: 1,
  },
  titleTxt: {
    color: '#5d5d5d',
    fontSize: 18,
    fontWeight: "bold",
  },
  authorTxt: {
    paddingTop: 7,
    paddingBottom: 5
  },
  txtMainView:{
    padding: 10
  }
})
export default styles;
