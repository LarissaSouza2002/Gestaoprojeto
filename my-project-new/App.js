import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Alert, View, Image, TextInput, TouchableOpacity } from 'react-native';

export default function App() {

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Gestão de Projetos - GP</Text>
      <Image
        source={require('../my-project-new/assets/logo.png')}
        style={styles.logo}
      />

      <TextInput
        style={styles.input}
        placeholder="Digite seu usuário"
      />
      
      <TextInput
        style={styles.input}
        secureTextEntry={true}
        placeholder="Digite sua senha"
      />

      <TouchableOpacity
        style={styles.botao}
      >
        <Text style={styles.botaoText}>Login</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B0E0E6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    marginTop: -90,
    padding: 40,
    fontSize: 26,
    fontWeight: 'bold',
    color: "#191970",
  },
  logo: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  input: {
    marginTop: 10,
    padding: 10,
    width: "70%",
    backgroundColor: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    borderRadius: 3,
  },
  botao: {
    width: "70%",
    height: "7%",
    backgroundColor: "#191970",
    marginTop: 10,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  botaoText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: "#fff",
  }
});
