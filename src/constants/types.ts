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

export type Weapon = {
  name: string;
  type: string;
  rarity: string;
  attack: number;
  mainStat: string;
  mainStatAmount: number;
  buff: string;
}

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
  basic: number;
  skill: number;
  heavy: number;
  liberation: number;
  element: number;
};

export type CharacterStats = {
  hp: number;
  atk: number;
  def: number;
  critRate: number;
  critDamage: number;
  energyRegen: number;
  basic: number;
  skill: number;
  heavy: number;
  liberation: number;
  element: number;
};

export type CharacterProfile = {
  name: string;
  image: string;
  sequence: number;
  weapon: string;
  weaponRank: number;
  echo: string;
};

export type Character = CharacterProfile & {
  stats: {
    hp: number;
    atk: number;
    def: number;
    critRate: number;
    critDamage: number;
    energyRegen: number;
    basic: number;
    skill: number;
    heavy: number;
    liberation: number;
    element: number;
  };
};
