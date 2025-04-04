import { Column, Entity, Index } from "typeorm";

@Index("kode_service", ["kodeService"], { unique: true })
@Entity("service", { schema: "erp_pelanggan" })
export class Service {
  @Column("varchar", { primary: true, name: "id_service", length: 36 })
  idService: string;

  @Column("varchar", {
    name: "kode_service",
    nullable: true,
    unique: true,
    length: 50,
  })
  kodeService: string | null;

  @Column("varchar", { name: "nama_service", length: 100 })
  namaService: string;

  @Column("text", { name: "deskripsi", nullable: true })
  deskripsi: string | null;

  @Column("varchar", { name: "satuan", nullable: true, length: 50 })
  satuan: string | null;

  @Column("int", {
    name: "frekuensi_default",
    nullable: true,
    default: () => "'1'",
  })
  frekuensiDefault: number | null;

  @Column("int", { name: "harga_default", nullable: true })
  hargaDefault: number | null;

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
