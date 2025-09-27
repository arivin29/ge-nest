import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_ipabuzena', schema: 'new_bpt' })
export class NewBptOnlIpabuzena {
  @Column({ name: 'agama' })
  agama: string;

  @Column({ name: 'alamat' })
  alamat: string;

  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_ipabuzena' })
  idOnlIpabuzena: number;

  @Column({ name: 'nama_jenazah' })
  namaJenazah: string;
}
