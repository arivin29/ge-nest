import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'custom_field', schema: 'erp_pelanggan' })
export class PelangganCustomField {
  @PrimaryColumn({ name: 'id_custom_field' })
  idCustomField: string;

  @Column({ name: 'modul', nullable: true })
  modul: string;

  @Column({ name: 'table_name', nullable: true })
  tableName: string;

  @Column({ name: 'kode_field', nullable: true })
  kodeField: string;

  @Column({ name: 'label_field', nullable: true })
  labelField: string;

  @Column({ name: 'tipe_field', nullable: true })
  tipeField: string;

  @Column({ name: 'opsi_select', nullable: true })
  opsiSelect: string;

  @Column({ name: 'is_filterable', nullable: true })
  isFilterable: boolean;

  @Column({ name: 'is_required', nullable: true })
  isRequired: boolean;

  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ name: 'updated_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: string;

  @Column({ name: 'status', nullable: true })
  status: string;
}
