import {ScaledSheet} from 'react-native-size-matters';
import {Dimensions} from 'react-native';
const {width} = Dimensions.get('window');
const CatWidth = width / 2.2;
const catheight = CatWidth * 1.5;
const styles = ScaledSheet.create({
  categoryImageStyle: {
    width: CatWidth,
    height: catheight,
    borderRadius: '5@s',
  },
  categoryNameStyle: {
    fontSize: '18@s',
    color: '#000',
  },
});

export default styles;
