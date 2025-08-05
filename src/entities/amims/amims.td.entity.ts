import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'td', schema: 'erp_amims' })
export class AmimsTd {
  @Column({ name: 'applicable', nullable: true })
  applicable: string;

  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ name: 'doc_number', nullable: true })
  docNumber: string;

  @Column({ name: 'effective_date', nullable: true })
  effectiveDate: string;

  @Column({ name: 'file_td', nullable: true })
  fileTd: string;

  @Column({ name: 'id_doctype', nullable: true })
  idDoctype: string;

  @PrimaryColumn({ name: 'id_td' })
  idTd: string;

  @Column({ name: 'id_user', nullable: true })
  idUser: string;

  @Column({ name: 'note_doc', nullable: true })
  noteDoc: string;

  @Column({ name: 'old_id', nullable: true })
  oldId: string;

  @Column({ name: 'rev', nullable: true })
  rev: string;

  @Column({ name: 'td_parent', nullable: true })
  tdParent: string;

  @Column({ name: 'title', nullable: true })
  title: string;

  @Column({ name: 'updated_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: string;

  @Column({ name: 'validasi', nullable: true })
  validasi: number;
}
