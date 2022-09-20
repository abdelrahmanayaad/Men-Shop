import {ScaledSheet} from 'react-native-size-matters';
import {Dimensions} from 'react-native';
const {width} = Dimensions.get('window');
const imageWidth = width;
const imageHeight = imageWidth;
const styles = ScaledSheet.create({
  container: {
    flex: 1,
  },
  imageStyle: {
    width: imageWidth,
    height: imageHeight,
  },
  headerStyle: {
    position: 'absolute',
    top: '10@vs',
    flexDirection: 'row',
    justifyContent: 'center',
    left: '10@s',
  },
  iconStyle: {
    color: '#fff',
    fontSize: '30@s',
  },
  titleStyle: {
    flex: 1,
    textAlign: 'center',
    color: '#fff',
    fontSize: '20@s',
    fontWeight: 'bold',
    left: '-15@s',
  },
  underProductImageStyle: {
    padding: '10@vs',
    flex: 1,
  },
  descriptionTitleStyle: {
    marginTop: '10@vs',
    marginBottom: '5@vs',
    fontSize: '18@s',
    fontWeight: 'bold',
    color: '#000',
  },
  descriptionText: {
    fontSize: '14@s',
    color: '#aaa',
  },
  buttonViewStyle: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});

export default styles;
