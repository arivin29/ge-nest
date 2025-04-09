import { Column, Entity, Index } from "typeorm";

@Index("id_client", ["idClient"], {})
@Entity("client_contact", { schema: "erp_pelanggan" })
export class ClientContact {
  @Column("varchar", { primary: true, name: "id_client_contact", length: 36 })
  idClientContact: string;

  @Column("varchar", { name: "id_client", length: 36 })
  idClient: string;

  @Column("varchar", { name: "nama_contact", nullable: true, length: 255 })
  namaContact: string | null;

  @Column("varchar", { name: "email", nullable: true, length: 100 })
  email: string | null;

  @Column("varchar", { name: "telepon", nullable: true, length: 30 })
  telepon: string | null;

  @Column("varchar", { name: "jabatan", nullable: true, length: 100 })
  jabatan: string | null;

  @Column("varchar", { name: "divisi", nullable: true, length: 100 })
  divisi: string | null;

  @Column("enum", {
    name: "jenis_contact",
    nullable: true,
    enum: ["Teknis", "Keuangan", "Penanggung Jawab", "PIC Utama", "Lainnya"],
  })
  jenisContact:
    | "Teknis"
    | "Keuangan"
    | "Penanggung Jawab"
    | "PIC Utama"
    | "Lainnya"
    | null;

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
