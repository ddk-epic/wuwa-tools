import CharacterDisplay from "./team-display";
import CharacterSelect from "./team-select";

function TeamProfile() {
  return (
    <div className="flex gap-6">
      <CharacterSelect />
      <CharacterDisplay />
    </div>
  );
}

export default TeamProfile;
