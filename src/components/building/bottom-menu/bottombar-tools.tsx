import ExplodeIcon from "@mui/icons-material/ImportExport";
import LayersIcon from "@mui/icons-material/Layers";
import CutIcon from "@mui/icons-material/ContentCut";
import RulerIcon from "@mui/icons-material/Straighten";
import { Action } from "../../../middleware/actions";
import { State } from "../../../middleware/state";
import { Tool } from "../../../types";

export function getBottombarTools(
  state: State,
  dispatch: React.Dispatch<Action>
): Tool[] {
  return [
    {
      name: "Clipping planes",
      icon: <CutIcon />,
      action: () => {
        console.log("hei");
      },
    },
    {
      name: "Dimensions",
      icon: <RulerIcon />,
      action: () => {
        console.log("hei");
      },
    },
    {
      name: "Explosion",
      icon: <ExplodeIcon />,
      action: () => {
        console.log("hei");
      },
    },
    {
      name: "Floor plan navigation",
      icon: <LayersIcon />,
      action: () => {
        console.log("hei");
      },
    },
  ];
}
