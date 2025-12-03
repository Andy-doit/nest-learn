import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

//entities tức là annotations định nghĩa bảng trong db
@Entity()
export class User{
  // primary key tự tạo
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ default: true })
  isActive: boolean;
}
