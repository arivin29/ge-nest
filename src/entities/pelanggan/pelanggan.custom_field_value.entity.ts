import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'custom_field_value', schema: 'erp_pelanggan' })
export class PelangganCustomFieldValue {
  @PrimaryColumn({ name: 'id_custom_field_value' })
  idCustomFieldValue: string;

  @Column({ name: 'id_custom_field' })
  idCustomField: string;

  @Column({ name: 'modul' })
  modul: string;

  @Column({ name: 'table_name' })
  tableName: string;

  @Column({ name: 'modul_id' })
  modulId: string;

  @Column({ name: 'nilai' })
  nilai: string;

  @Column({ name: 'created_at' })
  createdAt: string;

  @Column({ name: 'updated_at' })
  updatedAt: string;

  @Column({ name: 'kode_field' })
  kodeField: string;

  @Column({ name: 'label_field' })
  labelField: string;
}
