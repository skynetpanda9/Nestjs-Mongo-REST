import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { CreateEmployeeDto } from 'src/dto/create-employee.dto';
import { UpdateEmployeeDto } from 'src/dto/update-employee.dto';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { EmployeeService } from 'src/service/employee/employee.service';

@Controller('Employee')
export class EmployeeController {
  constructor(private readonly EmployeeService: EmployeeService) {}

  @Post()
  async createEmployee(
    @Res() response,
    @Body() createEmployeeDto: CreateEmployeeDto,
  ) {
    try {
      const newEmployee = await this.EmployeeService.createEmployee(
        createEmployeeDto,
      );
      return response.status(HttpStatus.CREATED).json({
        message: 'Employee has been created successfully',
        newEmployee,
      });
    } catch (err) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: 'Error: Employee not created!',
        error: 'Bad Request',
      });
    }
  }

  @Put('/:id')
  async updateEmployee(
    @Res() response,
    @Param('id') EmployeeId: string,
    @Body() updateEmployeeDto: UpdateEmployeeDto,
  ) {
    try {
      const existingEmployee = await this.EmployeeService.updateEmployee(
        EmployeeId,
        updateEmployeeDto,
      );
      return response.status(HttpStatus.OK).json({
        message: 'Employee has been successfully updated',
        existingEmployee,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }

  @Get()
  async getEmployees(@Res() response) {
    try {
      const EmployeeData = await this.EmployeeService.getAllEmployees();
      return response.status(HttpStatus.OK).json({
        message: 'All Employees data found successfully',
        EmployeeData,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }

  @Get('/:id')
  async getEmployee(@Res() response, @Param('id') EmployeeId: string) {
    try {
      const existingEmployee = await this.EmployeeService.getEmployee(
        EmployeeId,
      );
      return response.status(HttpStatus.OK).json({
        message: 'Employee found successfully',
        existingEmployee,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }

  @Delete('/:id')
  async deleteEmployee(@Res() response, @Param('id') EmployeeId: string) {
    try {
      const deletedEmployee = await this.EmployeeService.deleteEmployee(
        EmployeeId,
      );
      return response.status(HttpStatus.OK).json({
        message: 'Employee deleted successfully',
        deletedEmployee,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }
}
