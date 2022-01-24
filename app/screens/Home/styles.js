import { StyleSheet } from 'react-native';
import AppStyles from 'app/config/styles';

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flex: 1,
  },
  cardHeader: {
    flex: 1, margin: 5, backgroundColor: '#ddd', height: 180, borderRadius: 10,
    borderWidth: 0.5
  },
  cardImg: {
    height: 179,
  },
  cardTitle: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'column',
    marginBottom: 10,
    marginHorizontal: 10
  },
  titleText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: "bold",
    textAlign: 'center'
  },
  onListEmpty: {
    flex: 1,
    alignSelf: 'center',
    justifyContent:'center',
    marginTop: 60
  },
  emptyTxt: {
    fontWeight: 'bold',
    fontSize: 20,
    color: AppStyles.color.COLOR_BLACK
  },
  imgView: {
    width: 20,
    height: 20
  },
  searchView: {
    // backgroundColor: 'red', 
    height: 40,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 10,
    paddingLeft: 5,
    borderWidth: 1,
    borderColor: '#a9a9a9',
    marginTop: 3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  }
});

export default styles;
