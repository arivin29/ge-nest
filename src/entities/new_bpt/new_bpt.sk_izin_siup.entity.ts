import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'sk_izin_siup', schema: 'new_bpt' })
export class NewBptSkIzinSiup {
  @Column({ name: 'id_izin_sk' })
  idIzinSk: number;

  @Column({ name: 'id_kbli' })
  idKbli: string;

  @PrimaryColumn({ name: 'id_sk_izin_siup' })
  idSkIzinSiup: number;

  @Column({ name: 'kbli' })
  kbli: string;

  @Column({ name: 'kbli_param' })
  kbliParam: string;

  @Column({ name: 'kbli_tahun' })
  kbliTahun: string;

  @Column({ name: 'kelembagaan' })
  kelembagaan: string;

  @Column({ name: 'nilai_kekayaan_bersih', nullable: true })
  nilaiKekayaanBersih: number;

  @Column({ name: 'nomor_siup_mutasi', nullable: true })
  nomorSiupMutasi: string;

  @Column({ name: 'nomor_siup_pusat' })
  nomorSiupPusat: string;

  @Column({ name: 'nomor_tdp_mutasi', nullable: true })
  nomorTdpMutasi: string;

  @Column({ name: 'pindah', nullable: true })
  pindah: string;

  @Column({ name: 'tanggal_siup', nullable: true })
  tanggalSiup: string;

  @Column({ name: 'tgl' })
  tgl: string;
}
