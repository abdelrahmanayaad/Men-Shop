import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';

function AccountScreen(props) {
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

  function renderChoices(icon, title) {
    return (
      <View>
        <TouchableOpacity style={styles.chooseView}>
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
      {renderChoices('person-outline', 'Profile')}
      {renderChoices('location-outline', 'Shipping Address')}
      {renderChoices('cart-outline', 'Previous Orders')}
      {renderChoices('log-out-outline', 'Log Out')}
    </View>
  );
}

export default AccountScreen;
