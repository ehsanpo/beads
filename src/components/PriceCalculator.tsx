import React from "react";
import { BraceletBead } from "../types/bead";
import { BandOption } from "../types/band";

interface PriceCalculatorProps {
  beads: BraceletBead[];
  selectedBand?: BandOption | null;
}

export function PriceCalculator({ beads, selectedBand }: PriceCalculatorProps) {
  const totalBeadsPrice = beads.reduce((sum, bead) => sum + bead.price, 0);
  const bandPrice = selectedBand?.price ?? 0;

  return (
    <div className="bg-white rounded-lg p-4 shadow-md">
      <h2 className="text-lg font-semibold mb-2">Price Breakdown</h2>
      <div className="space-y-2">
        {selectedBand && (
          <div className="flex justify-between">
            <span>{selectedBand.name}</span>
            <span>${bandPrice.toFixed(2)}</span>
          </div>
        )}
        <div className="flex justify-between">
          <span>Beads ({beads.length})</span>
          <span>${totalBeadsPrice.toFixed(2)}</span>
        </div>
        <div className="border-t pt-2 flex justify-between font-semibold">
          <span>Total</span>
          <span>${(bandPrice + totalBeadsPrice).toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}
