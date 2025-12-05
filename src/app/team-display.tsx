import { Card, CardContent } from "../components/ui/card";
import { charConstantData } from "../constants/character-data";
import Image from "next/image";

function CharacterDisplay() {
  const colKeyWidth = "1";
  const colValueWidth = "1";
  const character1 = charConstantData.camellya;

  return (
    <Card className="w-3/4">
      <CardContent>
        <p className="pb-6">Team Profile</p>
        <div className="w-1/3 grid grid-cols-1 border">
          <div>
            {
              <Image
                src={character1?.image}
                alt={`${character1?.name} image`}
                width={500}
                height={500}
                className="border"
              />
            }
          </div>
          <div className="flex">
            <div className="">Character</div>
            <div className={`w-full text-right`}>{character1?.name}</div>
          </div>
          <div className="flex">
            <div className="">Weapon</div>
            <div className={`w-full text-right`}>{character1?.weapon}</div>
          </div>
          <div className="flex">
            <div className="">Echo</div>
            <div className={`w-full text-right`}>{character1?.echo}</div>
          </div>
          <div className="flex">
            <div className="">HP</div>
            <div className={`w-full text-right`}>{character1?.baseHp}</div>
          </div>
          <div className="flex">
            <div className="">ATK</div>
            <div className={`w-full text-right`}>{character1?.baseAtk}</div>
          </div>
          <div className="flex">
            <div className="">DEF</div>
            <div className={`w-full text-right`}>{character1?.baseDef}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default CharacterDisplay;
