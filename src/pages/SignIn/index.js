import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
// import { StackActions, NavigationActions } from "@react-navigation";
import {
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  AsyncStorage,
} from "react-native";
import api from "../../services/api";
import styles from "./styles";
import logoImg from "../../assets/logo.png";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigation = useNavigation();

  const handleEmailChange = (values) => {
    setEmail(values);
  };

  const handlePasswordChange = (values) => {
    setPassword(values);
  };

  const handleCreateAccountPress = () => {
    navigation.navigate("Home");
  };
  const handleForgotPress = () => {
    navigation.navigate("Home");
  };

  async function saveUser(user) {
    await AsyncStorage.setItem("@BeBrideApp:user", JSON.stringify(user));
  }

  const handleSignInPress = async () => {
    if (email.length === 0 || password.length === 0) {
      setError("Preencha usuário e senha para continuar!", () => false);
    } else {
      try {
        const response = await api.post("/login", {
          userEmail: email,
          password,
        });

        const user = response.data.data;
        if (user.type !== 1) {
          setError("Usuário não é administrador!", () => false);
        } else {
          await saveUser(user);
          api.defaults.headers.common["authorization"] = `Bearer ${user.token}`;
          navigation.navigate("Home");
        }

        // const resetAction = StackActions.reset({
        //   index: 0,
        //   actions: [
        //     NavigationActions.navigate({
        //       routeName: "Home",
        //       params: { token: response.data.token },
        //     }),
        //   ],
        // });
        // navigation.dispatch(resetAction);
      } catch (_err) {
        setError("Houve um problema com o login, verifique suas credenciais!");
      }
    }
  };

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={logoImg} />
      <View style={styles.inputView}>
        <TextInput
          value={email}
          autoCapitalize="none"
          style={styles.inputText}
          placeholder="Email..."
          placeholderTextColor="#13131a"
          onChangeText={handleEmailChange}
          autoCorrect={false}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          secureTextEntry
          autoCapitalize="none"
          style={styles.inputText}
          placeholder="Password..."
          placeholderTextColor="#13131a"
          onChangeText={handlePasswordChange}
          autoCorrect={false}
        />
      </View>
      {error.length !== 0 && <Text style={styles.errorMessage}>{error}</Text>}
      <TouchableOpacity onPress={() => handleForgotPress(user)}>
        <Text style={styles.forgot}>Esqueceu a senha?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginBtn} onPress={handleSignInPress}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleCreateAccountPress}>
        <Text style={styles.signup}>Signup</Text>
      </TouchableOpacity>
    </View>
  );
}
