import TeamDisplay from "./team-display";
import TeamSelect from "./team-select";

function TeamProfile() {
  return (
    <div className="flex gap-6">
      <TeamSelect />
      <TeamDisplay />
    </div>
  );
}

export default TeamProfile;
