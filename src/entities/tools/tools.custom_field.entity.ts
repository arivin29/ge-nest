import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'custom_field', schema: 'erp_tools' })
export class ToolsCustomField {
  @PrimaryColumn({ name: 'id_custom_field' })
  idCustomField: string;

  @Column({ name: 'id_custom_field_group', nullable: true })
  idCustomFieldGroup: string;

  @Column({ name: 'kode_field' })
  kodeField: string;

  @Column({ name: 'label_field' })
  labelField: string;

  @Column({ name: 'prefix_field', nullable: true })
  prefixField: string;

  @Column({ name: 'tipe_field' })
  tipeField: string;

  @Column({ name: 'opsi_select', nullable: true })
  opsiSelect: string;

  @Column({ name: 'is_filterable', nullable: true })
  isFilterable: boolean;

  @Column({ name: 'is_required', nullable: true })
  isRequired: boolean;

  @Column({ name: 'validasi', nullable: true })
  validasi: string;

  @Column({ name: 'default_value', nullable: true })
  defaultValue: string;

  @Column({ name: 'catatan', nullable: true })
  catatan: string;

  @Column({ name: 'urutan', nullable: true })
  urutan: number;

  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ name: 'updated_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: string;
}
