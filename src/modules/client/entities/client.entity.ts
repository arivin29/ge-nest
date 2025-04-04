import { Column, Entity, Index } from "typeorm";

@Index("kode_client", ["kodeClient"], { unique: true })
@Entity("client", { schema: "erp_pelanggan" })
export class Client {
  @Column("varchar", { primary: true, name: "id_client", length: 36 })
  idClient: string;

  @Column("varchar", {
    name: "kode_client",
    nullable: true,
    unique: true,
    length: 50,
  })
  kodeClient: string | null;

  @Column("varchar", { name: "jenis_client", nullable: true, length: 37 })
  jenisClient: string | null;

  @Column("varchar", { name: "nama_resmi", length: 255 })
  namaResmi: string;

  @Column("varchar", { name: "nama_familiar", nullable: true, length: 255 })
  namaFamiliar: string | null;

  @Column("varchar", { name: "npwp", nullable: true, length: 50 })
  npwp: string | null;

  @Column("varchar", { name: "email_perusahaan", nullable: true, length: 100 })
  emailPerusahaan: string | null;

  @Column("varchar", { name: "telepon", nullable: true, length: 30 })
  telepon: string | null;

  @Column("varchar", { name: "website", nullable: true, length: 100 })
  website: string | null;

  @Column("text", { name: "alamat", nullable: true })
  alamat: string | null;

  @Column("varchar", { name: "kota", nullable: true, length: 100 })
  kota: string | null;

  @Column("varchar", { name: "provinsi", nullable: true, length: 100 })
  provinsi: string | null;

  @Column("varchar", { name: "kode_pos", nullable: true, length: 10 })
  kodePos: string | null;

  @Column("varchar", { name: "primary_pic", nullable: true, length: 255 })
  primaryPic: string | null;

  @Column("text", { name: "logo_url", nullable: true })
  logoUrl: string | null;

  @Column("text", { name: "catatan", nullable: true })
  catatan: string | null;

  @Column("tinyint", {
    name: "is_aktif",
    nullable: true,
    width: 1,
    default: () => "'1'",
  })
  isAktif: boolean | null;

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
