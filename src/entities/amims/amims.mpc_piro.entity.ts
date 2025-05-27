import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'mpc_piro', schema: 'erp_amims' })
export class AmimsMpcPiro {
  @PrimaryColumn({ name: 'id_mpc_piro' })
  idMpcPiro: string;

  @Column({ name: 'date_piro', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  datePiro: string;

  @Column({ name: 'number_piro', nullable: true })
  numberPiro: string;

  @Column({ name: 'no_index', nullable: true })
  noIndex: number;

  @Column({ name: 'id_user', nullable: true })
  idUser: string;

  @Column({ name: 'status_piro', nullable: true })
  statusPiro: string;

  @Column({ name: 'date_acc', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  dateAcc: string;

  @Column({ name: 'note_piro', nullable: true })
  notePiro: string;

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

  @Column({ name: 'type_piro', nullable: true })
  typePiro: string;

  @Column({ name: 'validasi', nullable: true })
  validasi: number;

  @Column({ name: 'keyword', nullable: true })
  keyword: string;

  @Column({ name: 'id_site', nullable: true })
  idSite: string;

  @Column({ name: 'id_aircraft', nullable: true })
  idAircraft: string;
}
