import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_ipsdswasta', schema: 'new_bpt' })
export class NewBptOnlIpsdswasta {
  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_ipsdswasta' })
  idOnlIpsdswasta: number;

  @Column({ name: 'nama_lembaga' })
  namaLembaga: string;

  @Column({ name: 'nama_yayasan' })
  namaYayasan: string;
}
