import { Weapon } from "./types";

export const weaponData: Record<string, Weapon> = {
  Stringmaster: {
    name: "Stringmaster",
    type: "Rectifier",
    rarity: "5-stars",
    attack: 40,
    mainStat: "Crit",
    mainStatAmount: 0.08,
    buff: "Electric Amplification",
  },
  "Stellar Symphony": {
    name: "Stellar Symphony",
    type: "Rectifier",
    rarity: "5-stars",
    attack: 33,
    mainStat: "Energy Regen",
    mainStatAmount: 0.1712,
    buff: "Astral Envolvement",
  },
  "Blazing Brilliance": {
    name: "Blazing Brilliance",
    type: "Sword",
    rarity: "5-stars",
    attack: 47,
    mainStat: "Crit Dmg",
    mainStatAmount: 0.108,
    buff: "Crimson Phoenix",
  },
  "Red Spring": {
    name: "Red Spring",
    type: "Sword",
    rarity: "5-stars",
    attack: 47,
    mainStat: "Crit",
    mainStatAmount: 0.054,
    buff: "Beyond the Cycle",
  },
  "Emerald of Genesis": {
    name: "Emerald of Genesis",
    type: "Sword",
    rarity: "5-stars",
    attack: 47,
    mainStat: "Crit",
    mainStatAmount: 0.054,
    buff: "Emerald of Genesis",
  },
};
