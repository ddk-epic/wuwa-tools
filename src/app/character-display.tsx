import Image from "next/image";
import { CharacterProfile } from "@/constants/types";

interface CharacterProps {
  character: CharacterProfile | null;
}

function Character({ character }: CharacterProps) {
  return (
    <div className="w-1/3 grid grid-cols-1 p-2 text-sm">
      {character !== null ? (
        <div>
          <div>
            <Image
              src={character?.image}
              alt={`${character?.name} image`}
              width={500}
              height={500}
            />
          </div>
          <br />
          <div className="flex">
            <div className="w-full">Character</div>
            <div className={`w-full text-right`}>{character?.name}</div>
          </div>
          <div className="flex">
            <div className="w-full">Weapon</div>
            <div className={`w-full text-right`}>{character?.weapon}</div>
          </div>
          <div className="flex">
            <div className="w-full">Echo</div>
            <div className={`w-full text-right`}>{character?.echo}</div>
          </div>
          {character?.echo.length >= 16 ? "" : <br />}
          <div className="flex">
            <div className="w-full">HP</div>
            <div className={`w-full text-right`}>{character?.bonus.hp}</div>
          </div>
          <div className="flex">
            <div className="w-full">ATK</div>
            <div className={`w-full text-right`}>{character?.bonus.atk}</div>
          </div>
          <div className="flex">
            <div className="w-full">DEF</div>
            <div className={`w-full text-right`}>{character?.bonus.def}</div>
          </div>
          <div className="flex">
            <div className="w-full">Energy Regen</div>
            <div className={`w-full text-right`}>100.0%</div>
          </div>
          <div className="flex">
            <div className="w-full">Crit. Rate</div>
            <div className={`w-full text-right`}>5.0%</div>
          </div>
          <div className="flex">
            <div className="w-full">Crit. DMG</div>
            <div className={`w-full text-right`}>150.0%</div>
          </div>
          <br />
          {/* Bonuses */}
          <div className="flex">
            <div className="w-full">Basic DMG</div>
            <div className={`w-full text-right`}>0.0%</div>
          </div>
          <div className="flex">
            <div className="w-full">Skill DMG</div>
            <div className={`w-full text-right`}>0.0%</div>
          </div>
          <div className="flex">
            <div className="w-full">Heavy DMG</div>
            <div className={`w-full text-right`}>0.0%</div>
          </div>
          <div className="flex">
            <div className="w-full">Liberation DMG</div>
            <div className={`w-full text-right`}>0.0%</div>
          </div>
          <div className="flex">
            <div className="w-full">Same Type DMG</div>
            <div className={`w-full text-right`}>0.0%</div>
          </div>
        </div>
      ) : (
        <div className="border"></div>
      )}
    </div>
  );
}

export default Character;
