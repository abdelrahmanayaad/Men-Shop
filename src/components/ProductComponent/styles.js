import {ScaledSheet} from 'react-native-size-matters';
import {Dimensions} from 'react-native';
const {width} = Dimensions.get('window');
const imageWidth = width / 2 - 15;
const imageHeight = imageWidth * 1.7;
const styles = ScaledSheet.create({
  container: {
    alignItems: 'flex-start',
  },
  cart: {
    marginEnd: 5,
  },
  productImageStyle: {
    width: imageWidth,
    height: imageHeight,
    borderRadius: 5,
  },
  productNameStyle: {
    fontSize: '18@s',
    color: '#000',
    marginBottom: '10@vs',
  },
});
export default styles;
