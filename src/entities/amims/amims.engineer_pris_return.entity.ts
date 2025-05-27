import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'engineer_pris_return', schema: 'erp_amims' })
export class AmimsEngineerPrisReturn {
  @PrimaryColumn({ name: 'id_engineer_pris_return' })
  idEngineerPrisReturn: string;

  @Column({ name: 'date_return', nullable: true })
  dateReturn: string;

  @Column({ name: 'id_engineer_pris', nullable: true })
  idEngineerPris: string;

  @Column({ name: 'status_return', nullable: true })
  statusReturn: string;
}
