import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'engineer_pris', schema: 'erp_amims' })
export class AmimsEngineerPris {
  @PrimaryColumn({ name: 'id_engineer_pris' })
  idEngineerPris: string;

  @Column({ name: 'date_pris', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  datePris: string;

  @Column({ name: 'number_pris', nullable: true })
  numberPris: string;

  @Column({ name: 'no_index', nullable: true })
  noIndex: number;

  @Column({ name: 'id_user', nullable: true })
  idUser: string;

  @Column({ name: 'status_pris', nullable: true })
  statusPris: string;

  @Column({ name: 'date_acc', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  dateAcc: string;

  @Column({ name: 'note_pris', nullable: true })
  notePris: string;

  @Column({ name: 'description', nullable: true })
  description: string;

  @Column({ name: 'id_user_acc', nullable: true })
  idUserAcc: string;

  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ name: 'updated_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: string;

  @Column({ name: 'is_deleted', nullable: true })
  isDeleted: number;

  @Column({ name: 'type_pris', nullable: true })
  typePris: string;

  @Column({ name: 'validasi', nullable: true })
  validasi: number;

  @Column({ name: 'keyword', nullable: true })
  keyword: string;

  @Column({ name: 'id_position', nullable: true })
  idPosition: string;

  @Column({ name: 'priority', nullable: true })
  priority: string;

  @Column({ name: 'id_aircraft', nullable: true })
  idAircraft: string;

  @Column({ name: 'date_close', nullable: true })
  dateClose: string;

  @Column({ name: 'id_user_close', nullable: true })
  idUserClose: string;

  @Column({ name: 'id_site', nullable: true })
  idSite: string;

  @Column({ name: 'date_install', nullable: true })
  dateInstall: string;

  @Column({ name: 'number_wp', nullable: true })
  numberWp: string;

  @Column({ name: 'number_jo', nullable: true })
  numberJo: string;

  @Column({ name: 'date_issued', nullable: true })
  dateIssued: string;

  @Column({ name: 'id_user_issued', nullable: true })
  idUserIssued: string;
}
