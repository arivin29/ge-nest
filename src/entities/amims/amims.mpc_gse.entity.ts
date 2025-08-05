import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'mpc_gse', schema: 'erp_amims' })
export class AmimsMpcGse {
  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ name: 'date_gse', nullable: true })
  dateGse: string;

  @Column({ name: 'id_engineer_rti', nullable: true })
  idEngineerRti: string;

  @PrimaryColumn({ name: 'id_mpc_gse' })
  idMpcGse: string;

  @Column({ name: 'id_user_gse', nullable: true })
  idUserGse: string;

  @Column({ name: 'note_gse', nullable: true })
  noteGse: string;

  @Column({ name: 'status_gse', nullable: true })
  statusGse: string;

  @Column({ name: 'updated_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: string;
}
