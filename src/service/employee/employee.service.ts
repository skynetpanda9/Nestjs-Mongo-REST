import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateEmployeeDto } from 'src/dto/create-employee.dto';
import { IEmployee } from 'src/interface/employee.interface';
import { Model } from 'mongoose';
import { UpdateEmployeeDto } from 'src/dto/update-employee.dto';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectModel('Employee') private EmployeeModel: Model<IEmployee>,
  ) {}

  async createEmployee(
    createEmployeeDto: CreateEmployeeDto,
  ): Promise<IEmployee> {
    const newEmployee = new this.EmployeeModel(createEmployeeDto);
    return newEmployee.save();
  }

  async updateEmployee(
    EmployeeId: string,
    updateEmployeeDto: UpdateEmployeeDto,
  ): Promise<IEmployee> {
    const existingEmployee = await this.EmployeeModel.findByIdAndUpdate(
      EmployeeId,
      updateEmployeeDto,
      { new: true },
    );
    if (!existingEmployee) {
      throw new NotFoundException(`Employee #${EmployeeId} not found`);
    }
    return existingEmployee;
  }

  async getAllEmployees(): Promise<IEmployee[]> {
    const EmployeeData = await this.EmployeeModel.find();
    if (!EmployeeData || EmployeeData.length == 0) {
      throw new NotFoundException('Employees data not found!');
    }
    return EmployeeData;
  }

  async getEmployee(EmployeeId: string): Promise<IEmployee> {
    const existingEmployee = await this.EmployeeModel.findById(
      EmployeeId,
    ).exec();
    if (!existingEmployee) {
      throw new NotFoundException(`Employee #${EmployeeId} not found`);
    }
    return existingEmployee;
  }

  async deleteEmployee(EmployeeId: string): Promise<IEmployee> {
    const deletedEmployee = await this.EmployeeModel.findByIdAndDelete(
      EmployeeId,
    );
    if (!deletedEmployee) {
      throw new NotFoundException(`Employee #${EmployeeId} not found`);
    }
    return deletedEmployee;
  }
}
