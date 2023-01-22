import React, {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Modal,
  Alert,
  TouchableOpacity,
} from 'react-native';

const LanguageSelector = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const {t, i18n} = useTranslation();

  return (
    <View>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Change Language</Text>
      </Pressable>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Select language</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <TouchableOpacity
                style={styles.touchStyle}
                onPress={() => {
                  i18n.changeLanguage('en');
                  setModalVisible(false);
                }}>
                <Text style={styles.textStyle}>English</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.touchStyle}
                onPress={() => {
                  i18n.changeLanguage('es');
                  setModalVisible(false);
                }}>
                <Text style={styles.textStyle}>Spanish</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.touchStyle}
                onPress={() => {
                  i18n.changeLanguage('pt');
                  setModalVisible(false);
                }}>
                <Text style={styles.textStyle}>Portuguese</Text>
              </TouchableOpacity>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: 'blue',
  },
  buttonClose: {
    backgroundColor: 'orange',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  touchStyle: {
    margin: 10,
  },
});

export default LanguageSelector;
