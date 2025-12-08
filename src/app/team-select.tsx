import { Card, CardContent } from "../components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Dispatch, SetStateAction } from "react";

import { CharacterProfile } from "@/constants/types";
import { charConstantData, charStatData } from "../constants/character-data";

interface TeamSelectProps {
  team: string[];
  setTeam: Dispatch<SetStateAction<string[]>>;
  setTeamProfile: Dispatch<SetStateAction<(CharacterProfile | null)[]>>;
}

function TeamSelect({ team, setTeam, setTeamProfile }: TeamSelectProps) {
  const handleChange = (selectId: number, value: string) => {
    setTeam((prevState) => {
      const newTeam = [...prevState];
      newTeam[selectId] = value;
      return newTeam;
    });
    setTeamProfile((prevState) => {
      const newTeamProfile = [...prevState];
      newTeamProfile[selectId] = charStatData;
      return newTeamProfile;
    });
  };

  return (
    <Card className="w-1/4">
      <CardContent className="space-y-2">
        <p className="pb-6">Team Data</p>
        <div className="pb-6">
          {team.map((value, index) => (
            <div key={index}>
              {index + 1}: {value}
            </div>
          ))}
        </div>
        {/* Character */}
        <Popover>
          <PopoverTrigger asChild>
            <Button className="w-full" variant="outline">
              Team
            </Button>
          </PopoverTrigger>
          <PopoverContent className="min-w-150" side="right" align="start">
            <div className="flex space-x-4">
              {/* Character 1 */}
              <Select
                value={team[0]}
                onValueChange={(value) => handleChange(0, value)}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Character" />
                </SelectTrigger>
                <SelectContent>
                  {Object.entries(charConstantData).map(([_, character]) => (
                    <SelectItem key={character.id} value={character.name}>
                      {character.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {/* Character 2 */}
              <Select
                value={team[1]}
                onValueChange={(value) => handleChange(1, value)}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Character" />
                </SelectTrigger>
                <SelectContent>
                  {Object.entries(charConstantData).map(([_, character]) => (
                    <SelectItem key={character.id} value={character.name}>
                      {character.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {/* Character 3 */}
              <Select
                value={team[2]}
                onValueChange={(value) => handleChange(2, value)}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Character" />
                </SelectTrigger>
                <SelectContent>
                  {Object.entries(charConstantData).map(([_, character]) => (
                    <SelectItem key={character.id} value={character.name}>
                      {character.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </PopoverContent>
        </Popover>
        {/*         
        <Popover>
          <PopoverTrigger asChild>
            <Button className="w-full" variant="outline">
              Weapon
            </Button>
          </PopoverTrigger>
          <PopoverContent side="right" align="start"></PopoverContent>
        </Popover>
        */}
        {/* Position */}
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Position" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="DPS">DPS</SelectItem>
          </SelectContent>
        </Select>
      </CardContent>
    </Card>
  );
}

export default TeamSelect;
