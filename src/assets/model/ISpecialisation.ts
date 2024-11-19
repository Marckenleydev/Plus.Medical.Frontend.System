import { ReactNode } from 'react';

export interface ISpecialisation {
  id: number;
  referenceId: string;
  createdBy: number;
  updatedBy: number;
  createdAt: string;
  updatedAt: string;
  name: string;
}

export type Specialisation = {
  name: ReactNode; // ReactNode for JSX elements
  specialisation: ISpecialisation;
};

export type Specialisations = {
  specialisations: ISpecialisation[];
};
