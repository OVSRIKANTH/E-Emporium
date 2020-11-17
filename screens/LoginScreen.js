import React,{useContext, useState} from "react";
import { StyleSheet, Image } from "react-native";
import * as Yup from "yup";
import jwtDecode from "jwt-decode";

import authApi from "../api/authApi"
import AuthContext from "../auth/context";
import authStorage from "../auth/storage";
import Screen from "../components/Screen";
import { AppForm, AppFormField, SubmitButton, ErrorMessage } from "../components/forms";



const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen(props) {
  const authContext = useContext(AuthContext);
  const [loginFailed, setLoginFailed] = useState(false);

  const handlesubmit = async ( {email, password} ) => {  // on submit will get 1) values 3)formikbag[use+*, resetForm] 
    const result = await authApi.login({email, password});

    console.log(result);
    if(!result.ok) return setLoginFailed(true);
    setLoginFailed(false);
    const user = jwtDecode(result.data);
    
    authContext.setUser(user);
    authStorage.storeToken(result.data);
   }


  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-emporium2.png")} />
      <ErrorMessage error="Entered Email and/or password are incorrect" visible={loginFailed}/>
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={handlesubmit}  
        validationSchema={validationSchema}
      >
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="Email"
          textContentType="emailAddress"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
        <SubmitButton title="Login" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 190,
    height: 90,
    alignSelf: "center",
    marginTop: 10,
    marginBottom: 50,
  },
});

export default LoginScreen;
