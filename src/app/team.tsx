"use client";

import { useState } from "react";
import TeamDisplay from "./team-display";
import TeamSelect from "./team-select";

import { Character, CharacterConstants, GearBonus } from "@/constants/types";
import {
  bonusSchema,
  charConstantData,
  charStatData,
} from "@/constants/character-data";
import image from "next/image";

function TeamProfile() {
  const [teamSelection, setTeamSelection] = useState<
    (CharacterConstants | null)[]
  >([null, null, null]);
  const [bonusStats, setBonusStats] = useState<GearBonus[]>([
    bonusSchema,
    bonusSchema,
    bonusSchema,
  ]);
  const [team, setTeam] = useState<(Character | null)[]>([null, null, null]);

  const calculateStats = (selectId: number, characterName: string) => {
    // update
    setTeamSelection((prevState) => {
      const newTeam = [...prevState];
      newTeam[selectId] = charConstantData[characterName.toLowerCase()];
      return newTeam;
    });
    // calculate
    const charConst = charConstantData[characterName.toLowerCase()];

    const newCharacter: Character = {
      name: charConst.name,
      image: charConst.image || "/favicon.ico",
      sequence: 0,
      weapon: charConst.weapon,
      weaponRank: 1,
      echo: charConst.echo,
      stats: {
        hp: charConst.baseHp * 12.5 + bonusStats[selectId].hpFlat, //multiplier at lv 90
        atk: charConst.baseAtk * 12.5 + bonusStats[selectId].atkFlat,
        def: charConst.baseDef * 12.5 + bonusStats[selectId].defFlat,
        critRate: 0.05 + bonusStats[selectId].critRate,
        critDamage: 1.5 + bonusStats[selectId].critRate,
        energyRegen: 1 + bonusStats[selectId].energyRegen,

        basic: bonusStats[selectId].basic,
        skill: bonusStats[selectId].skill,
        heavy: bonusStats[selectId].heavy,
        liberation: bonusStats[selectId].liberation,
        element: bonusStats[selectId].element,
      },
    };
    console.log("newCharacter", newCharacter);

    setTeam((prevState) => {
      const newTeam = [...prevState];
      newTeam[selectId] = newCharacter;
      return newTeam;
    });
  };

  return (
    <div className="flex gap-6">
      <TeamSelect team={teamSelection} calculate={calculateStats} />
      <TeamDisplay team={team} />
    </div>
  );
}

export default TeamProfile;
