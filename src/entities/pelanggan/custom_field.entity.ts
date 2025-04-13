import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'custom_field', schema: 'erp_pelanggan' })
export class CustomField {
  @PrimaryColumn({ name: 'id_custom_field' })
  idCustomField: string;

  @Column({ name: 'modul' })
  modul: string;

  @Column({ name: 'table_name' })
  tableName: string;

  @Column({ name: 'kode_field' })
  kodeField: string;

  @Column({ name: 'label_field' })
  labelField: string;

  @Column({ name: 'tipe_field' })
  tipeField: string;

  @Column({ name: 'opsi_select' })
  opsiSelect: string;

  @Column({ name: 'is_filterable' })
  isFilterable: boolean;

  @Column({ name: 'is_required' })
  isRequired: boolean;

  @Column({ name: 'created_at' })
  createdAt: string;

  @Column({ name: 'updated_at' })
  updatedAt: string;

  @Column({ name: 'status' })
  status: string;
}
