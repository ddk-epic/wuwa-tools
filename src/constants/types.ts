export type CharacterConstants = {
  id: string;
  name: string;
  weaponType: string;
  weapon: string;
  echo: string;
  baseHp: number;
  baseAtk: number;
  baseDef: number;
  MinorForte1: string;
  MinorForte2: string;
  image: string;
  element: string;
  maxForte: number;
  maxForte2: number;
};

export type GearBonus = {
  hp: number;
  hpFlat: number;
  atk: number;
  atkFlat: number;
  def: number;
  defFlat: number;
  critRate: number;
  critDamage: number;
  energyRegen: number;
  basicBonus: number;
  skillBonus: number;
  heavyBonus: number;
  liberationBonus: number;
  elementBonus: number;
};

export type CharacterStats = {
  hp: number;
  atk: number;
  def: number;
  critRate: number;
  critDamage: number;
  energyRegen: number;
  basicBonus: number;
  skillBonus: number;
  heavyBonus: number;
  liberationBonus: number;
  elementBonus: number;
};

export type CharacterProfile = CharacterStats & {
  name: string;
  image: string;
  sequence: string;
  weapon: string;
  weaponRank: number;
  echo: string;
};
