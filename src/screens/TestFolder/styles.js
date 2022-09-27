import {ScaledSheet} from 'react-native-size-matters';
const styles = ScaledSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: '20@s',
  },
  TextInput: {
    height: '45@vs',
    backgroundColor: '#eee',
    borderRadius: 10,
    paddingHorizontal: '10@s',
  },
  button: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    height: '45@vs',
    backgroundColor: '#000',
    alignSelf: 'center',
    borderRadius: 10,
    marginTop: '20@vs',
  },
  error: {
    color: 'red',
  },
  title: {
    fontSize: '16@s',
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default styles;
