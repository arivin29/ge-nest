import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'sk_izin_ilks', schema: 'new_bpt' })
export class NewBptSkIzinIlks {
  @Column({ name: 'bap' })
  bap: string;

  @Column({ name: 'bar' })
  bar: string;

  @Column({ name: 'id_izin_sk' })
  idIzinSk: number;

  @PrimaryColumn({ name: 'id_sk_izin_ilks' })
  idSkIzinIlks: number;

  @Column({ name: 'klasifikasi_lab' })
  klasifikasiLab: string;

  @Column({ name: 'nama_lab' })
  namaLab: string;

  @Column({ name: 'penanggung_jawab' })
  penanggungJawab: string;

  @Column({ name: 'rip' })
  rip: string;

  @Column({ name: 'tenaga_analis' })
  tenagaAnalis: string;

  @Column({ name: 'tgl_bap' })
  tglBap: string;

  @Column({ name: 'tgl_bar' })
  tglBar: string;

  @Column({ name: 'tgl_rip' })
  tglRip: string;

  @Column({ name: 'tgl_surat' })
  tglSurat: string;
}
