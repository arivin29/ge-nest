import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_ipsmpswasta', schema: 'new_bpt' })
export class NewBptOnlIpsmpswasta {
  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_ipsmpswasta' })
  idOnlIpsmpswasta: number;

  @Column({ name: 'nama_lembaga' })
  namaLembaga: string;

  @Column({ name: 'nama_yayasan' })
  namaYayasan: string;
}
