import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

function AddToCartButon(props) {
  const [quantity, setQuantity] = useState(0);

  const {style, textStyle} = props;
  function renderInitButton() {
    return (
      <TouchableOpacity
        onPress={() => plusHandler()}
        style={[styles.container, style]}>
        <Text style={[styles.AddToCartTitleStyle, textStyle]}>Add To Cart</Text>
      </TouchableOpacity>
    );
  }

  function renderPlusMinusButton() {
    return (
      <View style={[styles.PlusMinusButtonStyle]}>
        <View
          style={[styles.plusMinusWrapper, {justifyContent: 'space-around'}]}>
          <Text
            onPress={() => minusHandler()}
            style={[styles.PlusMinusTextStyle, textStyle]}>
            -
          </Text>
          <Text style={[styles.PlusMinusTextStyle, textStyle]}>{quantity}</Text>
          <Text
            onPress={() => plusHandler()}
            style={[styles.PlusMinusTextStyle, textStyle]}>
            +
          </Text>
        </View>
      </View>
    );
  }

  const plusHandler = () => {
    setQuantity(quantity + 1);
  };

  const minusHandler = () => {
    setQuantity(quantity - 1);
  };

  return quantity > 0 ? renderPlusMinusButton() : renderInitButton();
}

export default AddToCartButon;
