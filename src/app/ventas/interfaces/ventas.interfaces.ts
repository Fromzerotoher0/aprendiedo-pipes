export enum color {
  rojo,
  negro,
  azul,
  amarillo,
}

export interface Heroe {
  nombre: string;
  vuela: boolean;
  color: color;
}
