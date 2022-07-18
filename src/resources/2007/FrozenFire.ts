import { getFoldGroup, have as _have } from "../../lib";
import { $item } from "../../template-string";

/**
 * @returns true if the player has any form of the Great Ball of Frozen Fire
 */
export function have(): boolean {
  return getFoldGroup($item`Great Ball of Frozen Fire`).some((item) =>
    _have(item)
  );
}
