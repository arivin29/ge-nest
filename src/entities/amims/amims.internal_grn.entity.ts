import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'internal_grn', schema: 'erp_amims' })
export class AmimsInternalGrn {
  @PrimaryColumn({ name: 'id_internal_grn' })
  idInternalGrn: string;

  @Column({ name: 'number_grn', nullable: true })
  numberGrn: string;

  @Column({ name: 'date_grn', nullable: true })
  dateGrn: string;

  @Column({ name: 'id_site', nullable: true })
  idSite: string;

  @Column({ name: 'validasi', nullable: true })
  validasi: number;

  @Column({ name: 'remark', nullable: true })
  remark: string;

  @Column({ name: 'id_user', nullable: true })
  idUser: string;

  @Column({ name: 'status_grn', nullable: true })
  statusGrn: string;

  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ name: 'updated_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: string;

  @Column({ name: 'date_acc', nullable: true })
  dateAcc: string;

  @Column({ name: 'id_user_acc', nullable: true })
  idUserAcc: string;
}
