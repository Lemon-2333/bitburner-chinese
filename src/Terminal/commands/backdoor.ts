import { Terminal } from "../../Terminal";
import { Player } from "@player";
import { BaseServer } from "../../Server/BaseServer";
import { Server } from "../../Server/Server";
import { HacknetServer } from "../../Hacknet/HacknetServer";
import i18n from "../../i18n";

export function backdoor(args: (string | number | boolean)[], server: BaseServer): void {
  if (args.length !== 0) {
    Terminal.error(i18n.t('backdoor.error.usage',{ns:'command'}));
    return;
  }

  if (!(server instanceof Server)) {
    Terminal.error(i18n.t('backdoor.error.normal',{ns:'command'}));
  }

  const normalServer = server as Server;

  if (normalServer.purchasedByPlayer) {
    Terminal.error(
      i18n.t('backdoor.error.self',{ns:'command'}),
    );
  } else if (!normalServer.hasAdminRights) {
    Terminal.error(i18n.t('backdoor.error.admin',{ns:'command'}));
  } else if (normalServer.requiredHackingSkill > Player.skills.hacking) {
    Terminal.error(
      i18n.t('backdoor.error.skill',{ns:'command'}),
    );
  } else if (normalServer instanceof HacknetServer) {
    Terminal.error(i18n.t('backdoor.error.type',{ns:'command'}));
  } else {
    Terminal.startBackdoor();
  }
}
