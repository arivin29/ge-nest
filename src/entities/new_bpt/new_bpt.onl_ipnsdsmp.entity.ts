import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_ipnsdsmp', schema: 'new_bpt' })
export class NewBptOnlIpnsdsmp {
  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_ipnsdsmp' })
  idOnlIpnsdsmp: number;

  @Column({ name: 'nama_sekolah' })
  namaSekolah: string;

  @Column({ name: 'penanggung_jawab' })
  penanggungJawab: string;
}
