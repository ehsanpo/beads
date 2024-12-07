export interface BandOption {
  id: string;
  name: string;
  type: 'elastic' | 'cord';
  color: string;
  price: number;
}

export interface SelectedBand {
  option: BandOption;
  quantity: number;
}