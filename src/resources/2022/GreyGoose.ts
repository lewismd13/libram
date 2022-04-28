import { have as have_ } from "../../lib";
import { get as getModifier } from "../../modifier";
import { get } from "../../property";
import { $familiar, $item, $skill } from "../../template-string";

export const goose = $familiar`Grey Goose`;

export function have(): boolean {
  return have_(goose);
}

export function currentExperience(): number {
  return goose.experience || have_($familiar`Shorter-Order Cook`)
    ? 81 + (have_($item`blue plate`) ? 19 : 0)
    : 0;
}

export function currentWeight(): number {
  return Math.min(Math.floor(Math.sqrt(currentExperience())), 20);
}

export function expectedDrones(weight = currentWeight()): number {
  return Math.max(0, weight - 5);
}

export function expectedExperience(weight = currentWeight()): number {
  return Math.pow(Math.max(weight - 5, 0), 3);
}

export function expectedMeat(weight = currentWeight()): number {
  return Math.pow(Math.max(weight - 5, 0), 4);
}

export function hasMeatified(): boolean {
  return get("_meatifyMatterUsed");
}

export function fightsUntil(
  target: number,
  bonusExperience = getModifier("Familiar Experience")
) {
  const diff = target - currentWeight();

  if (diff <= 0) return 0;
  return Math.ceil(
    diff /
      (1 + bonusExperience + (have_($skill`Testudinal Teachings`) ? 1 / 6 : 0))
  );
}
