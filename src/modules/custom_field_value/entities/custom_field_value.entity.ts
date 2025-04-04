import { Column, Entity, Index } from "typeorm";

@Index(
  "uniq_custom_field_per_entity",
  ["idCustomField", "tableName", "modulId"],
  { unique: true }
)
@Index("id_custom_field", ["idCustomField"], {})
@Index("idx_custom_field_lookup", ["tableName", "modulId"], {})
@Entity("custom_field_value", { schema: "erp_pelanggan" })
export class CustomFieldValue {
  @Column("varchar", {
    primary: true,
    name: "id_custom_field_value",
    length: 36,
  })
  idCustomFieldValue: string;

  @Column("varchar", { name: "id_custom_field", length: 36 })
  idCustomField: string;

  @Column("varchar", { name: "modul", nullable: true, length: 100 })
  modul: string | null;

  @Column("varchar", { name: "table_name", nullable: true, length: 100 })
  tableName: string | null;

  @Column("varchar", { name: "modul_id", length: 36 })
  modulId: string;

  @Column("text", { name: "nilai", nullable: true })
  nilai: string | null;

  @Column("datetime", {
    name: "created_at",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date | null;

  @Column("datetime", {
    name: "updated_at",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  updatedAt: Date | null;

  @Column("varchar", { name: "kode_field", nullable: true, length: 100 })
  kodeField: string | null;

  @Column("varchar", { name: "label_field", nullable: true, length: 100 })
  labelField: string | null;
}
