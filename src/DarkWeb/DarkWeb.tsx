import React from "react";
import { DarkWebItems } from "./DarkWebItems";

import { Player } from "@player";
import { Terminal } from "../Terminal";
import { SpecialServers } from "../Server/data/SpecialServers";
import { numeralWrapper } from "../ui/numeralFormat";
import { Money } from "../ui/React/Money";
import { DarkWebItem } from "./DarkWebItem";
import { isCreateProgramWork } from "../Work/CreateProgramWork";

import i18n from '../i18n'

//Posts a "help" message if connected to DarkWeb
export function checkIfConnectedToDarkweb(): void {
  const server = Player.getCurrentServer();
  if (server !== null && SpecialServers.DarkWeb == server.hostname) {
    Terminal.print(
      "You are now connected to the dark web. From the dark web you can purchase illegal items. " +
        "Use the 'buy -l' command to display a list of all the items you can buy. Use 'buy [item-name]' " +
        "to purchase an item. Use 'buy -a' to purchase all unowned items.",
    );
  }
}

export function listAllDarkwebItems(): void {
  for (const key of Object.keys(DarkWebItems)) {
    const item = DarkWebItems[key];

    const cost = Player.getHomeComputer().programs.includes(item.program) ? (
      <span style={{ color: `green` }}>[OWNED]</span>
    ) : (
      <Money money={item.price} />
    );

    Terminal.printRaw(
      <>
        <span>{item.program}</span> - <span>{cost}</span> - <span>{item.description}</span>
      </>,
    );
  }
}

export function buyDarkwebItem(itemName: string): void {
  itemName = itemName.toLowerCase();

  // find the program that matches, if any
  let item: DarkWebItem | null = null;

  for (const key of Object.keys(DarkWebItems)) {
    const i = DarkWebItems[key];
    if (i.program.toLowerCase() == itemName) {
      item = i;
    }
  }

  // return if invalid
  if (item === null) {
    Terminal.error(i18n.t('buy.error.unrecognized', { ns: 'command' }) + itemName);
    return;
  }

  // return if the player already has it.
  if (Player.hasProgram(item.program)) {
    Terminal.print(i18n.t('buy.error.has.a', { ns: 'command' }) + item.program + i18n.t('buy.error.has.b', { ns: 'command' }));
    return;
  }

  // return if the player doesn't have enough money
  if (Player.money < item.price) {
    Terminal.error(i18n.t('buy.error.money', { ns: 'command' }) + item.program);
    return;
  }

  // buy and push
  Player.loseMoney(item.price, "other");

  Player.getHomeComputer().pushProgram(item.program);
  // Cancel if the program is in progress of writing
  if (isCreateProgramWork(Player.currentWork) && Player.currentWork.programName === item.program) {
    Player.finishWork(true);
  }

  Terminal.print(
    i18n.t('buy.finish.a', { ns: 'command' }) + item.program + i18n.t('buy.finish_b', { ns: 'command' }),
  );
}

export function buyAllDarkwebItems(): void {
  const itemsToBuy: DarkWebItem[] = [];
  let cost = 0;

  for (const key of Object.keys(DarkWebItems)) {
    const item = DarkWebItems[key];
    if (!Player.hasProgram(item.program)) {
      itemsToBuy.push(item);
      cost += item.price;
    }
  }

  if (itemsToBuy.length === 0) {
    Terminal.print(i18n.t('buy.error.all', { ns: 'command' }));
    return;
  }

  if (cost > Player.money) {
    Terminal.error(
      i18n.t('buy.error.money_n.a', { ns: 'command' }) + numeralWrapper.formatMoney(cost) + i18n.t('buy.error.money_n.b', { ns: 'command' }),
    );
    return;
  }

  for (const item of itemsToBuy) {
    buyDarkwebItem(item.program);
  }
}
