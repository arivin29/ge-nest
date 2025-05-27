import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'penawaran_item', schema: 'erp_pelanggan' })
export class PelangganPenawaranItem {
  @PrimaryColumn({ name: 'id_penawaran_item' })
  idPenawaranItem: string;

  @Column({ name: 'id_penawaran' })
  idPenawaran: string;

  @Column({ name: 'id_service', nullable: true })
  idService: string;

  @Column({ name: 'nama_item' })
  namaItem: string;

  @Column({ name: 'deskripsi_item', nullable: true })
  deskripsiItem: string;

  @Column({ name: 'qty', nullable: true })
  qty: number;

  @Column({ name: 'satuan', nullable: true })
  satuan: string;

  @Column({ name: 'harga_modal', nullable: true })
  hargaModal: number;

  @Column({ name: 'harga_batas_minimum', nullable: true })
  hargaBatasMinimum: number;

  @Column({ name: 'harga_tawaran', nullable: true })
  hargaTawaran: number;

  @Column({ name: 'harga_deal', nullable: true })
  hargaDeal: number;

  @Column({ name: 'diskon_persen', nullable: true })
  diskonPersen: number;

  @Column({ name: 'diskon_nominal', nullable: true })
  diskonNominal: number;

  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ name: 'updated_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: string;
}
