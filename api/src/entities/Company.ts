import {
  BaseEntity,
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';

import is from 'utils/validation';
import { User } from '.';
import { Project } from './index';

@Entity()
class Company extends BaseEntity {
  static validations = {
    name: [is.required(), is.maxLength(100)],
  };

  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar')
  name: string;

  @Column('text', { nullable: true })
  description: string | null;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;

  @OneToMany(
    () => Project,
    project => project.id,
  )
  issues: Project[];

  @OneToMany(
    () => User,
    user => user.project,
  )
  users: User[];
}

export default Company;
