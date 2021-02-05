import React, { ReactElement } from 'react'
import {
  Keyboard,
  StyleProp,
  TextInput,
  TextInputProps,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native'

import color from 'styles/color'

type InputProps = {
  containerStyle?: StyleProp<ViewStyle>
} & TextInputProps

const Input = (props: InputProps): ReactElement => {
  const { style, ...rest } = props
  const defaultStyle: StyleProp<TextStyle> = {
    borderRadius: 8,
    height: '100%',
    backgroundColor:
      false === rest.editable ? '#ebeff8' : color.white,
    justifyContent: 'center',
    padding: 0,
    paddingLeft: 15,
    fontFamily: 'Gotham-Book',
    color: color.sapphire,
  }
  return (
    <View
      style={[
        {
          borderRadius: 8,
          borderWidth: 1,
          borderColor: '#cfd8ea',
          height: 45,
        },
        props.containerStyle,
      ]}
    >
      <TextInput
        blurOnSubmit={false} // To prevent strong password in IOS
        onSubmitEditing={(): void => Keyboard.dismiss()} // To prevent strong password in IOS
        style={[defaultStyle, style]}
        {...rest}
        underlineColorAndroid={'#ffffff00'}
        placeholderTextColor="rgba(32,67,181,.5)"
        keyboardType={props.keyboardType}
      />
    </View>
  )
}

export default Input
