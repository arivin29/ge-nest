import { Column, Entity, Index } from "typeorm";

@Index("id_client", ["idClient"], {})
@Entity("client_site", { schema: "erp_pelanggan" })
export class ClientSite {
  @Column("varchar", { primary: true, name: "id_client_site", length: 36 })
  idClientSite: string;

  @Column("varchar", { name: "id_client", length: 36 })
  idClient: string;

  @Column("varchar", { name: "nama_site", nullable: true, length: 255 })
  namaSite: string | null;

  @Column("text", { name: "alamat", nullable: true })
  alamat: string | null;

  @Column("varchar", { name: "kota", nullable: true, length: 100 })
  kota: string | null;

  @Column("varchar", { name: "provinsi", nullable: true, length: 100 })
  provinsi: string | null;

  @Column("varchar", { name: "kode_pos", nullable: true, length: 10 })
  kodePos: string | null;

  @Column("varchar", { name: "kategori_site", nullable: true, length: 100 })
  kategoriSite: string | null;

  @Column("varchar", { name: "tag_site", nullable: true, length: 255 })
  tagSite: string | null;

  @Column("decimal", {
    name: "latitude",
    nullable: true,
    precision: 10,
    scale: 6,
  })
  latitude: string | null;

  @Column("decimal", {
    name: "longitude",
    nullable: true,
    precision: 10,
    scale: 6,
  })
  longitude: string | null;

  @Column("tinyint", {
    name: "is_aktif",
    nullable: true,
    width: 1,
    default: () => "'1'",
  })
  isAktif: boolean | null;

  @Column("varchar", { name: "id_kantor", nullable: true, length: 36 })
  idKantor: string | null;

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
