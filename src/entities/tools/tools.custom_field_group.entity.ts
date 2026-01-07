import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'custom_field_group', schema: 'erp_tools' })
export class ToolsCustomFieldGroup {
  @PrimaryColumn({ name: 'id_custom_field_group' })
  idCustomFieldGroup: string;

  @Column({ name: 'nama_group' })
  namaGroup: string;

  @Column({ name: 'modul', nullable: true })
  modul: string;

  @Column({ name: 'table_name', nullable: true })
  tableName: string;

  @Column({ name: 'deskripsi', nullable: true })
  deskripsi: string;

  @Column({ name: 'is_repeatable', nullable: true })
  isRepeatable: boolean;

  @Column({ name: 'visibility_rule', nullable: true })
  visibilityRule: string;

  @Column({ name: 'for_kantor', nullable: true })
  forKantor: string;

  @Column({ name: 'for_role', nullable: true })
  forRole: string;

  @Column({ name: 'tipe_render', nullable: true })
  tipeRender: string;

  @Column({ name: 'urutan', nullable: true })
  urutan: number;

  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ name: 'updated_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: string;
}
