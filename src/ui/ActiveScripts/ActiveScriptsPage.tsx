/**
 * Root React Component for the "Active Scripts" UI page. This page displays
 * and provides information about all of the player's scripts that are currently running
 */
import React from "react";

import { ScriptProduction } from "./ScriptProduction";
import { ServerAccordions } from "./ServerAccordions";

import { WorkerScript } from "../../Netscript/WorkerScript";

import Typography from "@mui/material/Typography";

import i18n from "../../i18n";

interface IProps {
  workerScripts: Map<number, WorkerScript>;
}

export function ActiveScriptsPage(props: IProps): React.ReactElement {
  return (
    <>
      <Typography>
        {i18n.t('ActiveScript.a',{ns:'ui'})}
      </Typography>

      <ScriptProduction />
      <ServerAccordions {...props} />
    </>
  );
}
