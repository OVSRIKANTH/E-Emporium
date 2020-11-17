import React,{useState, useContext} from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import {
  AppForm as Form,
  AppFormField as FormField,
  SubmitButton,
  ErrorMessage
} from "../components/forms";
import usersApi from '../api/users';
import authApi from '../api/authApi';
import useAuth from "../auth/useAuth"


const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function RegisterScreen() {
  const [error, setError] = useState();
  const auth = useAuth()
  const handleSubmit = async (userInfo) => {
    const result = await usersApi.register(userInfo);

    console.log(result);
    if(!result.ok){
      if(result.data)setError(result.data.error);
      else {
        setError("An unknown error occured");
        console.log(result);
      }
      return
    }
    setError(null);
    
    const {data: authToken} = await authApi.login(userInfo);
    console.log(authToken);
    auth.logIn(authToken);
  };
  
  return (
    <Screen style={styles.container}>
      <ErrorMessage error={error} visible={error}/>
      <Form
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <FormField
          autoCorrect={false}
          icon="account"
          name="name"
          placeholder="Name"
        />
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="Email"
          textContentType="emailAddress"
        />
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
        <SubmitButton title="Register" />
      </Form>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default RegisterScreen;
