import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'sk_izin_ossiurph', schema: 'new_bpt' })
export class NewBptSkIzinOssiurph {
  @Column({ name: 'email' })
  email: string;

  @Column({ name: 'id_izin_sk' })
  idIzinSk: number;

  @PrimaryColumn({ name: 'id_sk_izin_ossiurph' })
  idSkIzinOssiurph: number;

  @Column({ name: 'jabatan' })
  jabatan: string;

  @Column({ name: 'jenis_usaha' })
  jenisUsaha: string;

  @Column({ name: 'kapasitas_populasi', nullable: true })
  kapasitasPopulasi: string;

  @Column({ name: 'luas_bangunan', nullable: true })
  luasBangunan: string;

  @Column({ name: 'luas_prasarana', nullable: true })
  luasPrasarana: string;

  @Column({ name: 'luas_tanah', nullable: true })
  luasTanah: string;

  @Column({ name: 'masa_berlaku' })
  masaBerlaku: string;

  @Column({ name: 'nib' })
  nib: string;

  @Column({ name: 'no_akta' })
  noAkta: string;

  @Column({ name: 'no_bap' })
  noBap: string;

  @Column({ name: 'produksi', nullable: true })
  produksi: string;

  @Column({ name: 'tgl_bap' })
  tglBap: string;

  @Column({ name: 'tka', nullable: true })
  tka: number;

  @Column({ name: 'tki', nullable: true })
  tki: number;
}
