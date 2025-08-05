import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'log_tsn_tso', schema: 'erp_amims' })
export class AmimsLogTsnTso {
  @Column({ name: 'batas_id', nullable: true })
  batasId: string;

  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ name: 'cycle', nullable: true })
  cycle: number;

  @Column({ name: 'hours', nullable: true })
  hours: number;

  @PrimaryColumn({ name: 'id_log_tsn_tso' })
  idLogTsnTso: string;

  @Column({ name: 'id_part', nullable: true })
  idPart: string;

  @Column({ name: 'id_tech_log', nullable: true })
  idTechLog: string;

  @Column({ name: 'tsn_c', nullable: true })
  tsnC: number;

  @Column({ name: 'tsn_h', nullable: true })
  tsnH: number;

  @Column({ name: 'tso_c', nullable: true })
  tsoC: number;

  @Column({ name: 'tso_h', nullable: true })
  tsoH: number;
}
