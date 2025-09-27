import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'sk_izin_ipbkrj', schema: 'new_bpt' })
export class NewBptSkIzinIpbkrj {
  @Column({ name: 'id_izin_sk' })
  idIzinSk: number;

  @PrimaryColumn({ name: 'id_sk_izin_ipbkrj' })
  idSkIzinIpbkrj: number;

  @Column({ name: 'memperhatikan' })
  memperhatikan: string;

  @Column({ name: 'nama_bkk' })
  namaBkk: string;

  @Column({ name: 'nomor_surat' })
  nomorSurat: string;

  @Column({ name: 'penanggung_jawab' })
  penanggungJawab: string;

  @Column({ name: 'tgl_surat' })
  tglSurat: string;
}
