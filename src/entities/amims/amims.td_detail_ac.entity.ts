import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'td_detail_ac', schema: 'erp_amims' })
export class AmimsTdDetailAc {
  @PrimaryColumn({ name: 'id_td_detail_ac' })
  idTdDetailAc: string;

  @Column({ name: 'id_td_detail', nullable: true })
  idTdDetail: string;

  @Column({ name: 'id_aircraft', nullable: true })
  idAircraft: string;

  @Column({ name: 'compliance_h', nullable: true })
  complianceH: number;

  @Column({ name: 'compliance_c', nullable: true })
  complianceC: number;

  @Column({ name: 'compliance_d', nullable: true })
  complianceD: string;

  @Column({ name: 'note_detail', nullable: true })
  noteDetail: string;

  @Column({ name: 'is_active', nullable: true })
  isActive: string;

  @Column({ name: 'complite_h', nullable: true })
  compliteH: number;

  @Column({ name: 'complite_c', nullable: true })
  compliteC: number;

  @Column({ name: 'complite_d', nullable: true })
  compliteD: string;

  @Column({ name: 'id_tech_log', nullable: true })
  idTechLog: string;

  @Column({ name: 'updated_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: string;

  @Column({ name: 'note_close', nullable: true })
  noteClose: string;

  @Column({ name: 'complite_user', nullable: true })
  compliteUser: string;

  @Column({ name: 'engineer', nullable: true })
  engineer: string;
}
