import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text1}> FAÇA SEU LOGIN </Text>
      <Text>  </Text>
      <Text>  </Text>
      <Text style={styles.text}>Digite seu login</Text>
      <TextInput placeholder=' Nome' style={styles.textinp} />
      <StatusBar style="auto" />
      <Text>  </Text>
      <Text>  </Text>
      <Text style={styles.text}>Digite seu email</Text>
      <TextInput placeholder=' Email' style={styles.textinp} />
      <Text>  </Text>
      <Text>  </Text>
      <Text style={styles.text}>Digite sua senha</Text>
      <TextInput placeholder=' Senha' style={styles.textinp} secureTextEntry />
      <TouchableOpacity activeOpacity={0.2} style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textinp: {
    backgroundColor: '#fff',
    width: 200,
    height: 35,
    borderColor: '#000', 
    borderWidth: 1, 
    borderRadius: 9, 

  },

  text: {
    marginBottom: 5,
    color: '#f1f1f1',

  },

  text1: {
    fontSize: 35,
    color: '#f1f1f1',

  },

  button: {
    backgroundColor: 'rgb(190,190,190)',
    padding: 15,
    borderRadius: 7,
    alignItems: 'center',
    marginTop: 30,
    width: 200,
  },

  buttonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
