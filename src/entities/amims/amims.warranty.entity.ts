import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'warranty', schema: 'erp_amims' })
export class AmimsWarranty {
  @PrimaryColumn({ name: 'id_warranty' })
  idWarranty: string;

  @Column({ name: 'id_part', nullable: true })
  idPart: string;

  @Column({ name: 'effective_date', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  effectiveDate: string;

  @Column({ name: 'cycle', nullable: true })
  cycle: number;

  @Column({ name: 'days', nullable: true })
  days: number;

  @Column({ name: 'hours', nullable: true })
  hours: number;

  @Column({ name: 'id_vendor', nullable: true })
  idVendor: string;

  @Column({ name: 'expaired_date', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  expairedDate: string;

  @Column({ name: 'type', nullable: true })
  type: string;

  @Column({ name: 'note', nullable: true })
  note: string;

  @Column({ name: 'created_at', nullable: true })
  createdAt: string;

  @Column({ name: 'updated_at', nullable: true })
  updatedAt: string;
}
