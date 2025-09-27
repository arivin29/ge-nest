import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_isalon', schema: 'new_bpt' })
export class NewBptOnlIsalon {
  @Column({ name: 'bidang_kegiatan' })
  bidangKegiatan: string;

  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_isalon' })
  idOnlIsalon: number;
}
