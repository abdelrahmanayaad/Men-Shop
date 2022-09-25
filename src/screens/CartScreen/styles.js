import {ScaledSheet} from 'react-native-size-matters';
const styles = ScaledSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: '15@s',
  },
  buttonWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  totalMoney: {
    fontSize: '18@s',
    color: '#000',
  },
  button: {
    paddingHorizontal: '30@s',
  },
  buttonInnerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
  },
});

export default styles;
