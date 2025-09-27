import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'sk_izin_damija', schema: 'new_bpt' })
export class NewBptSkIzinDamija {
  @Column({ name: 'berlaku' })
  berlaku: string;

  @Column({ name: 'id_izin_sk' })
  idIzinSk: number;

  @PrimaryColumn({ name: 'id_sk_izin_damija' })
  idSkIzinDamija: number;

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

  @Column({ name: 'rencana_penggunaan' })
  rencanaPenggunaan: string;

  @Column({ name: 'ruas_jalan' })
  ruasJalan: string;

  @Column({ name: 'tgl_bap' })
  tglBap: string;

  @Column({ name: 'tgl_bapl' })
  tglBapl: string;
}
