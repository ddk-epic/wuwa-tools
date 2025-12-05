import { Card, CardContent } from "../components/ui/card";

import { charConstantData } from "../constants/character-data";
import CharacterDisplay from "./character-display";

function TeamDisplay() {
  // types missing
  const character1 = charConstantData.camellya;
  const character2 = charConstantData.sanhua;
  const character3 = charConstantData.shorekeeper;

  return (
    <Card className="w-3/4">
      <CardContent>
        <p className="pb-6">Team Profile</p>
        <div className="flex">
          <CharacterDisplay character={character1} />
          <CharacterDisplay character={character2} />
          <CharacterDisplay character={character3} />
        </div>
      </CardContent>
    </Card>
  );
}

export default TeamDisplay;
