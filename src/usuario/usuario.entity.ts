import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  name: string;

  @Column({ length: 255 })
  description: string;

  @Column({ length: 100 })
  email: string;

  @Column({ length: 100 })
  password: string;

  @Column({ length: 100 })
  address: string;

  @Column({ length: 100 })
  reclicleProduct: string;

  @Column({ length: 255 })
  descriptionReclicleProduct: string;
}
