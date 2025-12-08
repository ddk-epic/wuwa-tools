import { Card, CardContent } from "../components/ui/card";
import CharacterDisplay from "./character-display";

import { CharacterProfile } from "@/constants/types";

interface TeamDisplayProps {
  teamStats: (CharacterProfile | null)[];
}

function TeamDisplay({ teamStats }: TeamDisplayProps) {
  return (
    <Card className="w-3/4">
      <CardContent>
        <p className="pb-6">Team Profile</p>
        <div className="flex">
          <CharacterDisplay character={teamStats[0]} />
          <CharacterDisplay character={teamStats[1]} />
          <CharacterDisplay character={teamStats[2]} />
        </div>
      </CardContent>
    </Card>
  );
}

export default TeamDisplay;
