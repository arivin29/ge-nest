import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'penawaran', schema: 'erp_pelanggan' })
export class PelangganPenawaran {
  @PrimaryColumn({ name: 'id_penawaran' })
  idPenawaran: string;

  @Column({ name: 'kode_penawaran' })
  kodePenawaran: string;

  @Column({ name: 'id_client' })
  idClient: string;

  @Column({ name: 'id_kantor', nullable: true })
  idKantor: string;

  @Column({ name: 'judul_penawaran' })
  judulPenawaran: string;

  @Column({ name: 'tanggal_penawaran' })
  tanggalPenawaran: string;

  @Column({ name: 'masa_berlaku_hari', nullable: true })
  masaBerlakuHari: number;

  @Column({ name: 'tanggal_expired', nullable: true })
  tanggalExpired: string;

  @Column({ name: 'versi_revisi', nullable: true })
  versiRevisi: number;

  @Column({ name: 'id_penawaran_asal', nullable: true })
  idPenawaranAsal: string;

  @Column({ name: 'status_penawaran', nullable: true })
  statusPenawaran: string;

  @Column({ name: 'id_contract', nullable: true })
  idContract: string;

  @Column({ name: 'harga_modal_total', nullable: true })
  hargaModalTotal: number;

  @Column({ name: 'harga_batas_minimum_total', nullable: true })
  hargaBatasMinimumTotal: number;

  @Column({ name: 'harga_tawaran_total', nullable: true })
  hargaTawaranTotal: number;

  @Column({ name: 'harga_deal_total', nullable: true })
  hargaDealTotal: number;

  @Column({ name: 'metode_pembayaran', nullable: true })
  metodePembayaran: string;

  @Column({ name: 'jadwal_pembayaran_json', nullable: true })
  jadwalPembayaranJson: string;

  @Column({ name: 'syarat_kondisi', nullable: true })
  syaratKondisi: string;

  @Column({ name: 'catatan_internal', nullable: true })
  catatanInternal: string;

  @Column({ name: 'catatan_eksternal', nullable: true })
  catatanEksternal: string;

  @Column({ name: 'path_file_lampiran', nullable: true })
  pathFileLampiran: string;

  @Column({ name: 'created_by', nullable: true })
  createdBy: string;

  @Column({ name: 'updated_by', nullable: true })
  updatedBy: string;

  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ name: 'updated_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: string;
}
