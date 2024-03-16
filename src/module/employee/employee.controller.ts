import { Body, Controller, Delete, Get, Inject, Param, Post,Put } from "@nestjs/common";
import { EmployeeService } from "./employee.service";

@Controller("employee")
export class EmployeeController{
    @Inject()
    private readonly employeeService:EmployeeService
   constructor(){

   }

   @Get()
    async find(){
     const data = await this.employeeService.findAll();
     return data
    }

    @Post()
    async save(@Body() item){
        try{
        
        const data = await this.employeeService.save(item);
        return data;
        }
        catch(error){
            return error
        }
    }
    @Put()
    async update(@Body() item){
        try{
        const data = await this.employeeService.update(item);
        return data;
        }
        catch(error){
            return error
        }
    }
    @Delete(':id')
    async delete(@Param("id") id: number){
        const data = await this.employeeService.delete(id)
       if(data){
        return{ message:"DeLete sucessfull"
       }
    }
}
@Get(':id')
async findOne(@Param("id") id: number){
    const data = await this.employeeService.findone(id)
   if(data){
    return data
   }
}


}