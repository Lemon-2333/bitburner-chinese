import { Terminal } from "../../Terminal";


import i18n from "../../i18n";

export function locales_change(args: (string | number | boolean)[]): void {
    console.log(i18n)
    Terminal.error(i18n.t('test', { ns: 'test' }));
    Terminal.error(i18n.t('command.test', { ns: 'test' }));
    i18n.changeLanguage(String(args[0]))
    Terminal.error(i18n.t('test', { ns: 'test' }));
    Terminal.error(i18n.t('command.test', { ns: 'test' }));
  }