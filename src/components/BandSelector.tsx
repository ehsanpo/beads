import React from 'react';
import { BandOption } from '../types/band';

interface BandSelectorProps {
  options: BandOption[];
  selectedBandId: string | null;
  onSelectBand: (band: BandOption) => void;
}

export function BandSelector({ options, selectedBandId, onSelectBand }: BandSelectorProps) {
  const elasticBands = options.filter(band => band.type === 'elastic');
  const cordBands = options.filter(band => band.type === 'cord');

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Elastic Bands</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {elasticBands.map((band) => (
            <button
              key={band.id}
              onClick={() => onSelectBand(band)}
              className={`relative p-4 rounded-lg border-2 transition-all ${
                selectedBandId === band.id
                  ? 'border-purple-600 bg-purple-50'
                  : 'border-gray-200 hover:border-purple-200'
              }`}
            >
              <div
                className="w-full h-8 rounded-md mb-2"
                style={{ backgroundColor: band.color, border: band.color === '#FFFFFF' ? '1px solid #E5E7EB' : 'none' }}
              />
              <div className="text-sm font-medium text-gray-900">{band.name}</div>
              <div className="text-sm text-gray-500">${band.price}</div>
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Cord Strings</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {cordBands.map((band) => (
            <button
              key={band.id}
              onClick={() => onSelectBand(band)}
              className={`relative p-4 rounded-lg border-2 transition-all ${
                selectedBandId === band.id
                  ? 'border-purple-600 bg-purple-50'
                  : 'border-gray-200 hover:border-purple-200'
              }`}
            >
              <div
                className="w-full h-8 rounded-md mb-2"
                style={{ backgroundColor: band.color }}
              />
              <div className="text-sm font-medium text-gray-900">{band.name}</div>
              <div className="text-sm text-gray-500">${band.price}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}