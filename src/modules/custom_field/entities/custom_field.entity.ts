import { Column, Entity } from "typeorm";

@Entity("custom_field", { schema: "erp_pelanggan" })
export class CustomField {
  @Column("varchar", { primary: true, name: "id_custom_field", length: 36 })
  idCustomField: string;

  @Column("varchar", { name: "modul", nullable: true, length: 100 })
  modul: string | null;

  @Column("varchar", { name: "table_name", nullable: true, length: 100 })
  tableName: string | null;

  @Column("varchar", { name: "kode_field", nullable: true, length: 100 })
  kodeField: string | null;

  @Column("varchar", { name: "label_field", nullable: true, length: 255 })
  labelField: string | null;

  @Column("varchar", { name: "tipe_field", nullable: true, length: 50 })
  tipeField: string | null;

  @Column("text", { name: "opsi_select", nullable: true })
  opsiSelect: string | null;

  @Column("tinyint", {
    name: "is_filterable",
    nullable: true,
    width: 1,
    default: () => "'1'",
  })
  isFilterable: boolean | null;

  @Column("tinyint", {
    name: "is_required",
    nullable: true,
    width: 1,
    default: () => "'0'",
  })
  isRequired: boolean | null;

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

  @Column("varchar", { name: "status", nullable: true, length: 50 })
  status: string | null;
}
