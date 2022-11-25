/**
 * Root React Component for the "Active Scripts" UI page. This page displays
 * and provides information about all of the player's scripts that are currently running
 */
import React from "react";
import Typography from "@mui/material/Typography";

import { recentScripts } from "../../Netscript/RecentScripts";
import { RecentScriptAccordion } from "./RecentScriptAccordion";

import i18n from "../../i18n"

export function RecentScriptsPage(): React.ReactElement {
  return (
    <>
      <Typography>
      {i18n.t('ActiveScript.c',{ns:'ui'})}
        </Typography>
      {recentScripts.map((r) => (
        <RecentScriptAccordion key={r.runningScript.pid} recentScript={r} />
      ))}
    </>
  );
}
