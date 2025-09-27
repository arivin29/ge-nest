import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'sk_izin_ipdhwn', schema: 'new_bpt' })
export class NewBptSkIzinIpdhwn {
  @Column({ name: 'alamat_praktik' })
  alamatPraktik: string;

  @Column({ name: 'id_izin_sk' })
  idIzinSk: number;

  @PrimaryColumn({ name: 'id_sk_ipdhwn' })
  idSkIpdhwn: number;

  @Column({ name: 'instansi_penerbit' })
  instansiPenerbit: string;

  @Column({ name: 'jenis_praktek' })
  jenisPraktek: string;

  @Column({ name: 'masa_berlaku' })
  masaBerlaku: string;

  @Column({ name: 'masa_berlaku_str' })
  masaBerlakuStr: string;

  @Column({ name: 'no_rekomendasi' })
  noRekomendasi: string;

  @Column({ name: 'no_str' })
  noStr: string;

  @Column({ name: 'sip_ke' })
  sipKe: number;

  @Column({ name: 'tanggal_izin' })
  tanggalIzin: string;
}
