import { Document } from 'mongoose';

export interface IEmployee extends Document {
  readonly name: string;

  readonly employeeId: number;

  readonly team: string;

  readonly gender: string;

  readonly assignedProjects: number;
}
