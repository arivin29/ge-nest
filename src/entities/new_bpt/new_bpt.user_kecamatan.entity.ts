import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'user_kecamatan', schema: 'new_bpt' })
export class NewBptUserKecamatan {
  @Column({ name: 'id_kecamatan' })
  idKecamatan: number;

  @Column({ name: 'id_user' })
  idUser: number;

  @PrimaryColumn({ name: 'id_user_kecamatan' })
  idUserKecamatan: number;
}
