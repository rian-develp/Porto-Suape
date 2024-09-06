import { StyleSheet } from 'react-native';
import {
  corBrancaPrincipal,
  corEscuraPrincipal,
  corVerdeSecundaria,
  corVermelhaPrincipal,
} from '../../../../config/colors';

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: corBrancaPrincipal,
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: corEscuraPrincipal,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    maxHeight: '50%',
  },
  headerTitle: {
    backgroundColor: corVerdeSecundaria,
    minWidth: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  headerTitleText: {
    color: corBrancaPrincipal,
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 10,
    padding: 10,
  },
  saveBtn: {
    backgroundColor: corVermelhaPrincipal,
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  text: {
    color: corBrancaPrincipal,
  }
});

export default styles;
