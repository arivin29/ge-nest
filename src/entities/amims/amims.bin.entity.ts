import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'bin', schema: 'erp_amims' })
export class AmimsBin {
  @Column({ name: 'bin', nullable: true })
  bin: string;

  @Column({ name: 'code', nullable: true })
  code: string;

  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ name: 'description', nullable: true })
  description: string;

  @PrimaryColumn({ name: 'id_bin' })
  idBin: string;

  @Column({ name: 'id_site', nullable: true })
  idSite: string;

  @Column({ name: 'updated_at', nullable: true })
  updatedAt: string;
}
