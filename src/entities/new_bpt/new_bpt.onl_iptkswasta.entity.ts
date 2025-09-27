import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_iptkswasta', schema: 'new_bpt' })
export class NewBptOnlIptkswasta {
  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_iptkswasta' })
  idOnlIptkswasta: number;

  @Column({ name: 'nama_lembaga' })
  namaLembaga: string;

  @Column({ name: 'nama_yayasan' })
  namaYayasan: string;
}
