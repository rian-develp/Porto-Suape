import { StyleSheet } from 'react-native';
import { corVerdePrincipal, corVerdeSecundaria, corBrancaPrincipal, corVermelhaPrincipal } from '../../../config/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: corVerdePrincipal,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 40,
    color: corBrancaPrincipal,
    marginTop: 20,
    marginBottom: 40,
  },
  button: {
    width: '80%',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  logoutBtn: {
    backgroundColor: corVermelhaPrincipal,
  },
  journeyBtn: {
    backgroundColor: corVerdeSecundaria,
  },
  text: {
    color: corBrancaPrincipal,
    alignSelf: 'center',
    fontSize: 20,
  }
});

export default styles;
