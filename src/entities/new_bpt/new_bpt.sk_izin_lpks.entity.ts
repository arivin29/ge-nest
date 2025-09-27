import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'sk_izin_lpks', schema: 'new_bpt' })
export class NewBptSkIzinLpks {
  @Column({ name: 'id_izin_sk' })
  idIzinSk: number;

  @PrimaryColumn({ name: 'id_sk_izin_lpks' })
  idSkIzinLpks: number;

  @Column({ name: 'inputno5', nullable: true })
  inputno5: string;

  @Column({ name: 'jenis_izin' })
  jenisIzin: string;

  @Column({ name: 'jenis_program' })
  jenisProgram: string;

  @Column({ name: 'jk', nullable: true })
  jk: string;

  @Column({ name: 'kajian' })
  kajian: string;

  @Column({ name: 'kapasitas' })
  kapasitas: string;

  @Column({ name: 'nama_lpks' })
  namaLpks: string;

  @Column({ name: 'no_lkps' })
  noLkps: string;

  @Column({ name: 'nomor_surat' })
  nomorSurat: string;

  @Column({ name: 'sewa' })
  sewa: string;

  @Column({ name: 'tgl_lkps', nullable: true })
  tglLkps: string;

  @Column({ name: 'tgl_reg', nullable: true })
  tglReg: string;
}
