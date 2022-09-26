import {ScaledSheet} from 'react-native-size-matters';
const styles = ScaledSheet.create({
  container: {
    flex: 1,
    padding: '15@s',
  },
  headerTitle: {
    fontSize: '18@s',
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: '30@vs',
    marginBottom: '80@vs',
  },
  buttonView: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});

export default styles;
