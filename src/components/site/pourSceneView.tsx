import { useEffect, useRef } from "react";
import { PourSceneSvg } from "./pourSceneSvg";
import { startPourScene } from "./pourScene";
import { geenAnimatie } from "./siteMotion";

type Props = {
  width: number;
  height: number;
  goud: string;
  metTwinkles?: boolean;
};

/** Rendert de shaker-SVG en start of bevriest de choreografie uit pourScene.ts. */
export function PourScene({ width, height, goud, metTwinkles = false }: Props) {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const scene = startPourScene(svgRef.current, { autoplay: !geenAnimatie() });
    return () => scene.stop();
  }, []);

  return (
    <PourSceneSvg
      svgRef={svgRef}
      width={width}
      height={height}
      goud={goud}
      metTwinkles={metTwinkles}
    />
  );
}
