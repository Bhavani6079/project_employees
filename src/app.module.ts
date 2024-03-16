import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeeModule } from './module/employee/employee.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:'postgres',
      host:'localhost',
      port:5433,
      username:'postgres',
      password:'postgres',
      database:'mahesh',
      logging:true,
      autoLoadEntities:true,
      synchronize:false
    }),
    EmployeeModule,
    
  ],
  controllers: [AppController],
  providers: [AppService],
  
})
export class AppModule {}
