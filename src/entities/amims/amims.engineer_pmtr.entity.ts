import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'engineer_pmtr', schema: 'erp_amims' })
export class AmimsEngineerPmtr {
  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ name: 'date_acc', nullable: true })
  dateAcc: string;

  @Column({ name: 'date_pmtr', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  datePmtr: string;

  @Column({ name: 'from_site', nullable: true })
  fromSite: number;

  @Column({ name: 'id_aircraft', nullable: true })
  idAircraft: string;

  @PrimaryColumn({ name: 'id_engineer_pmtr' })
  idEngineerPmtr: string;

  @Column({ name: 'id_user', nullable: true })
  idUser: string;

  @Column({ name: 'id_user_acc', nullable: true })
  idUserAcc: string;

  @Column({ name: 'is_deleted', nullable: true })
  isDeleted: number;

  @Column({ name: 'no_index', nullable: true })
  noIndex: number;

  @Column({ name: 'note_pmtr', nullable: true })
  notePmtr: string;

  @Column({ name: 'number_pmtr', nullable: true })
  numberPmtr: string;

  @Column({ name: 'status_pmtr', nullable: true })
  statusPmtr: string;

  @Column({ name: 'to_site', nullable: true })
  toSite: number;

  @Column({ name: 'updated_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: string;

  @Column({ name: 'validasi', nullable: true })
  validasi: number;
}
