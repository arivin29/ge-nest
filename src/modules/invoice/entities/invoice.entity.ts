import { Column, Entity, Index } from "typeorm";

@Index("nomor_invoice", ["nomorInvoice"], { unique: true })
@Index("id_contract", ["idContract"], {})
@Entity("invoice", { schema: "erp_pelanggan" })
export class Invoice {
  @Column("varchar", { primary: true, name: "id_invoice", length: 36 })
  idInvoice: string;

  @Column("varchar", { name: "id_contract", nullable: true, length: 36 })
  idContract: string | null;

  @Column("varchar", {
    name: "nomor_invoice",
    nullable: true,
    unique: true,
    length: 100,
  })
  nomorInvoice: string | null;

  @Column("char", { name: "periode", nullable: true, length: 7 })
  periode: string | null;

  @Column("varchar", { name: "jenis_invoice", nullable: true, length: 20 })
  jenisInvoice: string | null;

  @Column("int", { name: "dpp", nullable: true })
  dpp: number | null;

  @Column("int", { name: "ppn", nullable: true })
  ppn: number | null;

  @Column("int", { name: "nilai_invoice", nullable: true })
  nilaiInvoice: number | null;

  @Column("varchar", { name: "status_invoice", nullable: true, length: 50 })
  statusInvoice: string | null;

  @Column("varchar", { name: "npwp", nullable: true, length: 50 })
  npwp: string | null;

  @Column("text", { name: "alamat_penagihan", nullable: true })
  alamatPenagihan: string | null;

  @Column("varchar", { name: "pic_penagihan", nullable: true, length: 255 })
  picPenagihan: string | null;

  @Column("date", { name: "tanggal_terbit", nullable: true })
  tanggalTerbit: string | null;

  @Column("date", { name: "tanggal_jatuh_tempo", nullable: true })
  tanggalJatuhTempo: string | null;

  @Column("date", { name: "tanggal_dibayar", nullable: true })
  tanggalDibayar: string | null;

  @Column("varchar", { name: "metode_pembayaran", nullable: true, length: 100 })
  metodePembayaran: string | null;

  @Column("text", { name: "catatan", nullable: true })
  catatan: string | null;

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
