import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { type } from "os";

@Entity('employee')
export class Employee {
@PrimaryColumn({name:'id'})
id:number;
@Column({name:'name'})
name:string;
@Column({name:'email'})
email:string;
@Column({name:'age'})
age:number;
@Column({name:'dob'})
dob:Date;
}