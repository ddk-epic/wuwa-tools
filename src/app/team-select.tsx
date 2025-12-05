import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

function TeamSelect() {
  return (
    <Card className="w-1/4">
      <CardContent className="space-y-2">
        <p className="pb-6">Team Data</p>
        {/* Weapon */}
        <Popover>
          <PopoverTrigger asChild>
            <Button className="w-full" variant="outline">
              Weapon
            </Button>
          </PopoverTrigger>
          <PopoverContent side="right" align="start"></PopoverContent>
        </Popover>
        {/* Echo Set */}
        <Popover>
          <PopoverTrigger asChild>
            <Button className="w-full" variant="outline">
              Echo Set
            </Button>
          </PopoverTrigger>
          <PopoverContent side="right" align="start"></PopoverContent>
        </Popover>
        {/* Configuration */}
        <Popover>
          <PopoverTrigger asChild>
            <Button className="w-full" variant="outline">
              Configuration
            </Button>
          </PopoverTrigger>
          <PopoverContent side="right" align="start"></PopoverContent>
        </Popover>
      </CardContent>
    </Card>
  );
}

export default TeamSelect;
