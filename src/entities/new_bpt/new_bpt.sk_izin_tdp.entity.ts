import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'sk_izin_tdp', schema: 'new_bpt' })
export class NewBptSkIzinTdp {
  @Column({ name: 'id_izin_sk' })
  idIzinSk: number;

  @Column({ name: 'id_kbli' })
  idKbli: string;

  @PrimaryColumn({ name: 'id_sk_izin_tdp' })
  idSkIzinTdp: number;

  @Column({ name: 'kbli' })
  kbli: string;

  @Column({ name: 'kbli_param' })
  kbliParam: string;

  @Column({ name: 'kbli_tahun', nullable: true })
  kbliTahun: string;

  @Column({ name: 'nomor_tdp_lama', nullable: true })
  nomorTdpLama: string;

  @Column({ name: 'nomor_tdp_mutasi' })
  nomorTdpMutasi: string;

  @Column({ name: 'perbaharuan_ke' })
  perbaharuanKe: string;

  @Column({ name: 'pindah' })
  pindah: string;

  @Column({ name: 'status' })
  status: string;

  @Column({ name: 'tanggal_siup' })
  tanggalSiup: string;

  @Column({ name: 'tgl' })
  tgl: string;

  @Column({ name: 'undang_undang', nullable: true })
  undangUndang: string;
}
