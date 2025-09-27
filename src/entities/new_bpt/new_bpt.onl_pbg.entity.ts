import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_pbg', schema: 'new_bpt' })
export class NewBptOnlPbg {
  @Column({ name: 'alamat_pbg' })
  alamatPbg: string;

  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_pbg' })
  idOnlPbg: number;

  @Column({ name: 'jenis_bng' })
  jenisBng: string;

  @Column({ name: 'jml' })
  jml: number;

  @Column({ name: 'luas_bng' })
  luasBng: number;

  @Column({ name: 'luas_tanah' })
  luasTanah: number;

  @Column({ name: 'nama_pemohon' })
  namaPemohon: string;

  @Column({ name: 'nama_perusahaan' })
  namaPerusahaan: string;

  @Column({ name: 'noreg_pbg' })
  noregPbg: string;

  @Column({ name: 'tipe_bng' })
  tipeBng: string;
}
