import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
//import { getLanguage } from './utils';
import zh_test from './locales/chs/test';
import zh_command from './locales/chs/command';
import zh_common from './locales/chs/common';
import en_test from './locales/EN/test'
import en_command from './locales/EN/command'
import en_common from './locales/EN/common'

const resources = {
    //zh_CN: {
    //  common: {// 这是namespace的名称
    //    ...zh_CNCommon, // 公共部分
    //    ...zh_CNProfile, // 注册登录
    //  },
    //  menu: {// 这是namespace的名称
    //    ...zh_CNMenu, // 左侧菜单
    //  },
    //},
    chs:{
        test:{
          ...zh_test
        },
        common:{
          ...zh_common
        },
        command:{
          ...zh_command
        }
    },
    en:{
        test:{
            ...en_test
        },
        common:{
          ...en_common
        },
        command:{
          ...en_command
        }
    }
  };
//console.log(Settings.Locale)
//var lang=localStorage.getItem('locales')
var lang = localStorage.locales
if (lang==undefined || lang==""){
    lang='en'
}
console.log("aaa:"+lang)
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