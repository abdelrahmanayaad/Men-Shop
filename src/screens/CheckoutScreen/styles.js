import {ScaledSheet} from 'react-native-size-matters';
const styles = ScaledSheet.create({
  container: {
    flex: 1,
    padding: '15@s',
    justifyContent: 'space-between',
  },
  dataView: {
    padding: '10@s',
    borderWidth: '1@s',
    borderRadius: 5,
    justifyContent: 'space-between',
  },
  shipToText: {
    fontSize: '20@s',
    color: '#000',
    fontWeight: 'bold',
  },
  addressView: {
    marginVertical: '10@vs',
  },
  dataAddressText: {
    fontSize: '14@s',
    color: '#000',
  },
  updateTitle: {
    textDecorationLine: 'underline',
    fontSize: '20@s',
    color: '#000',
    fontWeight: 'bold',
  },
  updateView: {
    alignItems: 'flex-end',
  },
  productComponentView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  productInfoView: {
    height: '80@vs',
    justifyContent: 'space-between',
  },
  shoppingProduct: {
    fontSize: '14@s',
    color: '#000',
  },
  line: {
    height: '1@vs',
    backgroundColor: '#ddd',
  },
});

export default styles;
