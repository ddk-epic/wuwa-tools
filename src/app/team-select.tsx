import { Button } from "@/components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";

import { charConstantData } from "../constants/character-data";

interface TeamSelectProps {
  team: string[];
  calculate: (selectId: number, characterName: string) => void;
}

function TeamSelect({ team, calculate }: TeamSelectProps) {
  return (
    <Card className="w-1/4">
      <CardContent className="space-y-2">
        <p className="pb-6">Team Data</p>
        <div className="pb-6">
          {team.map((character, index) => (
            <div key={index}>
              {index + 1}: {character}
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
                onValueChange={(value) => calculate(0, value)}
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
                onValueChange={(value) => calculate(1, value)}
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
                onValueChange={(value) => calculate(2, value)}
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
