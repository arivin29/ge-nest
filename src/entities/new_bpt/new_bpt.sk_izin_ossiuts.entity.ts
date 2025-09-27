import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'sk_izin_ossiuts', schema: 'new_bpt' })
export class NewBptSkIzinOssiuts {
  @Column({ name: 'id_izin_sk' })
  idIzinSk: number;

  @PrimaryColumn({ name: 'id_sk_izin_ossiuts' })
  idSkIzinOssiuts: number;

  @Column({ name: 'jabatan' })
  jabatan: string;

  @Column({ name: 'jenis_usaha' })
  jenisUsaha: string;

  @Column({ name: 'masa_berlaku' })
  masaBerlaku: string;

  @Column({ name: 'nib' })
  nib: string;

  @Column({ name: 'no_pertek' })
  noPertek: string;

  @Column({ name: 'no_shilang', nullable: true })
  noShilang: string;

  @Column({ name: 'no_sk_lama', nullable: true })
  noSkLama: string;

  @Column({ name: 'no_terbit', nullable: true })
  noTerbit: string;

  @Column({ name: 'perihal', nullable: true })
  perihal: string;

  @Column({ name: 'perihal_shilang', nullable: true })
  perihalShilang: string;

  @Column({ name: 'sebsed_berakhir', nullable: true })
  sebsedBerakhir: string;

  @Column({ name: 'teknis', nullable: true })
  teknis: string;

  @Column({ name: 'tgl_berlaku', nullable: true })
  tglBerlaku: string;

  @Column({ name: 'tgl_pertek' })
  tglPertek: string;

  @Column({ name: 'tgl_shilang', nullable: true })
  tglShilang: string;

  @Column({ name: 'tgl_sk_lama', nullable: true })
  tglSkLama: string;

  @Column({ name: 'tgl_terbit', nullable: true })
  tglTerbit: string;
}
