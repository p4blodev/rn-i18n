import i18next, {LanguageDetectorModule} from 'i18next';
// import Backend from 'i18next-chained-backend';
import HttpApi from 'i18next-http-backend';
import {Platform, NativeModules} from 'react-native';
// import english from './languages/english.json';
// import spanish from './languages/spanish.json';
// import portuguese from './languages/portuguese.json';
import {initReactI18next} from 'react-i18next';

// const getDeviceLanguage = () => {
//   const deviceLanguage =
//     Platform.OS === 'ios'
//       ? NativeModules.SettingsManager.settings.AppleLocale ||
//         NativeModules.SettingsManager.settings.AppleLanguages[0] //iOS 13
//       : NativeModules.I18nManager.localeIdentifier;
//   return deviceLanguage;
// };

const languageDetector: LanguageDetectorModule = {
  type: 'languageDetector',
  detect: () => {
    const deviceLng =
      Platform.OS === 'ios'
        ? NativeModules.SettingsManager.settings.AppleLocale ||
          NativeModules.SettingsManager.settings.AppleLanguages[0] //iOS 13
        : NativeModules.I18nManager.localeIdentifier;

    const lngCode = deviceLng.slice(0, 2);

    return lngCode;
  },
  init: () => {},
  cacheUserLanguage: () => {},
};

i18next
  .use(languageDetector)
  .use(initReactI18next)
  .use(HttpApi)
  .init({
    backend: {
      loadPath: 'http://localhost:8080/locales/{{lng}}',
      parse: (data: any) => {
        return JSON.parse(data);
      },
    },
    compatibilityJSON: 'v3', // -> fix this: i18next::pluralResolver: Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.

    //lng: 'en', // if you're using a language detector, do not define the lng option
    fallbackLng: 'en',

    react: {
      useSuspense: true,
    },
  });

export default i18next;
