import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';

function AccountScreen(props) {
  const {navigation} = props;

  function renderAccountData() {
    return (
      <View style={styles.AccountDataView}>
        <Icon name="person" color={'#000'} style={styles.personIcon} />
        <View style={styles.verticalLine} />
        <View style={styles.personalDataView}>
          <Text style={styles.personalDataName}>Abdelrahman Ayad</Text>
          <Text style={styles.personalDataPhone}>01026669167</Text>
        </View>
      </View>
    );
  }

  function renderChoices(icon, title, screenNavigation) {
    return (
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate(screenNavigation)}
          style={styles.chooseView}>
          <Icon name={icon} style={styles.iconChoose} />
          <Text style={styles.titleChoose}>{title}</Text>
        </TouchableOpacity>
        <View style={styles.horizontalLine} />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      {renderAccountData()}
      {renderChoices(
        'person-outline',
        'Profile',
        (screenNavigation = 'UpdateProfileScreen'),
      )}
      {renderChoices(
        'location-outline',
        'Shipping Address',
        (screenNavigation = 'AddressScreen'),
      )}
      {renderChoices(
        'cart-outline',
        'Previous Orders',
        (screenNavigation = 'OrdersScreen'),
      )}
      {renderChoices(
        'log-out-outline',
        'Log Out',
        (screenNavigation = 'UpdateProfileScreen'),
      )}
    </View>
  );
}

export default AccountScreen;
