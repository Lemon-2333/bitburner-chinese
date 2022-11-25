import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
//import { getLanguage } from './utils';
import zh_test from './locales/chs/test';
import zh_command from './locales/chs/command';
import zh_common from './locales/chs/common';
import zh_help from './locales/chs/help';
import zh_ui from './locales/chs/ui'
import zh_tutorial from './locales/chs/tutorial'
import zh_program from './locales/chs/program'

import en_test from './locales/EN/test'
import en_command from './locales/EN/command'
import en_common from './locales/EN/common'
import en_help from './locales/EN/help';
import en_ui from './locales/EN/ui'
import en_tutorial from './locales/EN/tutorial'
import en_program from './locales/EN/program'

const resources = {
  chs: {
    common: zh_common,
    test: zh_test,
    command: zh_command,
    help: zh_help,
    ui: zh_ui,
    tutorial: zh_tutorial,
    program: zh_program,
  },
  en: {
    common: en_common,
    test: en_test,
    command: en_command,
    help: en_help,
    ui: en_ui,
    tutorial: en_tutorial,
    program: en_program,

  }
};
//console.log(Settings.Locale)
//var lang=localStorage.getItem('locales')
var lang = localStorage.locales
if (lang == undefined || lang == "") {
  lang = 'en'
}
console.log("aaa:" + lang)
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: lang,
    //lng: 'chs',


    //keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });
console.log(i18n)
export default i18n;