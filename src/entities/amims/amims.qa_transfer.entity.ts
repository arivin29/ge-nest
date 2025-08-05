import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'qa_transfer', schema: 'erp_amims' })
export class AmimsQaTransfer {
  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ name: 'date_received', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  dateReceived: string;

  @Column({ name: 'date_transfer', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  dateTransfer: string;

  @PrimaryColumn({ name: 'id_qa_transfer' })
  idQaTransfer: string;

  @Column({ name: 'id_site', nullable: true })
  idSite: string;

  @Column({ name: 'id_user', nullable: true })
  idUser: string;

  @Column({ name: 'id_user_received', nullable: true })
  idUserReceived: string;

  @Column({ name: 'no_index', nullable: true })
  noIndex: number;

  @Column({ name: 'note_transfer', nullable: true })
  noteTransfer: string;

  @Column({ name: 'number_transfer', nullable: true })
  numberTransfer: string;

  @Column({ name: 'status_transfer', nullable: true })
  statusTransfer: string;

  @Column({ name: 'to_site', nullable: true })
  toSite: number;

  @Column({ name: 'type_transfer', nullable: true })
  typeTransfer: string;

  @Column({ name: 'updated_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: string;

  @Column({ name: 'validasi', nullable: true })
  validasi: number;
}
