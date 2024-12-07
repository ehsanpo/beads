import React from "react";
import { BraceletBead } from "../types/bead";
import { BandOption } from "../types/band";

interface BraceletPreviewProps {
  beads: BraceletBead[];
  selectedBand?: BandOption | null;
  onRemoveBead: (position: number) => void;
}

export function BraceletPreview({
  beads,
  selectedBand,
  onRemoveBead,
}: BraceletPreviewProps) {
  const bandColor = selectedBand?.color ?? "#FDE68A";
  const gradientStyle = {
    background: `linear-gradient(to right, ${bandColor}22, ${bandColor}44)`,
  };

  return (
    <div className="w-full max-w-3xl mx-auto  ">
      <div
        className="relative h-32 rounded-full flex items-center justify-center p-4"
        style={gradientStyle}
      >
        <div
          className="absolute w-full h-2 top-1/2 -translate-y-1/2"
          style={{ backgroundColor: bandColor }}
        ></div>
        <div className="flex items-center gap-2 relative">
          {beads.map((bead) => (
            <button
              key={`${bead.id}-${bead.position}`}
              onClick={() => onRemoveBead(bead.position)}
              className="w-12 h-12 rounded-full overflow-hidden border-2 border-amber-400 hover:border-red-400 transition-colors"
              title="Click to remove"
            >
              <img
                src={bead.image}
                alt={bead.name}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
          {Array.from({ length: 10 - beads.length }).map((_, index) => (
            <div
              key={`empty-${index}`}
              className="w-12 h-12 rounded-full border-2 border-dashed"
              style={{ borderColor: bandColor }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
