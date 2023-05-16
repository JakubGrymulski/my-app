import {ScrollView, StyleSheet, Text, useWindowDimensions, View} from 'react-native';
import CustomInput from '../../components/CustomInput';
import {useState} from 'react';
import CustomButton from '../../components/CustomButton';
import SocialSignInButton from '../../components/SocialSignInButton';

const ConfirmEmailScreen = () => {
  const [code, setCode] = useState('');

  const {height} = useWindowDimensions();
  const onResendCodePressed = () => {
    console.warn('onResendCodePressed');
  }
  const onConfirmedPressed = () => {
    console.warn('onConfirmedPressed');
  }
  const onBackToSignInPressed = () => {
    console.warn('onBackToSignInPressed');
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Confirm your email</Text>
        <CustomInput
          placeholder="Enter your confirmation code"
          value={code}
          setValue={setCode}
        />
        <CustomButton text="Confirm" onPress={onConfirmedPressed}/>

        <CustomButton
          text="Resend Code"
          onPress={onResendCodePressed}
          type="SECONDARY"
        />

        <CustomButton
          text="Back to Sign In"
          onPress={onBackToSignInPressed}
          type="TERTIARY"
        />


      </View>
      {/*<View style={styles.root}>*/}


      {/*<CustomButton*/}
      {/*  text="Sign in with Facebook"*/}
      {/*  onPress={onSignInWithFacebookPressed}*/}
      {/*  bgColor="#E7EAF4"*/}
      {/*  fgColor="#4765A9"*/}
      {/*/>*/}

      {/*<CustomButton*/}
      {/*  text="Forgot password?"*/}
      {/*  onPress={onForgotPasswordPressed}*/}
      {/*  type="TERTIARY"/>*/}

      {/*<CustomButton*/}
      {/*  text="Don't have an account? Create one"*/}
      {/*  onPress={onSignUpPress}*/}
      {/*  type="TERTIARY"*/}
      {/*/>*/}
      {/*</View>*/}
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

export default ConfirmEmailScreen
