import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'user_tokens', schema: 'erp_acl' })
export class AclUserTokens {
  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @PrimaryColumn({ name: 'id' })
  id: string;

  @Column({ name: 'id_user', nullable: true })
  idUser: string;

  @Column({ name: 'ip_address', nullable: true })
  ipAddress: string;

  @Column({ name: 'refresh_token', nullable: true })
  refreshToken: string;

  @Column({ name: 'user_agent', nullable: true })
  userAgent: string;
}
