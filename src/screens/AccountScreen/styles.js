import {ScaledSheet} from 'react-native-size-matters';
const styles = ScaledSheet.create({
  container: {
    flex: 1,
    padding: '15@s',
  },
  AccountDataView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: '50@vs',
  },
  personIcon: {
    fontSize: '120@s',
  },
  verticalLine: {
    width: '2@s',
    backgroundColor: '#ddd',
  },
  personalDataView: {
    justifyContent: 'center',
  },
  personalDataName: {
    fontSize: '18@s',
    color: '#000',
    fontWeight: 'bold',
  },
  personalDataPhone: {
    fontSize: '14@s',
  },
  chooseView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconChoose: {
    fontSize: '30@s',
    marginEnd: '10@s',
  },
  titleChoose: {
    fontSize: '20@s',
    color: '#000',
  },
  horizontalLine: {
    height: '1@vs',
    backgroundColor: '#ddd',
    marginVertical: '10@vs',
  },
});

export default styles;
