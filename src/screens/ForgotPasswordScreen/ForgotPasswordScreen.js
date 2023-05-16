import {ScrollView, StyleSheet, Text, useWindowDimensions, View} from 'react-native';
import CustomInput from '../../components/CustomInput';
import {useState} from 'react';
import CustomButton from '../../components/CustomButton';
import SocialSignInButton from '../../components/SocialSignInButton';

const ForgotPasswordScreen = () => {
  const [username, setUsername] = useState('');

  const {height} = useWindowDimensions();
  const onResendCodePressed = () => {
    console.warn('onResendCodePressed');
  }
  const onSendPressed = () => {
    console.warn('onSendPressed');
  }
  const onBackToSignInPressed = () => {
    console.warn('onBackToSignInPressed');
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Reset your password</Text>
        <CustomInput
          placeholder="Username"
          value={username}
          setValue={setUsername}
        />
        <CustomButton text="Send" onPress={onSendPressed}/>

        <CustomButton
          text="Back to Sign In"
          onPress={onBackToSignInPressed}
          type="TERTIARY"
        />

      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051C60',
    margin: 10
  },
  text: {
    color: 'gray',
    marginVertical: 10,
  },
  link: {
    color: '#FDB075',
  }
})

export default ForgotPasswordScreen
