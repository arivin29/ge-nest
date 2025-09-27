import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'sk_izin_rumija', schema: 'new_bpt' })
export class NewBptSkIzinRumija {
  @Column({ name: 'berlaku' })
  berlaku: string;

  @Column({ name: 'diktum3' })
  diktum3: string;

  @Column({ name: 'id_izin_sk' })
  idIzinSk: number;

  @PrimaryColumn({ name: 'id_sk_izin_rumija' })
  idSkIzinRumija: number;

  @Column({ name: 'jenis_penggunaan' })
  jenisPenggunaan: string;

  @Column({ name: 'kecamatan' })
  kecamatan: string;

  @Column({ name: 'kelurahan' })
  kelurahan: string;

  @Column({ name: 'keputusan_bipati' })
  keputusanBipati: string;

  @Column({ name: 'lokasi' })
  lokasi: string;

  @Column({ name: 'luas_pemakaian' })
  luasPemakaian: string;

  @Column({ name: 'memperhatikan', nullable: true })
  memperhatikan: string;

  @Column({ name: 'no_bap', nullable: true })
  noBap: string;

  @Column({ name: 'no_bapl', nullable: true })
  noBapl: string;

  @Column({ name: 'noreg_gambar', nullable: true })
  noregGambar: string;

  @Column({ name: 'rencana_penggunaan' })
  rencanaPenggunaan: string;

  @Column({ name: 'ruas_jalan' })
  ruasJalan: string;

  @Column({ name: 'tgl_bap' })
  tglBap: string;

  @Column({ name: 'tgl_bapl' })
  tglBapl: string;
}
