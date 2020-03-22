import Control from "./Control";
import Preview from "./Preview";

if (typeof window !== "undefined") {
  window.BNLInventoryControl = Control;
  window.BNLInventoryPreview = Preview;
}

export { Control as BNLInventoryControl, Preview as BNLInventoryPreview };
