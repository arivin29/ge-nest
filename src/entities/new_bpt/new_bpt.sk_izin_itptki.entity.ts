import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'sk_izin_itptki', schema: 'new_bpt' })
export class NewBptSkIzinItptki {
  @Column({ name: 'id_izin_sk' })
  idIzinSk: number;

  @PrimaryColumn({ name: 'id_sk_izin_itptki' })
  idSkIzinItptki: number;

  @Column({ name: 'jenis' })
  jenis: string;

  @Column({ name: 'jk' })
  jk: number;

  @Column({ name: 'kapasitas_tki' })
  kapasitasTki: string;

  @Column({ name: 'no_tki' })
  noTki: string;

  @Column({ name: 'nomor_surat' })
  nomorSurat: string;

  @Column({ name: 'pentasker' })
  pentasker: string;

  @Column({ name: 'tgl_reg' })
  tglReg: string;

  @Column({ name: 'tgl_srt' })
  tglSrt: string;

  @Column({ name: 'tgl_tki' })
  tglTki: string;
}
