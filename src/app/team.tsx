"use client";

import { useState } from "react";
import TeamDisplay from "./team-display";
import TeamSelect from "./team-select";

import { CharacterProfile, CharacterStats } from "@/constants/types";

function TeamProfile() {
  const [selectTeam, setTeam] = useState<string[]>(["", "", ""]);
  const [bonusStats, setBonusStats] = useState<(CharacterStats | null)[]>([
    null,
    null,
    null,
  ]);
  const [teamProfile, setTeamProfile] = useState<(CharacterProfile | null)[]>([
    null,
    null,
    null,
  ]);

  return (
    <div className="flex gap-6">
      <TeamSelect
        team={selectTeam}
        setTeam={setTeam}
        setTeamProfile={setTeamProfile}
      />
      <TeamDisplay teamStats={teamProfile} />
    </div>
  );
}

export default TeamProfile;
