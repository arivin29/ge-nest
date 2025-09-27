import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'sk_izin_sputdmadya', schema: 'new_bpt' })
export class NewBptSkIzinSputdmadya {
  @Column({ name: 'id_izin_sk' })
  idIzinSk: number;

  @PrimaryColumn({ name: 'id_sk_izin_sputdmadya' })
  idSkIzinSputdmadya: number;

  @Column({ name: 'nama_unit', nullable: true })
  namaUnit: string;

  @Column({ name: 'no_rekom' })
  noRekom: string;

  @Column({ name: 'no_surat' })
  noSurat: string;

  @Column({ name: 'pemilik', nullable: true })
  pemilik: string;

  @Column({ name: 'penanggung_jawab', nullable: true })
  penanggungJawab: string;

  @Column({ name: 'tgl_rekom', nullable: true })
  tglRekom: string;

  @Column({ name: 'tgl_surat', nullable: true })
  tglSurat: string;
}
