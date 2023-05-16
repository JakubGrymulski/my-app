import {StyleSheet} from 'react-native';
import CustomButton from '../CustomButton';

const onSignInWithFacebookPressed = () => {
  console.warn("onSignInWithFacebookPressed");
}

const SocialSignInButton = () => {
  return (
    <>
      <CustomButton
        text="Sign in with Facebook"
        onPress={onSignInWithFacebookPressed}
        bgColor="#E7EAF4"
        fgColor="#4765A9"
      />
    </>
  )
};

const styles = StyleSheet.create({})
export default SocialSignInButton
