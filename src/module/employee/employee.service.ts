import { Repository } from "typeorm";
import { Employee } from "./employee.entity";
import { InjectRepository } from "@nestjs/typeorm";

export class EmployeeService{
    @InjectRepository(Employee)
    private readonly  employeeRepository: Repository<Employee>;

   async findAll(){
    const data = await this.employeeRepository.find({
        relations:[]
    });
    return data
   }

   async save(item){
    const data  = await this.employeeRepository.save(item)
    return data
   }
   async update(item){
    // let id =parseInt(item.id)
    // delete item?.id
    const data  = await this.employeeRepository.update(item.id,item)
    return data
   }
   async delete(id){
    const data =await this.employeeRepository.delete(id)
    return data;
   }

   async findone(id){
    const data =await this.employeeRepository.findBy({id:id})
    return data;
   }
}