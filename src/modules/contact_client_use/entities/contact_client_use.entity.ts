import { Column, Entity, Index } from "typeorm";

@Index("id_contact", ["idClientContact"], {})
@Entity("contact_client_use", { schema: "erp_pelanggan" })
export class ContactClientUse {
  @Column("varchar", {
    primary: true,
    name: "id_contact_client_use",
    length: 36,
  })
  idContactClientUse: string;

  @Column("varchar", { name: "id_client_contact", length: 36 })
  idClientContact: string;

  @Column("varchar", { name: "from_module", length: 50 })
  fromModule: string;

  @Column("varchar", { name: "from_module_id", length: 36 })
  fromModuleId: string;

  @Column("varchar", { name: "peran", nullable: true, length: 100 })
  peran: string | null;

  @Column("tinyint", {
    name: "is_primary",
    nullable: true,
    width: 1,
    default: () => "'0'",
  })
  isPrimary: boolean | null;

  @Column("text", { name: "catatan", nullable: true })
  catatan: string | null;

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
}
