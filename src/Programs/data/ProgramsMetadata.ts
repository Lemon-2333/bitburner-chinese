import { IProgramCreate } from "../Program";
import { CONSTANTS } from "../../Constants";
import { BaseServer } from "../../Server/BaseServer";
import { Server } from "../../Server/Server";
import { Terminal } from "../../Terminal";
import { Player } from "@player";
import { convertTimeMsToTimeElapsedString } from "../../utils/StringHelperFunctions";
import { GetServer } from "../../Server/AllServers";
import { numeralWrapper } from "../../ui/numeralFormat";
import { BitNodeMultipliers } from "../../BitNode/BitNodeMultipliers";
import { BitFlumeEvent } from "../../BitNode/ui/BitFlumeModal";
import { calculateHackingTime, calculateGrowTime, calculateWeakenTime } from "../../Hacking";
import { FactionNames } from "../../Faction/data/FactionNames";

import i18n  from "../../i18n";

function requireHackingLevel(lvl: number) {
  return function () {
    return Player.skills.hacking + Player.skills.intelligence / 2 >= lvl;
  };
}

function bitFlumeRequirements() {
  return function () {
    return Player.sourceFiles.length > 0 && Player.skills.hacking >= 1;
  };
}

interface IProgramCreationParams {
  key: string;
  name: string;
  create: IProgramCreate | null;
  run: (args: string[], server: BaseServer) => void;
}

export const programsMetadata: IProgramCreationParams[] = [
  {
    key: "NukeProgram",
    name: "NUKE.exe",
    create: {
      level: 1,
      tooltip: i18n.t('NukeProgram.tooltip',{ns:'program'}),
      req: requireHackingLevel(1),
      time: CONSTANTS.MillisecondsPerFiveMinutes,
    },
    run: (_args: string[], server: BaseServer): void => {
      if (!(server instanceof Server)) {
        Terminal.error(
          i18n.t('NukeProgram.error',{ns:'program'})
          );
        return;
      }
      if (server.hasAdminRights) {
        Terminal.print(
          i18n.t('NukeProgram.a',{ns:'program'})
        );
        Terminal.print(
          i18n.t('NukeProgram.b',{ns:'program'})
        );
        return;
      }
      if (server.openPortCount >= server.numOpenPortsRequired) {
        server.hasAdminRights = true;
        Terminal.print(
          i18n.t('NukeProgram.d',{ns:'program'})
          + server.hostname);
        Terminal.print(
          i18n.t('NukeProgram.b',{ns:'program'})
        );
        return;
      }

      Terminal.print(
        i18n.t('NukeProgram.c',{ns:'program'})
      );
    },
  },
  {
    key: "BruteSSHProgram",
    name: "BruteSSH.exe",
    create: {
      level: 50,
      tooltip:i18n.t('BruteSSHProgram.tooltip',{ns:'program'}),
      req: requireHackingLevel(50),
      time: CONSTANTS.MillisecondsPerFiveMinutes * 2,
    },
    run: (_args: string[], server: BaseServer): void => {
      if (!(server instanceof Server)) {
        Terminal.error(
          i18n.t('BruteSSHProgram.error',{ns:'program'})
        );
        return;
      }
      if (server.sshPortOpen) {
        Terminal.print(
          i18n.t('BruteSSHProgram.a',{ns:'program'})
        );
        return;
      }

      server.sshPortOpen = true;
      Terminal.print(
        i18n.t('BruteSSHProgram.b',{ns:'program'})
      );
      server.openPortCount++;
    },
  },
  {
    key: "FTPCrackProgram",
    name: "FTPCrack.exe",
    create: {
      level: 100,
      tooltip: i18n.t('FTPCrackProgram.tooltip',{ns:'program'}),
      req: requireHackingLevel(100),
      time: CONSTANTS.MillisecondsPerHalfHour,
    },
    run: (_args: string[], server: BaseServer): void => {
      if (!(server instanceof Server)) {
        Terminal.error(
          i18n.t('FTPCrackProgram.error',{ns:'program'})
        );
        return;
      }
      if (server.ftpPortOpen) {
        Terminal.print(
          i18n.t('FTPCrackProgram.a',{ns:'program'})
        );
        return;
      }

      server.ftpPortOpen = true;
      Terminal.print(
        i18n.t('FTPCrackProgram.b',{ns:'program'})
      );
      server.openPortCount++;
    },
  },
  {
    key: "RelaySMTPProgram",
    name: "relaySMTP.exe",
    create: {
      level: 250,
      tooltip:i18n.t('RelaySMTPProgram.tooltip',{ns:'program'}),
      req: requireHackingLevel(250),
      time: CONSTANTS.MillisecondsPer2Hours,
    },
    run: (_args: string[], server: BaseServer): void => {
      if (!(server instanceof Server)) {
        Terminal.error(i18n.t('RelaySMTPProgram.error',{ns:'program'}));
        return;
      }
      if (server.smtpPortOpen) {
        Terminal.print(
          i18n.t('RelaySMTPProgram.a',{ns:'program'})
        );
        return;
      }

      server.smtpPortOpen = true;
      Terminal.print(
        i18n.t('RelaySMTPProgram.b',{ns:'program'})
      );
      server.openPortCount++;
    },
  },
  {
    key: "HTTPWormProgram",
    name: "HTTPWorm.exe",
    create: {
      level: 500,
      tooltip:i18n.t('HTTPWormProgram.tooltip',{ns:'program'}),
      req: requireHackingLevel(500),
      time: CONSTANTS.MillisecondsPer4Hours,
    },
    run: (_args: string[], server: BaseServer): void => {
      if (!(server instanceof Server)) {
        Terminal.error(
          i18n.t('HTTPWormProgram.error',{ns:'program'})
        );
        return;
      }
      if (server.httpPortOpen) {
        Terminal.print(
          i18n.t('HTTPWormProgram.a',{ns:'program'})
        );
        return;
      }

      server.httpPortOpen = true;
      Terminal.print(
        i18n.t('HTTPWormProgram.b',{ns:'program'})
      );
      server.openPortCount++;
    },
  },
  {
    key: "SQLInjectProgram",
    name: "SQLInject.exe",
    create: {
      level: 750,
      tooltip: i18n.t('SQLInjectProgram.tooltip',{ns:'program'}),
      req: requireHackingLevel(750),
      time: CONSTANTS.MillisecondsPer8Hours,
    },
    run: (_args: string[], server: BaseServer): void => {
      if (!(server instanceof Server)) {
        Terminal.error(
          i18n.t('SQLInjectProgram.error',{ns:'program'})
        );
        return;
      }
      if (server.sqlPortOpen) {
        Terminal.print(
          i18n.t('SQLInjectProgram.a',{ns:'program'})
        );
        return;
      }

      server.sqlPortOpen = true;
      Terminal.print(
        i18n.t('SQLInjectProgram.b',{ns:'program'})
      );
      server.openPortCount++;
    },
  },
  {
    key: "DeepscanV1",
    name: "DeepscanV1.exe",
    create: {
      level: 75,
      tooltip: i18n.t('DeepscanV1.tooltip',{ns:'program'}),
      req: requireHackingLevel(75),
      time: CONSTANTS.MillisecondsPerQuarterHour,
    },
    run: (): void => {
      Terminal.print(i18n.t('DeepscanV1.a',{ns:'program'}));
      Terminal.print(i18n.t('DeepscanV1.b',{ns:'program'}));
    },
  },
  {
    key: "DeepscanV2",
    name: "DeepscanV2.exe",
    create: {
      level: 400,
      tooltip: i18n.t('DeepscanV2.tooltip',{ns:'program'}),
      req: requireHackingLevel(400),
      time: CONSTANTS.MillisecondsPer2Hours,
    },
    run: (): void => {
      Terminal.print(i18n.t('DeepscanV2.a',{ns:'program'}));
      Terminal.print(i18n.t('DeepscanV2.b',{ns:'program'}));
    },
  },
  {
    key: "ServerProfiler",
    name: "ServerProfiler.exe",
    create: {
      level: 75,
      tooltip: i18n.t('ServerProfiler.tooltip',{ns:'program'}),
      req: requireHackingLevel(75),
      time: CONSTANTS.MillisecondsPerHalfHour,
    },
    run: (args: string[]): void => {
      if (args.length !== 1) {
        Terminal.error(
          i18n.t('ServerProfiler.error',{ns:'program'})
          );
        return;
      }

      const targetServer = GetServer(args[0]);
      if (targetServer == null) {
        Terminal.error(
          i18n.t('ServerProfiler.error_a',{ns:'program'})
        );
        return;
      }

      if (!(targetServer instanceof Server)) {
        Terminal.error(
          i18n.t('ServerProfiler.error_b',{ns:'program'})
        );
        return;
      }

      Terminal.print(targetServer.hostname + ":");
      Terminal.print(
         i18n.t('ServerProfiler.a',{ns:'program'})
          + targetServer.baseDifficulty);
      Terminal.print(
        i18n.t('ServerProfiler.b',{ns:'program'})
        + targetServer.hackDifficulty);
      Terminal.print(
        i18n.t('ServerProfiler.c',{ns:'program'})
        + targetServer.serverGrowth);
      Terminal.print(
        `${i18n.t('ServerProfiler.d',{ns:'program'})}${convertTimeMsToTimeElapsedString(
          calculateHackingTime(targetServer, Player) * 1000,
          true,
        )}`,
      );
      Terminal.print(
        `${i18n.t('ServerProfiler.e',{ns:'program'})}${convertTimeMsToTimeElapsedString(
          calculateGrowTime(targetServer, Player) * 1000,
          true,
        )}`,
      );
      Terminal.print(
        `${i18n.t('ServerProfiler.f',{ns:'program'})}${convertTimeMsToTimeElapsedString(
          calculateWeakenTime(targetServer, Player) * 1000,
          true,
        )}`,
      );
    },
  },
  {
    key: "AutoLink",
    name: "AutoLink.exe",
    create: {
      level: 25,
      tooltip: i18n.t('AutoLink.tooltip',{ns:'program'}),
      req: requireHackingLevel(25),
      time: CONSTANTS.MillisecondsPerQuarterHour,
    },
    run: (): void => {
      Terminal.print(i18n.t('AutoLink.a',{ns:'program'}));
      Terminal.print(i18n.t('AutoLink.b',{ns:'program'}));
      Terminal.print(i18n.t('AutoLink.c',{ns:'program'}));
    },
  },
  {
    key: "Formulas",
    name: "Formulas.exe",
    create: {
      level: 1000,
      tooltip: i18n.t('Formulas.tooltip',{ns:'program'}),
      req: requireHackingLevel(1000),
      time: CONSTANTS.MillisecondsPer4Hours,
    },
    run: (): void => {
      Terminal.print(i18n.t('Formulas.a',{ns:'program'}));
      Terminal.print(i18n.t('Formulas.b',{ns:'program'}));
    },
  },
  {
    key: "BitFlume",
    name: "b1t_flum3.exe",
    create: {
      level: 1,
      tooltip: i18n.t('BitFlume.tooltip',{ns:'program'}),
      req: bitFlumeRequirements(),
      time: CONSTANTS.MillisecondsPerFiveMinutes / 20,
    },
    run: (): void => {
      BitFlumeEvent.emit();
    },
  },
  {
    key: "Flight",
    name: "fl1ght.exe",
    create: null,
    run: (): void => {
      const numAugReq = BitNodeMultipliers.DaedalusAugsRequirement;
      const fulfilled =
        Player.augmentations.length >= numAugReq && Player.money > 1e11 && Player.skills.hacking >= 2500;
      if (!fulfilled) {
        Terminal.print(`${i18n.t('Flight.a',{ns:'program'})} ${Player.augmentations.length} / ${numAugReq}`);
        Terminal.print(`${i18n.t('Flight.b',{ns:'program'})} ${numeralWrapper.formatMoney(Player.money)} / $100b`);
        Terminal.print(`${i18n.t('Flight.c',{ns:'program'})} ${Player.skills.hacking} / 2500`);
        return;
      }

      Terminal.print(i18n.t('Flight.d',{ns:'program'}));
      Terminal.print(`-- ${FactionNames.Daedalus} --`);
    },
  },
];
