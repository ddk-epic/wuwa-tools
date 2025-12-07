import { Card, CardContent } from "../components/ui/card";
import CharacterDisplay from "./character-display";

import { CharacterProfile } from "@/constants/types";

interface TeamDisplayProps {
  stats: Record<string, CharacterProfile | null>;
}

function TeamDisplay({ stats: teamStats }: TeamDisplayProps) {
  return (
    <Card className="w-3/4">
      <CardContent>
        <p className="pb-6">Team Profile</p>
        <div className="flex">
          <CharacterDisplay character={teamStats["1"]} />
          <CharacterDisplay character={teamStats["2"]} />
          <CharacterDisplay character={teamStats["3"]} />
        </div>
      </CardContent>
    </Card>
  );
}

export default TeamDisplay;
