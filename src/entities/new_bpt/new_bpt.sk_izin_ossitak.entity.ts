import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'sk_izin_ossitak', schema: 'new_bpt' })
export class NewBptSkIzinOssitak {
  @Column({ name: 'id_izin_sk' })
  idIzinSk: number;

  @PrimaryColumn({ name: 'id_sk_izin_ossitak' })
  idSkIzinOssitak: number;

  @Column({ name: 'nama' })
  nama: string;

  @Column({ name: 'nama_toko' })
  namaToko: string;

  @Column({ name: 'nib' })
  nib: string;

  @Column({ name: 'no_bap' })
  noBap: string;

  @Column({ name: 'no_teknis' })
  noTeknis: string;

  @Column({ name: 'tgl_bap', nullable: true })
  tglBap: string;

  @Column({ name: 'tgl_teknis', nullable: true })
  tglTeknis: string;
}
