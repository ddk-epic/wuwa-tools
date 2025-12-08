import { Card, CardContent } from "../components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { charConstantData } from "../constants/character-data";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Dispatch, SetStateAction } from "react";

interface TeamSelectProps {
  team: [string, string, string];
  setTeam: Dispatch<SetStateAction<[string, string, string]>>;
}

function TeamSelect({ team, setTeam }: TeamSelectProps) {
  const handleChange = (selectId: number, value: string) => {
    setTeam((prevState) => ({
      ...prevState,
      [selectId]: value,
    }));
  };
  return (
    <Card className="w-1/4">
      <CardContent className="space-y-2">
        <p className="pb-6">Team Data</p>
        <div className="pb-6">
          <div>1: {team[0]}</div>
          <div>2: {team[1]}</div>
          <div>3: {team[2]}</div>
        </div>
        {/* Character */}
        <Popover>
          <PopoverTrigger asChild>
            <Button className="w-full" variant="outline">
              Team
            </Button>
          </PopoverTrigger>
          <PopoverContent className="min-w-150" side="right" align="start">
            <div className="flex space-x-2">
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
