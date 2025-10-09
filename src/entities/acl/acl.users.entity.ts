import { Exclude } from 'class-transformer';
import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'users', schema: 'erp_user' })
export class AclUsers {
  @PrimaryColumn({ name: 'id', type: 'varchar', length: 36 })
  idUsers: string;

  @Column({ name: 'name', type: 'varchar', length: 255, nullable: false })
  nama: string;

  @Column({ name: 'username', type: 'text', nullable: true })
  username: string | null;

  @Column({ name: 'email', type: 'varchar', length: 255, nullable: false })
  email: string;

  @Column({ name: 'password', type: 'varchar', length: 255, nullable: false })
  @Exclude()
  password: string;

  @Column({ name: 'remember_token', type: 'varchar', length: 100, nullable: true })
  rememberToken: string | null;

  @Column({ name: 'created_at', type: 'timestamp', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date | null;

  @Column({ name: 'updated_at', type: 'timestamp', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date | null;

  @Column({ name: 'id_izin_posisi', type: 'int', nullable: true })
  idIzinPosisi: number | null;

  @Column({ name: 'id_group', type: 'varchar', length: 36, nullable: true })
  idUserGroup: string | null;

  @Column({ name: 'tipe', type: 'enum', enum: ['internal', 'external'], nullable: true })
  tipe: 'internal' | 'external' | null;

  @Column({ name: 'foto', type: 'varchar', length: 150, nullable: false, default: 'no_photos.jpg' })
  foto: string;

  @Column({ name: 'akses', type: 'enum', enum: ['open', 'lock', 'disable'], nullable: true, default: 'open' })
  status: 'open' | 'lock' | 'disable' | null;

  @Column({ name: 'activated', type: 'tinyint', width: 1, nullable: false, default: () => '0' })
  activated: number;

  @Column({ name: 'id_pegawai', type: 'varchar', length: 36, nullable: true })
  idPegawai: string | null;
}
