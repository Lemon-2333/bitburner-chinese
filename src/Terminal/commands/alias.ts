import { Terminal } from "../../Terminal";
import { parseAliasDeclaration, printAliases } from "../../Alias";

import i18n from "../../i18n";

export function alias(args: (string | number | boolean)[]): void {
  if (args.length === 0) {
    printAliases();
    return;
  }
  if (args.length === 1) {
    if (parseAliasDeclaration(args[0] + "")) {
      Terminal.print(`${i18n.t('alias.set', { ns: 'command' })} ${args[0]}`);
      return;
    }
  }
  if (args.length === 2) {
    if (args[0] === "-g") {
      if (parseAliasDeclaration(args[1] + "", true)) {
        Terminal.print(`${i18n.t('alias.set_g', { ns: 'command' })} ${args[1]}`);
        return;
      }
    }
  }
  console.log(i18n)
  Terminal.error(i18n.t('alias.error', { ns: 'command' }));
  Terminal.error('Incorrect usage of alias command. Usage: alias [-g] [aliasname="value"]');
}
