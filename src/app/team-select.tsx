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
import { Separator } from "@/components/ui/separator";

interface TeamSelectProps {
  team: string[];
  calculate: (selectId: number, characterName: string) => void;
}

function TeamSelect({ team, calculate }: TeamSelectProps) {
  return (
    <Card className="w-1/4">
      <CardContent className="space-y-4">
        <p className="pb-6">Team Data</p>
        {/* Character */}
        <div className="space-y-1">
          {/* Character 1 */}
          <div className="flex gap-2">
            <span className="pt-1.5">1. </span>
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
          </div>
          {/* Character 2 */}
          <div className="flex gap-2">
            <span className="pt-1.5">2. </span>
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
          </div>
          {/* Character 3 */}
          <div className="flex gap-2">
            <span className="pt-1.5">3. </span>
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
        </div>
        <Separator />

        {/* Position */}
        {/* <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Position" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="DPS">DPS</SelectItem>
          </SelectContent>
        </Select> */}
      </CardContent>
    </Card>
  );
}

export default TeamSelect;
