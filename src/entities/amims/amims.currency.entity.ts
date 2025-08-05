import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'currency', schema: 'erp_amims' })
export class AmimsCurrency {
  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ name: 'effective_date', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  effectiveDate: string;

  @Column({ name: 'forcurrency', nullable: true })
  forcurrency: string;

  @PrimaryColumn({ name: 'id_currency' })
  idCurrency: string;

  @Column({ name: 'id_mcurrency', nullable: true })
  idMcurrency: string;

  @Column({ name: 'id_user', nullable: true })
  idUser: string;

  @Column({ name: 'new_value', nullable: true })
  newValue: number;

  @Column({ name: 'note_currency', nullable: true })
  noteCurrency: string;

  @Column({ name: 'old_value', nullable: true })
  oldValue: number;

  @Column({ name: 'updated_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: string;
}
