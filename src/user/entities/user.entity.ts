import { Assigne } from "src/assignes/entities/assigne.entity";
import { Task } from "src/task/entities/task.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id:number
    
    @Column()
    name:string

    @Column({unique:true})
    email:string

    @Column()
    password:string

    @OneToMany(()=>Task,(t)=>t.user)
    tasks:Task

     @OneToMany(()=>Assigne,(a)=>a.user)
     taskAssigned:Assigne

}
