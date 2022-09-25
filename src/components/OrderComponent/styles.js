import {ScaledSheet} from 'react-native-size-matters';
import {TINTCOLOR} from '../../constants/Constants';
const styles = ScaledSheet.create({
  cart: {
    marginBottom: '10@vs',
  },
  container: {
    flexDirection: 'row',
    padding: '10@s',
  },
  image: {
    width: '100@s',
    height: '100@s',
    borderRadius: 5,
    marginEnd: '15@s',
  },
  name: {
    fontSize: '16@s',
    color: '#000',
  },
  rightWrapper: {
    justifyContent: 'space-between',
    flex: 1,
  },
  placedTitle: {
    fontSize: '18@s',
    color: TINTCOLOR,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  placedTitleWrapper: {
    alignItems: 'center',
  },
});

export default styles;
