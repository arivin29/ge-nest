import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'sk_izin_ito', schema: 'new_bpt' })
export class NewBptSkIzinIto {
  @Column({ name: 'id_izin_sk' })
  idIzinSk: number;

  @PrimaryColumn({ name: 'id_sk_izin_ito' })
  idSkIzinIto: number;

  @Column({ name: 'jenis_kelamin' })
  jenisKelamin: boolean;

  @Column({ name: 'keputusan' })
  keputusan: string;

  @Column({ name: 'lahan' })
  lahan: string;

  @Column({ name: 'masa_berlaku' })
  masaBerlaku: string;

  @Column({ name: 'nama_to', nullable: true })
  namaTo: string;

  @Column({ name: 'no_lapangan' })
  noLapangan: string;

  @Column({ name: 'no_pembahasan' })
  noPembahasan: string;

  @Column({ name: 'no_rekom' })
  noRekom: string;

  @Column({ name: 'nomor_sipttk' })
  nomorSipttk: string;

  @Column({ name: 'penanggung_jawab' })
  penanggungJawab: string;

  @Column({ name: 'tgl_lapangan' })
  tglLapangan: string;

  @Column({ name: 'tgl_pembahasan' })
  tglPembahasan: string;

  @Column({ name: 'tgl_rekom' })
  tglRekom: string;

  @Column({ name: 'tgl_sipttk' })
  tglSipttk: string;

  @Column({ name: 'tgl_surat' })
  tglSurat: string;
}
