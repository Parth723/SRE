import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'students' })
export class Student {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    class: string;

    @Column()
    division: string

    @Column()
    age: number;
}
