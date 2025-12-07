"use client";

import { useState } from "react";
import TeamDisplay from "./team-display";
import TeamSelect from "./team-select";

import { CharacterProfile, CharacterStats } from "@/constants/types";
import { bonusSchema, charStatData } from "@/constants/character-data";

const characterStatDefault = {
  "1": bonusSchema,
  "2": bonusSchema,
  "3": bonusSchema,
};

const characterProfileDefault = {
  "1": charStatData,
  "2": charStatData,
  "3": charStatData,
};

function TeamProfile() {
  const [bonusStats, SetBonusStats] =
    useState<Record<string, CharacterStats | null>>(characterStatDefault);
  const [teamProfile, SetTeamProfile] = useState<
    Record<string, CharacterProfile | null>
  >(characterProfileDefault);

  return (
    <div className="flex gap-6">
      <TeamSelect />
      <TeamDisplay stats={teamProfile} />
    </div>
  );
}

export default TeamProfile;
