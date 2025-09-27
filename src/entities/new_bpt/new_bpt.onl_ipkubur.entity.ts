import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_ipkubur', schema: 'new_bpt' })
export class NewBptOnlIpkubur {
  @Column({ name: 'agama' })
  agama: string;

  @Column({ name: 'blok' })
  blok: string;

  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_ipkubur' })
  idOnlIpkubur: number;

  @Column({ name: 'nama_jenazah' })
  namaJenazah: string;

  @Column({ name: 'nomor' })
  nomor: string;
}
