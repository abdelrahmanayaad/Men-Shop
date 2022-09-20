import {ScaledSheet} from 'react-native-size-matters';
import {Dimensions} from 'react-native';
const {width} = Dimensions.get('window');
const imageWidth = width / 2 - 15;
const imageHeight = imageWidth * 1.7;
const styles = ScaledSheet.create({
  container: {alignItems: 'flex-start'},
  productImageStyle: {
    width: imageWidth,
    height: imageHeight,
  },
  productNameStyle: {
    fontSize: '18@s',
    color: '#000',
  },
});
export default styles;
