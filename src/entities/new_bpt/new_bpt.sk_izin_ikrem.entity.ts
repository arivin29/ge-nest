import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'sk_izin_ikrem', schema: 'new_bpt' })
export class NewBptSkIzinIkrem {
  @Column({ name: 'agama_jenazah' })
  agamaJenazah: string;

  @Column({ name: 'id_izin_sk' })
  idIzinSk: number;

  @PrimaryColumn({ name: 'id_sk_izin_ikrem' })
  idSkIzinIkrem: number;

  @Column({ name: 'jk_jenazah' })
  jkJenazah: string;

  @Column({ name: 'jk_pemohon', nullable: true })
  jkPemohon: string;

  @Column({ name: 'lok_kremasi' })
  lokKremasi: string;

  @Column({ name: 'nama_jenazah' })
  namaJenazah: string;

  @Column({ name: 'no_surat' })
  noSurat: string;

  @Column({ name: 'tgl_kermasi' })
  tglKermasi: string;

  @Column({ name: 'tgl_reg' })
  tglReg: string;

  @Column({ name: 'tgl_srt' })
  tglSrt: string;
}
