import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_ipmkm', schema: 'new_bpt' })
export class NewBptOnlIpmkm {
  @Column({ name: 'bangunan_makam' })
  bangunanMakam: string;

  @Column({ name: 'blok' })
  blok: string;

  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_ipmkm' })
  idOnlIpmkm: number;

  @Column({ name: 'jenis' })
  jenis: string;

  @Column({ name: 'nama' })
  nama: string;
}
