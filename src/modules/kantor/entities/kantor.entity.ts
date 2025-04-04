import { Column, Entity, Index } from "typeorm";

@Index("kode_kantor", ["kodeKantor"], { unique: true })
@Entity("kantor", { schema: "erp_pelanggan" })
export class Kantor {
  @Column("varchar", { primary: true, name: "id_kantor", length: 36 })
  idKantor: string;

  @Column("varchar", { name: "nama_kantor", length: 100 })
  namaKantor: string;

  @Column("varchar", {
    name: "kode_kantor",
    nullable: true,
    unique: true,
    length: 20,
  })
  kodeKantor: string | null;

  @Column("text", { name: "alamat", nullable: true })
  alamat: string | null;

  @Column("varchar", { name: "kota", nullable: true, length: 100 })
  kota: string | null;

  @Column("varchar", { name: "provinsi", nullable: true, length: 100 })
  provinsi: string | null;

  @Column("tinyint", {
    name: "is_pusat",
    nullable: true,
    width: 1,
    default: () => "'0'",
  })
  isPusat: boolean | null;

  @Column("tinyint", {
    name: "is_aktif",
    nullable: true,
    width: 1,
    default: () => "'1'",
  })
  isAktif: boolean | null;

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
