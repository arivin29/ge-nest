import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_iok', schema: 'new_bpt' })
export class NewBptOnlIok {
  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_iok' })
  idOnlIok: number;

  @Column({ name: 'jenis' })
  jenis: string;

  @Column({ name: 'nama_apoteker' })
  namaApoteker: string;

  @Column({ name: 'nama_d_a' })
  namaDA: string;

  @Column({ name: 'nama_d_b' })
  namaDB: string;

  @Column({ name: 'nomor_apoteker' })
  nomorApoteker: string;

  @Column({ name: 'nomor_d_a' })
  nomorDA: string;

  @Column({ name: 'nomor_d_b' })
  nomorDB: string;
}
