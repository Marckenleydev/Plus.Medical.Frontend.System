export interface ISpecialisation {
    id: number
    referenceId: string
    createdBy: number
    updatedBy: number
    createdAt: string
    updatedAt: string
    name: string
  }

  export type Specialisation ={specialisation: ISpecialisation};
  export type Specialisations = {specialisations: ISpecialisation[]};