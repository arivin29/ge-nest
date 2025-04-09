import { Column, Entity } from "typeorm";

@Entity("company_config", { schema: "erp_pelanggan" })
export class CompanyConfig {
  @Column("varchar", { primary: true, name: "id_company_config", length: 36 })
  idCompanyConfig: string;

  @Column("varchar", {
    name: "versi_erp",
    nullable: true,
    length: 20,
    default: () => "'1.0.0'",
  })
  versiErp: string | null;

  @Column("varchar", { name: "nama_perusahaan", nullable: true, length: 255 })
  namaPerusahaan: string | null;

  @Column("text", { name: "logo_url", nullable: true })
  logoUrl: string | null;

  @Column("text", { name: "alamat", nullable: true })
  alamat: string | null;

  @Column("text", { name: "kontak", nullable: true })
  kontak: string | null;

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
