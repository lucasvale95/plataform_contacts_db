import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    OneToMany,
  } from "typeorm";
  
import { Exclude } from "class-transformer";
import { Contact } from "./contacts.entity";
  
  @Entity("users")
  class User {
    @PrimaryGeneratedColumn("uuid")
    id: string;
  
    @Column({ length: 60 })
    name: string;
  
    @Column({ length: 60, unique: true })
    email: string;

    @Column({ length: 11})
    phone: string;
  
    @CreateDateColumn()
    createdAt: Date;
  
    @Column({ length: 120 })
    @Exclude()
    password: string;

    @OneToMany(
      () => Contact,
      (contact) => contact.user
    )
    contacts: Contact[];
  }
  
  export { User };