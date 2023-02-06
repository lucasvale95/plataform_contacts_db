import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    ManyToOne,
} from "typeorm";
import { User } from "./user.entity";

  
@Entity("contact")
  class Contact {
    @PrimaryGeneratedColumn("uuid")
    id: string;
  
    @Column({ length: 60, unique: true })
    name: string;

    @Column({ length: 60, unique: true })
    email: string

    @Column({type: "integer"})
    age: number;
  
    @Column({ length: 11, unique: true })
    phone: string;
  
    @CreateDateColumn()
    createdAt: Date;
  
    @ManyToOne(() => User, (user) => user.contacts)
    user: User;  
  }
  
  export { Contact };