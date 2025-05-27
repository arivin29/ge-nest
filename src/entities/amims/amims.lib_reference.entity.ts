import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'lib_reference', schema: 'erp_amims' })
export class AmimsLibReference {
  @PrimaryColumn({ name: 'id_lib_reference' })
  idLibReference: string;

  @Column({ name: 'number_reference', nullable: true })
  numberReference: string;

  @Column({ name: 'name_file', nullable: true })
  nameFile: string;

  @Column({ name: 'last_update', nullable: true })
  lastUpdate: string;

  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ name: 'updated_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: string;
}
