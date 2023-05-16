import {ScrollView, StyleSheet, Text, useWindowDimensions, View} from 'react-native';
import CustomInput from '../../components/CustomInput';
import {useState} from 'react';
import CustomButton from '../../components/CustomButton';
import SocialSignInButton from '../../components/SocialSignInButton';

const SignUpScreen = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');

  const {height} = useWindowDimensions();
  const onSignInPressed = () => {
    console.warn('onSignInPress');
  }
  const onForgotPasswordPressed = () => {
    console.warn('onForgotPasswordPressed');
  }

  const onSignInWithFacebookPressed = () => {
    console.warn('onSignInWithFacebookPressed');
  }

  const onSignUpPress = () => {
    console.warn('onSignUpPress');
  }

  const onRegisterPressed = () => {
    console.warn('onRegisterPressed');
  }

  const onTermsOfUsePress = () => {
    console.warn('onTermsOfUsePress');
  }

  const onPrivacyPolicyPress = () => {
    console.warn('onPrivacyPolicyPress');
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Create an account</Text>
        <CustomInput
          placeholder="Username"
          value={username}
          setValue={setUsername}
        />
        <CustomInput
          placeholder="Email"
          value={email}
          setValue={setEmail}
        />
        <CustomInput
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry
        />
        <CustomInput
          placeholder="Repeat Password"
          value={passwordRepeat}
          setValue={setPasswordRepeat}
          secureTextEntry
        />
        <CustomButton text="Register" onPress={onRegisterPressed}/>

        <Text style={styles.text}>
          By registering, you confirm that you accept our{' '}
          <Text style={styles.link} onPress={onTermsOfUsePress}>Terms of Use</Text> and{'  '}
          <Text style={styles.link} onPress={onPrivacyPolicyPress}>Privacy Policy</Text>
          Terms of Use and Privacy Policy
        </Text>

        <SocialSignInButton/>

        <CustomButton
          text="Have an account? Log In"
          onPress={onSignInPressed}
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

export default SignUpScreen
