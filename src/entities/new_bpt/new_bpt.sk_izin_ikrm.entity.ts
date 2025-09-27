import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'sk_izin_ikrm', schema: 'new_bpt' })
export class NewBptSkIzinIkrm {
  @Column({ name: 'bekerja' })
  bekerja: string;

  @Column({ name: 'id_izin_sk' })
  idIzinSk: number;

  @PrimaryColumn({ name: 'id_sk_izin_ikrm' })
  idSkIzinIkrm: number;

  @Column({ name: 'no_rekom' })
  noRekom: string;

  @Column({ name: 'no_str' })
  noStr: string;
}
