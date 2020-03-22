import Control from "./Control";
import Preview from "./Preview";

if (typeof window !== "undefined") {
  window.InventoryControl = Control;
  window.InventoryPreview = Preview;
}

export { Control as InventoryControl, Preview as InventoryPreview };
