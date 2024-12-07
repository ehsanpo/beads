export interface Bead {
  id: string;
  name: string;
  image: string;
  price: number;
}

export interface BraceletBead extends Bead {
  position: number;
}