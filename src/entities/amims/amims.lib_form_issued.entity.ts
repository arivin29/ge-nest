import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'lib_form_issued', schema: 'erp_amims' })
export class AmimsLibFormIssued {
  @PrimaryColumn({ name: 'id_lib_form_issued' })
  idLibFormIssued: string;

  @Column({ name: 'number_form', nullable: true })
  numberForm: string;

  @Column({ name: 'name_file', nullable: true })
  nameFile: string;

  @Column({ name: 'revision', nullable: true })
  revision: string;

  @Column({ name: 'last_update', nullable: true })
  lastUpdate: string;

  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ name: 'updated_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: string;

  @Column({ name: 'number_w', nullable: true })
  numberW: string;
}
