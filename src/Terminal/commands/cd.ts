import { Terminal } from "../../Terminal";
import { BaseServer } from "../../Server/BaseServer";

import { evaluateDirectoryPath, removeTrailingSlash } from "../DirectoryHelpers";
import { containsFiles } from "../DirectoryServerHelpers";

import i18n from '../../i18n'

export function cd(args: (string | number | boolean)[], server: BaseServer): void {
  if (args.length > 1) {
    Terminal.error(i18n.t('cd.error.usage',{ns:'command'}));
  } else {
    let dir = args.length === 1 ? args[0] + "" : "/";

    let evaledDir: string | null = "";
    if (dir === "/") {
      evaledDir = "/";
    } else {
      // Ignore trailing slashes
      dir = removeTrailingSlash(dir);

      evaledDir = evaluateDirectoryPath(dir, Terminal.cwd());
      if (evaledDir === null || evaledDir === "") {
        Terminal.error(i18n.t('cd.error.no',{ns:'command'}));
        return;
      }
      if (Terminal.cwd().length > 1 && dir === "..") {
        Terminal.setcwd(evaledDir);
        return;
      }

      if (!containsFiles(server, evaledDir)) {
        Terminal.error(i18n.t('cd.error.no',{ns:'command'}));
        return;
      }
    }

    Terminal.setcwd(evaledDir);
  }
}
