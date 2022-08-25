import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Employee {
  @Prop()
  name: string;

  @Prop()
  employeeId: number;

  // teams - 0 => Dev; 1 => Design; 2 => Accounting; 3 => PR
  @Prop()
  team: string;

  @Prop()
  gender: string;

  @Prop()
  assignedProjects: number;
}

export const EmployeeSchema = SchemaFactory.createForClass(Employee);
