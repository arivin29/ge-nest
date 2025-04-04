import { Column, Entity, Index } from "typeorm";

@Index("id_invoice", ["idInvoice"], {})
@Entity("faktur", { schema: "erp_pelanggan" })
export class Faktur {
  @Column("varchar", { primary: true, name: "id_faktur", length: 36 })
  idFaktur: string;

  @Column("varchar", { name: "id_invoice", length: 36 })
  idInvoice: string;

  @Column("int", { name: "versi_faktur", nullable: true, default: () => "'1'" })
  versiFaktur: number | null;

  @Column("varchar", { name: "nomor_faktur", nullable: true, length: 100 })
  nomorFaktur: string | null;

  @Column("date", { name: "tanggal_faktur", nullable: true })
  tanggalFaktur: string | null;

  @Column("int", { name: "nilai_faktur", nullable: true })
  nilaiFaktur: number | null;

  @Column("varchar", { name: "status_pembayaran", nullable: true, length: 50 })
  statusPembayaran: string | null;

  @Column("date", { name: "tanggal_pembayaran", nullable: true })
  tanggalPembayaran: string | null;

  @Column("varchar", { name: "metode_pembayaran", nullable: true, length: 100 })
  metodePembayaran: string | null;

  @Column("varchar", {
    name: "nomor_referensi_pembayaran",
    nullable: true,
    length: 100,
  })
  nomorReferensiPembayaran: string | null;

  @Column("text", { name: "catatan", nullable: true })
  catatan: string | null;

  @Column("text", { name: "file_faktur_url", nullable: true })
  fileFakturUrl: string | null;

  @Column("varchar", { name: "created_by", nullable: true, length: 100 })
  createdBy: string | null;

  @Column("varchar", { name: "updated_by", nullable: true, length: 100 })
  updatedBy: string | null;

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
