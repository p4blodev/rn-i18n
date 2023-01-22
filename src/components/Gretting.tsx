import React from 'react';
import {useTranslation} from 'react-i18next';
import {StyleSheet, Text} from 'react-native';

const Gretting = () => {
  const {t, i18n} = useTranslation();
  return <Text style={styles.fontStyle}>{t('gretting')}</Text>;
};

const styles = StyleSheet.create({
  fontStyle: {
    fontWeight: 'bold',
    fontSize: 24,
    marginTop: 20,
    marginBottom: 20,
    color: '#5A5A5A',
  },
});

export default Gretting;
