import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'custom_field_value', schema: 'erp_tools' })
export class ToolsCustomFieldValue {
  @PrimaryColumn({ name: 'id_custom_field_value' })
  idCustomFieldValue: string;

  @Column({ name: 'id_custom_field' })
  idCustomField: string;

  @Column({ name: 'id_custom_field_group', nullable: true })
  idCustomFieldGroup: string;

  @Column({ name: 'modul', nullable: true })
  modul: string;

  @Column({ name: 'table_name', nullable: true })
  tableName: string;

  @Column({ name: 'modul_id' })
  modulId: string;

  @Column({ name: 'nilai', nullable: true })
  nilai: string;

  @Column({ name: 'nilai_json', nullable: true })
  nilaiJson: string;

  @Column({ name: 'kode_field', nullable: true })
  kodeField: string;

  @Column({ name: 'label_field', nullable: true })
  labelField: string;

  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ name: 'updated_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: string;
}
