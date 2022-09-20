import {ScaledSheet} from 'react-native-size-matters';
const styles = ScaledSheet.create({
  container: {
    padding: '15@s',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    borderRadius: 5,
  },
  AddToCartTitleStyle: {
    fontSize: '16@s',
    color: '#fff',
    fontWeight: 'bold',
  },
  PlusMinusButtonStyle: {
    padding: '15@s',
    backgroundColor: '#ddd',
    borderRadius: 5,
  },
  plusMinusWrapper: {
    flexDirection: 'row',
  },
  PlusMinusTextStyle: {
    fontSize: '16@s',
    paddingHorizontal: '10@s',
    color: '#000',
    fontWeight: 'bold',
  },
});

export default styles;
