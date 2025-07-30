import { Task } from "src/task/entities/task.entity";
import { User } from "src/user/entities/user.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Status } from "../enum/task.enum";

@Entity('assignes')
export class Assigne {
    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => User, (u) => u.taskAssigned)
    user: User

    @ManyToOne(() => Task, (t) => t.assigne)
    task: Task

    @Column({ type: 'enum', enum: Status, default: Status.PENDING })
    status: Status

    @CreateDateColumn()
    assignedAt: Date

    @Column()
    deadLine: Date
}
