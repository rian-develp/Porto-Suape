import { StyleSheet } from 'react-native';
import { corBrancaPrincipal, corAzulPrincipal } from '../../../../config/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  button: {
    flex: 2,
    padding: 15,
    backgroundColor: corBrancaPrincipal,
    borderRadius: 10,
  },
  text: {
    fontSize: 20,
  },
  counter: {
    backgroundColor: corAzulPrincipal,
    color: corBrancaPrincipal,
    fontSize: 20,
    marginLeft: 10,
    paddingLeft: 8,
    paddingRight: 8,
    borderRadius: 10,
  },
});

export default styles;
