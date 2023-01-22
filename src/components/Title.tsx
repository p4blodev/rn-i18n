import React from 'react';
import {useTranslation} from 'react-i18next';

import {StyleSheet, Text} from 'react-native';

const Title = () => {
  const {t, i18n} = useTranslation();
  return <Text style={styles.fontStyle}>{t('title')}</Text>;
};

const styles = StyleSheet.create({
  fontStyle: {
    fontWeight: 'bold',
    fontSize: 32,
    marginTop: 20,
    marginBottom: 20,
  },
});

export default Title;
