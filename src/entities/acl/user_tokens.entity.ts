import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'user_tokens', schema: 'erp_acl' })
export class UserTokens {
  @PrimaryColumn({ name: 'id' })
  id: string;

  @Column({ name: 'id_user' })
  idUser: string;

  @Column({ name: 'refresh_token' })
  refreshToken: string;

  @Column({ name: 'user_agent' })
  userAgent: string;

  @Column({ name: 'ip_address' })
  ipAddress: string;

  @Column({ name: 'created_at' })
  createdAt: any;
}
