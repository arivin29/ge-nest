import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_ossiors', schema: 'new_bpt' })
export class NewBptOnlOssiors {
  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_ossiors' })
  idOnlOssiors: number;

  @Column({ name: 'kbli' })
  kbli: string;

  @Column({ name: 'nama_kbli' })
  namaKbli: string;

  @Column({ name: 'nib' })
  nib: string;

  @Column({ name: 'tgl' })
  tgl: string;
}
