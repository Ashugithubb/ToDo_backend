import { Task } from "src/task/entities/task.entity";
import { User } from "src/user/entities/user.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { TaskStatus } from "../enum/task.enum";


@Entity('assignes')
export class Assigne {
    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => User, (u) => u.taskAssigned)
    user: User

    @ManyToOne(() => Task, (t) => t.assigne)
    task: Task

    @Column({ type: 'enum', enum: TaskStatus, default: TaskStatus.PENDING })
    status: TaskStatus

    @CreateDateColumn()
    assignedAt: Date

    @Column()
    deadLine: Date

}
