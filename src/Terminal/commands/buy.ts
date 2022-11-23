import { Terminal } from "../../Terminal";
import { Player } from "@player";
import { listAllDarkwebItems, buyAllDarkwebItems, buyDarkwebItem } from "../../DarkWeb/DarkWeb";
import i18n from "../../i18n";

export function buy(args: (string | number | boolean)[]): void {
  if (!Player.hasTorRouter()) {
    Terminal.error(
      i18n.t('buy.error.connect', { ns: 'command' }),
    );
    return;
  }
  if (args.length != 1) {
    Terminal.print(i18n.t('buy.error.usage', { ns: 'command' }));
    Terminal.print("buy -l");
    Terminal.print("buy -a");
    Terminal.print("buy [item name]");
    return;
  }
  const arg = args[0] + "";
  if (arg == "-l" || arg == "-1" || arg == "--list") listAllDarkwebItems();
  else if (arg == "-a" || arg == "--all") buyAllDarkwebItems();
  else buyDarkwebItem(arg);
}
