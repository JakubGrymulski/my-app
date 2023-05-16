import {Image, ScrollView, StyleSheet, useWindowDimensions, View} from 'react-native';
import Logo from '../../../assets/images/Logo.png'
import CustomInput from '../../components/CustomInput';
import {useState} from 'react';
import CustomButton from '../../components/CustomButton';
import SocialSignInButton from '../../components/SocialSignInButton';

const SignInScreen = () => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  const {height} = useWindowDimensions();
  const  onSignInPressed = () => {
    console.warn("onSignInPress");
  }
  const onForgotPasswordPressed = () => {
    console.warn("onForgotPasswordPressed");
  }

  const onSignUpPress = () => {
    console.warn("onSignUpPress");
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Image
          source={Logo}
          style={[styles.logo, {height: height * 0.3}]}
          resizeMode="contain"
        />
        <CustomInput
          placeholder="Username"
          value={username}
          setValue={setUsername}
        />
        <CustomInput
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry
        />

        <CustomButton text="Sign In" onPress={onSignInPressed} />

        {/*<CustomButton*/}
        {/*  text="Sign in with Facebook"*/}
        {/*  onPress={onSignInWithFacebookPressed}*/}
        {/*  bgColor="#E7EAF4"*/}
        {/*  fgColor="#4765A9"*/}
        {/*/>*/}

        <SocialSignInButton/>

        <CustomButton
          text="Forgot password?"
          onPress={onForgotPasswordPressed}
          type="TERTIARY"/>

        <CustomButton
          text="Don't have an account? Create one"
          onPress={onSignUpPress}
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
    // margin: 20,
  },
  logo: {
    width: '100%',
    alignItems: 'center',
    maxWidth: 300,
    maxHeight: 200,
  }
})

export default SignInScreen
