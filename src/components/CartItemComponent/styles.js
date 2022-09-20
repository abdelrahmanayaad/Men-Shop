import {ScaledSheet} from 'react-native-size-matters';
const styles = ScaledSheet.create({
  container: {
    flexDirection: 'row',
    padding: '15@s',
  },
  image: {
    width: '100@s',
    height: '100@s',
    marginEnd: '15@s',
    borderRadius: 5,
  },
  rightWrapper: {
    justifyContent: 'space-between',
    flex: 1,
  },
  productName: {
    fontSize: '14@s',
    color: '#000',
    fontWeight: 'bold',
  },
});

export default styles;
