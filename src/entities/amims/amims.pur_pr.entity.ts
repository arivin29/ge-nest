import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'pur_pr', schema: 'erp_amims' })
export class AmimsPurPr {
  @PrimaryColumn({ name: 'id_pur_pr' })
  idPurPr: string;

  @Column({ name: 'date_pr', nullable: true })
  datePr: string;

  @Column({ name: 'number_pr', nullable: true })
  numberPr: string;

  @Column({ name: 'no_index', nullable: true })
  noIndex: number;

  @Column({ name: 'id_user', nullable: true })
  idUser: string;

  @Column({ name: 'status_pr', nullable: true })
  statusPr: string;

  @Column({ name: 'date_acc', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  dateAcc: string;

  @Column({ name: 'note_pr', nullable: true })
  notePr: string;

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

  @Column({ name: 'type_pr', nullable: true })
  typePr: string;

  @Column({ name: 'validasi', nullable: true })
  validasi: number;

  @Column({ name: 'keyword', nullable: true })
  keyword: string;

  @Column({ name: 'id_position', nullable: true })
  idPosition: string;

  @Column({ name: 'id_aircraft', nullable: true })
  idAircraft: string;

  @Column({ name: 'id_site', nullable: true })
  idSite: string;

  @Column({ name: 'old_pr', nullable: true })
  oldPr: string;
}
