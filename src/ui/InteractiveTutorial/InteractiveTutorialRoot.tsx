import React, { useState, useEffect } from "react";

import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import ArrowForwardIos from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIos from "@mui/icons-material/ArrowBackIos";
import { ITutorialEvents } from "./ITutorialEvents";
import { CopyableText } from "../React/CopyableText";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import LastPageIcon from "@mui/icons-material/LastPage";
import HelpIcon from "@mui/icons-material/Help";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import StorageIcon from "@mui/icons-material/Storage";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import { Theme } from "@mui/material/styles";
import makeStyles from "@mui/styles/makeStyles";
import createStyles from "@mui/styles/createStyles";

import {
  iTutorialPrevStep,
  iTutorialNextStep,
  ITutorial,
  iTutorialSteps,
  iTutorialEnd,
} from "../../InteractiveTutorial";
import { NSSelection } from "./NSSelection";

import i18n from '../../i18n'

interface IContent {
  content: React.ReactElement;
  canNext: boolean;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    textfield: {
      borderBottom: "1px solid " + theme.palette.primary.main,
    },
    code: {
      whiteSpace: "pre",
      backgroundColor: theme.palette.background.paper,
    },
  }),
);

enum Language {
  None,
  NS1,
  NS2,
}

export function InteractiveTutorialRoot(): React.ReactElement {
  const [nsSelectionOpen, setNSSelectionOpen] = useState(false);
  const [language, setLanguage] = useState(Language.None);
  const classes = useStyles();

  const tutorialScriptExtension = {
    [Language.None]: ".script",
    [Language.NS1]: ".script",
    [Language.NS2]: ".js",
  }[language];
  const tutorialScriptName = `n00dles${tutorialScriptExtension}`;

  const contents: { [number: string]: IContent | undefined } = {
    [iTutorialSteps.Start as number]: {
      content: (
        <>
          <Typography>
            {i18n.t('tutorial.welcome.a',{ns:"tutorial"})}
            <br />
            <br />
            {i18n.t('tutorial.welcome.b',{ns:"tutorial"})}
            <br />
            <br />
            {i18n.t('tutorial.welcome.c',{ns:"tutorial"})}
          </Typography>
        </>
      ),
      canNext: true,
    },
    [iTutorialSteps.NSSelection as number]: {
      content: (
        <>
          <Typography>{i18n.t('tutorial.NSSelection.a',{ns:'tutorial'})}</Typography>
          <Typography>{i18n.t('tutorial.NSSelection.b',{ns:'tutorial'})}</Typography>
          <List>
            <ListItem>
              <Typography>{i18n.t('tutorial.NSSelection.c',{ns:'tutorial'})}</Typography>
            </ListItem>
            <ListItem>
              <Typography>
              {i18n.t('tutorial.NSSelection.d',{ns:'tutorial'})}
              </Typography>
            </ListItem>
          </List>
          <Typography>
          {i18n.t('tutorial.NSSelection.e',{ns:'tutorial'})}
          </Typography>
          <Button
            onClick={() => {
              setLanguage(Language.NS1);
              iTutorialNextStep();
            }}
          >
            {i18n.t('tutorial.NSSelection.NS1',{ns:'tutorial'})}
          </Button>
          <Button
            onClick={() => {
              setLanguage(Language.NS2);
              iTutorialNextStep();
            }}
          >
            {i18n.t('tutorial.NSSelection.NS2',{ns:'tutorial'})}
          </Button>
          <Button onClick={() => setNSSelectionOpen(true)}>{i18n.t('tutorial.NSSelection.info',{ns:'tutorial'})}</Button>
          <br />
        </>
      ),
      canNext: false,
    },
    [iTutorialSteps.GoToCharacterPage as number]: {
      content: (
        <>
          <Typography>{i18n.t('tutorial.GoToCharacterPage.a',{ns:"tutorial"})}</Typography>
          <ListItem>
            <EqualizerIcon color={"error"} />
            <Typography color={"error"}>{i18n.t('slidebar.Stats',{ns:"ui"})}</Typography>
          </ListItem>

          <Typography>{i18n.t('tutorial.GoToCharacterPage.c',{ns:"tutorial"})}</Typography>
        </>
      ),
      canNext: false,
    },
    [iTutorialSteps.CharacterPage as number]: {
      content: (
        <>
          <ListItem>
            <EqualizerIcon color={"primary"} />
            <Typography color={"primary"}>{i18n.t('slidebar.Stats',{ns:"ui"})}</Typography>
          </ListItem>
          <Typography>
          {i18n.t('tutorial.GoToCharacterPage.d',{ns:"tutorial"})}
          </Typography>
        </>
      ),
      canNext: true,
    },
    [iTutorialSteps.CharacterGoToTerminalPage as number]: {
      content: (
        <>
          <Typography>{i18n.t('tutorial.CharacterGoToTerminalPage.a',{ns:"tutorial"})}</Typography>
          <ListItem>
            <LastPageIcon color={"error"} />
            <Typography color={"error"}>{i18n.t('slidebar.Terminal',{ns:"ui"})}</Typography>
          </ListItem>
          <Typography>{i18n.t('tutorial.CharacterGoToTerminalPage.c',{ns:"tutorial"})}</Typography>
        </>
      ),
      canNext: false,
    },
    [iTutorialSteps.TerminalIntro as number]: {
      content: (
        <>
          <ListItem>
            <LastPageIcon color={"primary"} />
            <Typography color={"primary"}>{i18n.t('slidebar.Terminal',{ns:"ui"})}</Typography>
          </ListItem>
          <Typography>
          {i18n.t('tutorial.TerminalIntro.a',{ns:"tutorial"})}
          </Typography>
        </>
      ),
      canNext: true,
    },
    [iTutorialSteps.TerminalHelp as number]: {
      content: (
        <>
          <Typography>{i18n.t('tutorial.TerminalHelp.a',{ns:"tutorial"})}</Typography>
          <Typography classes={{ root: classes.textfield }}>{"[home ~/]> help"}</Typography>
          <Typography>{i18n.t('tutorial.TerminalHelp.b',{ns:"tutorial"})}</Typography>
        </>
      ),
      canNext: false,
    },
    [iTutorialSteps.TerminalLs as number]: {
      content: (
        <>
          <Typography classes={{ root: classes.textfield }}>{"[home ~/]> help"}</Typography>
          <Typography>
          {i18n.t('tutorial.TerminalLs.a',{ns:"tutorial"})}{" "}
            <br />
            <br />
            {i18n.t('tutorial.TerminalLs.b',{ns:"tutorial"})}
          </Typography>

          <Typography classes={{ root: classes.textfield }}>{"[home ~/]> ls"}</Typography>
        </>
      ),
      canNext: false,
    },
    [iTutorialSteps.TerminalScan as number]: {
      content: (
        <>
          <Typography classes={{ root: classes.textfield }}>{"[home ~/]> ls"}</Typography>
          <Typography>
            {" "}
            {i18n.t('tutorial.TerminalScan.a',{ns:"tutorial"})}{" "}
            {i18n.t('tutorial.TerminalScan.b',{ns:"tutorial"})} <br />
            <br />
            {i18n.t('tutorial.TerminalScan.c',{ns:"tutorial"})}
          </Typography>
          <Typography classes={{ root: classes.textfield }}>{"[home ~/]> scan"}</Typography>
        </>
      ),
      canNext: false,
    },
    [iTutorialSteps.TerminalScanAnalyze1 as number]: {
      content: (
        <>
          <Typography classes={{ root: classes.textfield }}>{"[home ~/]> scan"}</Typography>
          <Typography>
          {i18n.t('tutorial.TerminalScanAnalyze1.a',{ns:"tutorial"})}<br />
            <br />
            {i18n.t('tutorial.TerminalScanAnalyze1.b',{ns:"tutorial"})}{" "}
          </Typography>

          <Typography classes={{ root: classes.textfield }}>{"[home ~/]> scan-analyze"}</Typography>
          <Typography>{i18n.t('tutorial.TerminalScanAnalyze1.c',{ns:"tutorial"})}</Typography>
        </>
      ),
      canNext: false,
    },
    [iTutorialSteps.TerminalScanAnalyze2 as number]: {
      content: (
        <>
          <Typography classes={{ root: classes.textfield }}>{"[home ~/]> scan-analyze"}</Typography>
          <Typography>
          {i18n.t('tutorial.TerminalScanAnalyze2.a',{ns:"tutorial"})} <br />
            <br />{i18n.t('tutorial.TerminalScanAnalyze2.b',{ns:"tutorial"})}{" "}
          </Typography>

          <Typography classes={{ root: classes.textfield }}>{"[home ~/]> scan-analyze 2"}</Typography>
        </>
      ),
      canNext: false,
    },
    [iTutorialSteps.TerminalConnect as number]: {
      content: (
        <>
          <Typography>
          {i18n.t('tutorial.TerminalConnect.a',{ns:"tutorial"})}
          </Typography>
          <Typography classes={{ root: classes.textfield }}>{"[home ~/]> connect hostname"}</Typography>

          <Typography>{i18n.t('tutorial.TerminalConnect.b',{ns:"tutorial"})}</Typography>
          <Typography classes={{ root: classes.textfield }}>{"[home ~/]> scan-analyze 2"}</Typography>

          <Typography>
            {" "}
            {i18n.t('tutorial.TerminalConnect.c',{ns:"tutorial"})}
          </Typography>

          <Typography classes={{ root: classes.textfield }}>{"[home ~/]> connect n00dles"}</Typography>
        </>
      ),
      canNext: false,
    },
    [iTutorialSteps.TerminalAnalyze as number]: {
      content: (
        <>
          <Typography>
          {i18n.t('tutorial.TerminalAnalyze.a',{ns:"tutorial"})}
            <br />
            <br />{i18n.t('tutorial.TerminalAnalyze.b',{ns:"tutorial"})}<br />
            <br />
            {i18n.t('tutorial.TerminalAnalyze.c',{ns:"tutorial"})}{" "}
          </Typography>
          <Typography classes={{ root: classes.textfield }}>{"[n00dles ~/]> analyze"}</Typography>
        </>
      ),
      canNext: false,
    },
    [iTutorialSteps.TerminalNuke as number]: {
      content: (
        <>
          <Typography>{i18n.t('tutorial.TerminalNuke.a',{ns:"tutorial"})}</Typography>
          <Typography classes={{ root: classes.textfield }}>{"[n00dles ~/]> analyze"}</Typography>

          <Typography>
          {i18n.t('tutorial.TerminalNuke.b',{ns:"tutorial"})}<br />
            <br />{i18n.t('tutorial.TerminalNuke.c',{ns:"tutorial"})}
          </Typography>
          <Typography classes={{ root: classes.textfield }}>{"[n00dles ~/]> analyze"}</Typography>

          <Typography>
            {" "}
            {i18n.t('tutorial.TerminalNuke.d',{ns:"tutorial"})}{" "}
          </Typography>
          <Typography classes={{ root: classes.textfield }}>{"[n00dles ~/]> run NUKE.exe"}</Typography>

          <Typography></Typography>
        </>
      ),
      canNext: true,
    },
    [iTutorialSteps.TerminalManualHack as number]: {
      content: (
        <>
          <Typography>{i18n.t('tutorial.TerminalManualHack.a',{ns:"tutorial"})} </Typography>
          <Typography classes={{ root: classes.textfield }}>{"[n00dles ~/]> hack"}</Typography>

          <Typography>{i18n.t('tutorial.TerminalManualHack.b',{ns:"tutorial"})}</Typography>
        </>
      ),
      canNext: true,
    },
    [iTutorialSteps.TerminalHackingMechanics as number]: {
      content: (
        <Typography>
          {i18n.t('tutorial.TerminalHackingMechanics.a',{ns:"tutorial"})}
          <br />
          <br />
          {i18n.t('tutorial.TerminalHackingMechanics.b',{ns:"tutorial"})}
          <br />
          <br />
          {i18n.t('tutorial.TerminalHackingMechanics.c',{ns:"tutorial"})}{" "}
          <Typography classes={{ root: classes.textfield }}>{"[n00dles ~/]> grow"}</Typography>
          {i18n.t('tutorial.TerminalHackingMechanics.d',{ns:"tutorial"})}{" "}
          <Typography classes={{ root: classes.textfield }}>{"[n00dles ~/]> weaken"}</Typography>
          {i18n.t('tutorial.TerminalHackingMechanics.e',{ns:"tutorial"})}
        </Typography>
      ),
      canNext: true,
    },
    [iTutorialSteps.TerminalGoHome as number]: {
      content: (
        <>
          <Typography>{i18n.t('tutorial.TerminalGoHome.a',{ns:"tutorial"})}</Typography>
          <Typography classes={{ root: classes.textfield }}>{"[n00dles ~/]> home"}</Typography>

          <Typography>{i18n.t('tutorial.TerminalGoHome.b',{ns:"tutorial"})}</Typography>
        </>
      ),
      canNext: true,
    },
    [iTutorialSteps.TerminalCreateScript as number]: {
      content: (
        <>
          <Typography>
          {i18n.t('tutorial.TerminalCreateScript.a',{ns:"tutorial"})}
            <br />
            <br />
            {i18n.t('tutorial.TerminalCreateScript.b',{ns:"tutorial"})}{" "}
          </Typography>
          <Typography classes={{ root: classes.textfield }}>{"[home ~/]> nano"}</Typography>

          <Typography>
          {i18n.t('tutorial.TerminalCreateScript.c',{ns:"tutorial"})}
          {tutorialScriptExtension}
          {i18n.t('tutorial.TerminalCreateScript.e',{ns:"tutorial"})}{" "}
          </Typography>
          <Typography classes={{ root: classes.textfield }}>{`[home ~/]> nano ${tutorialScriptName}`}</Typography>

          <Typography>
          {i18n.t('tutorial.TerminalCreateScript.d',{ns:"tutorial"})}
          </Typography>
        </>
      ),
      canNext: false,
    },
    [iTutorialSteps.TerminalTypeScript as number]: {
      content: (
        <>
          <Typography>
          {i18n.t('tutorial.TerminalTypeScript.a',{ns:"tutorial"})}{" "}
            {language !== Language.NS2 && <>{i18n.t('tutorial.TerminalTypeScript.b',{ns:"tutorial"})}</>}{i18n.t('tutorial.TerminalTypeScript.c',{ns:"tutorial"})}<br />
          </Typography>

          <Typography classes={{ root: classes.code }}>
            {language !== Language.NS2 && (
              <CopyableText
                value={`while(true) {
  hack('n00dles');
}`}
              />
            )}
            {language === Language.NS2 && (
              <CopyableText
                value={`export async function main(ns) {
	while(true) {
		await ns.hack('n00dles');
	}
}`}
              />
            )}
          </Typography>
          <Typography>
          {i18n.t('tutorial.TerminalTypeScript.d',{ns:"tutorial"})}
            <br />
            <br />
            {i18n.t('tutorial.TerminalTypeScript.e',{ns:"tutorial"})}
          </Typography>
        </>
      ),
      canNext: false,
    },
    [iTutorialSteps.TerminalFree as number]: {
      content: (
        <>
          <Typography>
          {i18n.t('tutorial.TerminalFree.a',{ns:"tutorial"})}
            <br />
            <br />
            {i18n.t('tutorial.TerminalFree.b',{ns:"tutorial"})}
          </Typography>
          <Typography classes={{ root: classes.textfield }}>{"[home ~/]> free"}</Typography>
        </>
      ),
      canNext: false,
    },
    [iTutorialSteps.TerminalRunScript as number]: {
      content: (
        <>
          <Typography>
          {i18n.t('tutorial.TerminalRunScript.a',{ns:"tutorial"})}
          </Typography>
          <Typography classes={{ root: classes.textfield }}>{`[home ~/]> run ${tutorialScriptName}`}</Typography>
        </>
      ),
      canNext: false,
    },
    [iTutorialSteps.TerminalGoToActiveScriptsPage as number]: {
      content: (
        <>
          <Typography>
          {i18n.t('tutorial.TerminalGoToActiveScriptsPage.a',{ns:"tutorial"})}{tutorialScriptName}{i18n.t('tutorial.TerminalGoToActiveScriptsPage.b',{ns:"tutorial"})}<br />
            <br />
            {i18n.t('tutorial.TerminalGoToActiveScriptsPage.c',{ns:"tutorial"})}<br />
            <br />
            {i18n.t('tutorial.TerminalGoToActiveScriptsPage.d',{ns:"tutorial"})}{" "}
          </Typography>
          <ListItem>
            <StorageIcon color={"error"} />
            <Typography color={"error"}>{i18n.t('slidebar.ActiveScripts',{ns:'ui'})}</Typography>
          </ListItem>
        </>
      ),
      canNext: false,
    },
    [iTutorialSteps.ActiveScriptsPage as number]: {
      content: (
        <>
          <Typography>
          {i18n.t('tutorial.ActiveScriptsPage.a',{ns:"tutorial"})}
          </Typography>
          <ListItem>
            <LastPageIcon color={"error"} />
            <Typography color={"error"}>{i18n.t('slidebar.Terminal',{ns:'ui'})}</Typography>
          </ListItem>
        </>
      ),
      canNext: false,
    },
    [iTutorialSteps.ActiveScriptsToTerminal as number]: {
      content: (
        <>
          <Typography>
          {i18n.t('tutorial.ActiveScriptsToTerminal.a',{ns:"tutorial"})}{" "}
          </Typography>
          <Typography classes={{ root: classes.textfield }}>{`[home ~/]> tail ${tutorialScriptName}`}</Typography>
        </>
      ),
      canNext: false,
    },
    [iTutorialSteps.TerminalTailScript as number]: {
      content: (
        <>
          <Typography>
          {i18n.t('tutorial.TerminalTailScript.a',{ns:"tutorial"})}<br />
            <br />
            {i18n.t('tutorial.TerminalTailScript.b',{ns:"tutorial"})}
          </Typography>
          <ListItem>
            <HelpIcon color={"primary"} />
            <Typography color={"primary"}>{i18n.t('slidebar.Tutorial',{ns:'ui'})}</Typography>
          </ListItem>
          <Typography>
          {i18n.t('tutorial.TerminalTailScript.c',{ns:"tutorial"})}
            <br />
            <br />
            {i18n.t('tutorial.TerminalTailScript.d',{ns:"tutorial"})}
          </Typography>
        </>
      ),
      canNext: true,
    },
    [iTutorialSteps.GoToHacknetNodesPage as number]: {
      content: (
        <>
          <Typography>
          {i18n.t('tutorial.GoToHacknetNodesPage.d',{ns:"tutorial"})}
          </Typography>
          <ListItem>
            <AccountTreeIcon color={"error"} />
            <Typography color={"error"}>{i18n.t('slidebar.Hacknet',{ns:'ui'})}</Typography>
          </ListItem>
          <Typography>{i18n.t('tutorial.GoToHacknetNodesPage.d',{ns:"tutorial"})}</Typography>
        </>
      ),
      canNext: true,
    },
    [iTutorialSteps.HacknetNodesIntroduction as number]: {
      content: (
        <Typography>
          {i18n.t('tutorial.HacknetNodesIntroduction.a',{ns:"tutorial"})}
        </Typography>
      ),
      canNext: true,
    },
    [iTutorialSteps.HacknetNodesGoToWorldPage as number]: {
      content: (
        <>
          <Typography>
          {i18n.t('tutorial.HacknetNodesGoToWorldPage.a',{ns:"tutorial"})}
            <br />
            <br />
            {i18n.t('tutorial.HacknetNodesGoToWorldPage.b',{ns:"tutorial"})}
          </Typography>
          <ListItem>
            <LocationCityIcon color={"error"} />
            <Typography color={"error"}>{i18n.t('slidebar.City',{ns:'ui'})}</Typography>
          </ListItem>
        </>
      ),
      canNext: true,
    },
    [iTutorialSteps.WorldDescription as number]: {
      content: (
        <>
          <Typography>
            {i18n.t('tutorial.WorldDescription.a',{ns:"tutorial"})}
            <br />
            <br />
            {i18n.t('tutorial.WorldDescription.b',{ns:"tutorial"})}
          </Typography>
          <ListItem>
            <HelpIcon color={"error"} />
            <Typography color={"error"}>{i18n.t('slidebar.Tutorial',{ns:'ui'})}</Typography>
          </ListItem>
        </>
      ),
      canNext: true,
    },
    [iTutorialSteps.TutorialPageInfo as number]: {
      content: (
        <Typography>
          {i18n.t('tutorial.TutorialPageInfo.a',{ns:"tutorial"})}
        </Typography>
      ),
      canNext: true,
    },
    [iTutorialSteps.End as number]: {
      content: <Typography></Typography>,
      canNext: true,
    },
  };

  const setRerender = useState(false)[1];
  function rerender(): void {
    setRerender((old) => !old);
  }

  useEffect(() => {
    return ITutorialEvents.subscribe(rerender);
  }, []);
  const step = ITutorial.currStep;
  const content = contents[step];
  if (content === undefined) throw new Error("error in the tutorial");
  return (
    <>
      <NSSelection open={nsSelectionOpen} onClose={() => setNSSelectionOpen(false)} />
      <Paper square sx={{ maxWidth: "70vw", p: 2 }}>
        {content.content}
        {step !== iTutorialSteps.TutorialPageInfo && (
          <>
            {step !== iTutorialSteps.Start && (
              <IconButton onClick={iTutorialPrevStep} aria-label="previous">
                <ArrowBackIos />
              </IconButton>
            )}
            {(content.canNext || ITutorial.stepIsDone[step]) && (
              <IconButton onClick={iTutorialNextStep} aria-label="next">
                <ArrowForwardIos />
              </IconButton>
            )}
          </>
        )}
        <br />
        <br />
        <Button onClick={iTutorialEnd}>
          {step !== iTutorialSteps.TutorialPageInfo ? i18n.t('tutorial.gl.a',{ns:"tutorial"}) : i18n.t('tutorial.gl.b',{ns:"tutorial"})}
        </Button>
      </Paper>
    </>
  );
}
