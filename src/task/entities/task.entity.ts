import { Assigne } from "src/assignes/entities/assigne.entity";
import { User } from "src/user/entities/user.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('tasks')
export class Task {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column()
    description: string

    @CreateDateColumn()
    startTime: Date

    @Column()
    endTime: Date

    @ManyToOne(() => User, (u) => u.tasks)
    user: User

    @OneToMany(() => Assigne, (a) => a.task)
    assigne: Assigne
}
