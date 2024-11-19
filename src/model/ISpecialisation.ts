export interface ISpecialisation {
    id: number
    referenceId: string
    createdBy: number
    updatedBy: number
    createdAt: string
    updatedAt: string
    name: string
  }

  export type Specialisation = ISpecialisation;
  export type Specialisations = ISpecialisation[];
  