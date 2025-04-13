import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'users', schema: 'erp_acl' })
export class Users {
  @PrimaryColumn({ name: 'id_users' })
  idUsers: string;

  @Column({ name: 'email' })
  email: string;

  @Column({ name: 'password' })
  password: string;

  @Column({ name: 'nama' })
  nama: string;

  @Column({ name: 'status' })
  status: string;

  @Column({ name: 'wajib_reset_password' })
  wajibResetPassword: boolean;

  @Column({ name: 'last_login' })
  lastLogin: any;

  @Column({ name: 'created_at' })
  createdAt: any;

  @Column({ name: 'id_user_group' })
  idUserGroup: string;
}
