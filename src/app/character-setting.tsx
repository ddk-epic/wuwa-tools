import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { charConstantData } from "@/constants/character-data";

import { weaponData } from "@/constants/weapon-data";

interface CharacterSettingProps {
  character: string;
}

function CharacterSetting({ character }: CharacterSettingProps) {
  const weaponType = charConstantData[character.toLowerCase()].weaponType;
  const availableWeapons = Object.values(weaponData).filter(
    (weapon) => weapon.type === weaponType
  );

  return (
    <div className="space-y-4 my-4">
      <div>{character}</div>
      <Select>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Weapon" />
        </SelectTrigger>
        <SelectContent>
          {availableWeapons.map((weapon) => (
            <SelectItem key={weapon.name} value={weapon.name}>
              {weapon.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Separator />
    </div>
  );
}

export default CharacterSetting;
