import { Terminal } from "../../Terminal";

import i18n from "../../i18n";

export function analyze(args: (string | number | boolean)[]): void {
  if (args.length !== 0) {
    Terminal.error(i18n.t('analyze.error', { ns: 'command' }));
    return;
  }
  Terminal.startAnalyze();
}
