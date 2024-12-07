import React from 'react';
import { Bead } from '../types/bead';

interface BeadSelectorProps {
  beads: Bead[];
  onSelectBead: (bead: Bead) => void;
}

export function BeadSelector({ beads, onSelectBead }: BeadSelectorProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 p-4">
      {beads.map((bead) => (
        <button
          key={bead.id}
          onClick={() => onSelectBead(bead)}
          className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow"
        >
          <img
            src={bead.image}
            alt={bead.name}
            className="w-full h-24 object-cover rounded-md mb-2"
          />
          <h3 className="text-sm font-semibold text-gray-800">{bead.name}</h3>
          <p className="text-sm text-gray-600">${bead.price}</p>
        </button>
      ))}
    </div>
  );
}