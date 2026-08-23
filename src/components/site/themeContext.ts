import { createContext, useContext } from "react";
import type { Thema } from "./themePalette";

type ThemaWaarde = {
  thema: Thema;
  wisselThema: () => void;
};

export const ThemaContext = createContext<ThemaWaarde>({
  thema: "donker",
  wisselThema: () => {},
});

export function useThema(): ThemaWaarde {
  return useContext(ThemaContext);
}
