import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'shipping', schema: 'erp_amims' })
export class AmimsShipping {
  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @PrimaryColumn({ name: 'id_shipping' })
  idShipping: string;

  @Column({ name: 'line0', nullable: true })
  line0: string;

  @Column({ name: 'line1', nullable: true })
  line1: string;

  @Column({ name: 'line2', nullable: true })
  line2: string;

  @Column({ name: 'line3', nullable: true })
  line3: string;

  @Column({ name: 'line4', nullable: true })
  line4: string;

  @Column({ name: 'line5', nullable: true })
  line5: string;

  @Column({ name: 'line6', nullable: true })
  line6: string;

  @Column({ name: 'line7', nullable: true })
  line7: string;

  @Column({ name: 'line8', nullable: true })
  line8: string;

  @Column({ name: 'status_shipping', nullable: true })
  statusShipping: string;

  @Column({ name: 'updated_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: string;
}
