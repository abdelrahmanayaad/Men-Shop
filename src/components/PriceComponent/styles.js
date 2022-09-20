import {ScaledSheet} from 'react-native-size-matters';
import {TINTCOLOR} from '../../constants/Constants';
const styles = ScaledSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  oldPrice: {
    textDecorationLine: 'line-through',
    fontSize: '14@s',
  },
  newPrice: {
    color: TINTCOLOR,
    fontSize: '18@s',
    marginEnd: '5@s',
  },
});

export default styles;
