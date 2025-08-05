import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'mcurrency', schema: 'erp_amims' })
export class AmimsMcurrency {
  @Column({ name: 'code', nullable: true })
  code: string;

  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ name: 'currency', nullable: true })
  currency: string;

  @PrimaryColumn({ name: 'id_mcurrency' })
  idMcurrency: string;

  @Column({ name: 'is_deleted', nullable: true })
  isDeleted: number;

  @Column({ name: 'status_currency', nullable: true })
  statusCurrency: string;

  @Column({ name: 'updated_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: string;

  @Column({ name: 'usd_rate', nullable: true })
  usdRate: number;
}
