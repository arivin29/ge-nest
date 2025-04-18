import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'users', schema: 'erp_acl' })
export class AclUsers {
  @PrimaryColumn({ name: 'id_users' })
  idUsers: string;

  @Column({ name: 'email' })
  email: string;

  @Column({ name: 'password' })
  password: string;

  @Column({ name: 'nama', nullable: true })
  nama: string;

  @Column({ name: 'status', nullable: true })
  status: string;

  @Column({ name: 'wajib_reset_password', nullable: true })
  wajibResetPassword: boolean;

  @Column({ name: 'last_login', nullable: true })
  lastLogin: string;

  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ name: 'id_user_group', nullable: true })
  idUserGroup: string;
}
