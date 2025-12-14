import { Card, CardContent } from "../components/ui/card";
import CharacterDisplay from "./character-display";

import { Character } from "@/constants/types";

interface TeamDisplayProps {
  team: (Character | null)[];
}

function TeamDisplay({ team }: TeamDisplayProps) {
  return (
    <Card className="w-3/4">
      <CardContent>
        <p className="pb-6">Team Profile</p>
        <div className="flex">
          <CharacterDisplay character={team[0]} />
          <CharacterDisplay character={team[1]} />
          <CharacterDisplay character={team[2]} />
        </div>
      </CardContent>
    </Card>
  );
}

export default TeamDisplay;
