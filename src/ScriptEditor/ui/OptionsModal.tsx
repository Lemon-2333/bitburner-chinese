import React, { useState } from "react";
import { Options, WordWrapOptions } from "./Options";
import { Modal } from "../../ui/React/Modal";

import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Select from "@mui/material/Select";
import Switch from "@mui/material/Switch";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";

import { ThemeEditorModal } from "./ThemeEditorModal";

import i18n from "../../i18n";

interface IProps {
  options: Options;
  save: (options: Options) => void;
  onClose: () => void;
  open: boolean;
}

export function OptionsModal(props: IProps): React.ReactElement {
  const [theme, setTheme] = useState(props.options.theme);
  const [insertSpaces, setInsertSpaces] = useState(props.options.insertSpaces);
  const [fontSize, setFontSize] = useState(props.options.fontSize);
  const [wordWrap, setWordWrap] = useState(props.options.wordWrap);
  const [vim, setVim] = useState(props.options.vim);
  const [themeEditorOpen, setThemeEditorOpen] = useState(false);

  function save(): void {
    props.save({
      theme,
      insertSpaces,
      fontSize,
      wordWrap,
      vim,
    });
    props.onClose();
  }

  function onFontChange(event: React.ChangeEvent<HTMLInputElement>): void {
    const f = parseFloat(event.target.value);
    if (isNaN(f)) return;
    setFontSize(f);
  }

  return (
    <Modal open={props.open} onClose={props.onClose}>
      <ThemeEditorModal open={themeEditorOpen} onClose={() => setThemeEditorOpen(false)} />
      <Box display="flex" flexDirection="row" alignItems="center">
        <Typography>{i18n.t('ScriptEditor.Option.Theme',{ns:'ui'})}: </Typography>
        <Select onChange={(event) => setTheme(event.target.value)} value={theme}>
          <MenuItem value="monokai">monokai</MenuItem>
          <MenuItem value="solarized-dark">solarized-dark</MenuItem>
          <MenuItem value="solarized-light">solarized-light</MenuItem>
          <MenuItem value="vs-dark">dark</MenuItem>
          <MenuItem value="light">light</MenuItem>
          <MenuItem value="dracula">dracula</MenuItem>
          <MenuItem value="one-dark">one-dark</MenuItem>
          <MenuItem value="customTheme">Custom theme</MenuItem>
        </Select>
        <Button onClick={() => setThemeEditorOpen(true)} sx={{ mx: 1 }} startIcon={<EditIcon />}>
        {i18n.t('ScriptEditor.Option.CustomTheme',{ns:'ui'})}
        </Button>
      </Box>

      <Box display="flex" flexDirection="row" alignItems="center">
        <Typography>{i18n.t('ScriptEditor.Option.tab',{ns:'ui'})}: </Typography>
        <Switch onChange={(event) => setInsertSpaces(event.target.checked)} checked={insertSpaces} />
      </Box>

      <Box display="flex" flexDirection="row" alignItems="center">
        <Typography>{i18n.t('ScriptEditor.Option.wrap',{ns:'ui'})}: </Typography>
        <Select onChange={(event) => setWordWrap(event.target.value as WordWrapOptions)} value={wordWrap}>
          <MenuItem value={"off"}>{i18n.t('Off',{ns:'common'})}</MenuItem>
          <MenuItem value={"on"}>{i18n.t('On',{ns:'common'})}</MenuItem>
          <MenuItem value={"bounded"}>{i18n.t('ScriptEditor.Option.Bounded',{ns:'ui'})}</MenuItem>
          <MenuItem value={"wordWrapColumn"}>{i18n.t('ScriptEditor.Option.column',{ns:'ui'})}</MenuItem>
        </Select>
      </Box>

      <Box display="flex" flexDirection="row" alignItems="center">
        <Typography>{i18n.t('ScriptEditor.Option.vim',{ns:'ui'})}: </Typography>
        <Switch onChange={(event) => setVim(event.target.checked)} checked={vim} />
      </Box>

      <Box display="flex" flexDirection="row" alignItems="center">
        <TextField type="number" label="Font size" value={fontSize} onChange={onFontChange} />
      </Box>
      <br />
      <Button onClick={save} startIcon={<SaveIcon />}>
        Save
      </Button>
    </Modal>
  );
}
