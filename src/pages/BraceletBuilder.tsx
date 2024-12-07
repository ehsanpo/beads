import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BeadSelector } from "../components/BeadSelector";
import { BandSelector } from "../components/BandSelector";
import { BraceletPreview } from "../components/BraceletPreview";
import { PriceCalculator } from "../components/PriceCalculator";
import { beads } from "../data/beads";
import { bandOptions } from "../data/bands";
import { Bead, BraceletBead } from "../types/bead";
import { BandOption } from "../types/band";

export function BraceletBuilder() {
  const navigate = useNavigate();
  const [selectedBeads, setSelectedBeads] = useState<BraceletBead[]>([]);
  const [selectedBand, setSelectedBand] = useState<BandOption | null>(null);

  const handleSelectBead = (bead: Bead) => {
    if (selectedBeads.length >= 10) return;

    setSelectedBeads([
      ...selectedBeads,
      { ...bead, position: selectedBeads.length },
    ]);
  };

  const handleRemoveBead = (position: number) => {
    setSelectedBeads(
      selectedBeads
        .filter((bead) => bead.position !== position)
        .map((bead, index) => ({ ...bead, position: index }))
    );
  };

  const handleSelectBand = (band: BandOption) => {
    setSelectedBand(band);
  };

  const handleCheckout = () => {
    if (!selectedBand) {
      alert("Please select a band type before proceeding to checkout");
      return;
    }
    navigate("/checkout");
  };

  return (
    <div className="space-y-8 ">
      <section className="sticky top-0 bg-white dark:bg-gray-800 z-40 p-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
          Your Bracelet Preview
        </h2>
        <BraceletPreview
          beads={selectedBeads}
          selectedBand={selectedBand}
          onRemoveBead={handleRemoveBead}
        />
      </section>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-3 space-y-8">
          <section className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              Choose Your Band
            </h2>
            <BandSelector
              options={bandOptions}
              selectedBandId={selectedBand?.id ?? null}
              onSelectBand={handleSelectBand}
            />
          </section>

          <section className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              Choose Your Beads
            </h2>
            <BeadSelector beads={beads} onSelectBead={handleSelectBead} />
          </section>
        </div>

        <div>
          <section className="sticky top-8">
            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              Order Summary
            </h2>
            <PriceCalculator
              beads={selectedBeads}
              selectedBand={selectedBand}
            />
            <button
              onClick={handleCheckout}
              className="w-full mt-4 bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={selectedBeads.length === 0 || !selectedBand}
            >
              Proceed to Checkout
            </button>
          </section>
        </div>
      </div>
    </div>
  );
}
