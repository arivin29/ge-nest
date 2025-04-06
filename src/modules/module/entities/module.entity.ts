import { Column, Entity, Index } from "typeorm";

@Index("kode_module", ["kodeModule"], { unique: true })
@Entity("module", { schema: "erp" })
export class Module {
  @Column("varchar", { primary: true, name: "id_module", length: 36 })
  idModule: string;

  @Column("varchar", {
    name: "kode_module",
    nullable: true,
    unique: true,
    length: 100,
  })
  kodeModule: string | null;

  @Column("varchar", { name: "nama_module", nullable: true, length: 255 })
  namaModule: string | null;

  @Column("varchar", { name: "nama_tabel", nullable: true, length: 100 })
  namaTabel: string | null;

  @Column("text", { name: "deskripsi", nullable: true })
  deskripsi: string | null;

  @Column("tinyint", {
    name: "is_aktif",
    nullable: true,
    width: 1,
    default: () => "'1'",
  })
  isAktif: boolean | null;

  @Column("int", { name: "urutan", nullable: true, default: () => "'0'" })
  urutan: number | null;

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
