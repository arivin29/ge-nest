import { Exclude } from 'class-transformer';
import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'users', schema: 'new_bpt' })
export class NewBptUsers {
  @Column({ name: 'activated' })
  activated: boolean;

  @Column({ name: 'akses', nullable: true })
  akses: string;

  @Column({ name: 'created_at', nullable: true })
  createdAt: string;

  @Column({ name: 'email' })
  email: string;

  @Column({ name: 'foto' })
  foto: string;

  @PrimaryColumn({ name: 'id' })
  id: number;

  @Column({ name: 'id_izin_posisi', nullable: true })
  idIzinPosisi: number;

  @Column({ name: 'name' })
  name: string;

  @Column({ name: 'password' })
  @Exclude()
    password: string;

  @Column({ name: 'remember_token', nullable: true })
  rememberToken: string;

  @Column({ name: 'tipe', nullable: true })
  tipe: string;

  @Column({ name: 'updated_at', nullable: true })
  updatedAt: string;

  @Column({ name: 'username', nullable: true })
  username: string;
}
