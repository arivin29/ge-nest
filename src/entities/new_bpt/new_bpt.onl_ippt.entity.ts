import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_ippt', schema: 'new_bpt' })
export class NewBptOnlIppt {
  @Column({ name: 'alatmesin', nullable: true })
  alatmesin: number;

  @Column({ name: 'bangunan', nullable: true })
  bangunan: number;

  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_ippt' })
  idOnlIppt: number;

  @Column({ name: 'jumlah_bangunan' })
  jumlahBangunan: number;

  @Column({ name: 'jumlah_lantai' })
  jumlahLantai: number;

  @Column({ name: 'kondisi_fisik' })
  kondisiFisik: string;

  @Column({ name: 'luas_tanah' })
  luasTanah: number;

  @Column({ name: 'nama_pemilik_tanah' })
  namaPemilikTanah: string;

  @Column({ name: 'rencana_luas' })
  rencanaLuas: number;

  @Column({ name: 'rencana_penggunaan' })
  rencanaPenggunaan: string;

  @Column({ name: 'rencana_tinggi' })
  rencanaTinggi: number;

  @Column({ name: 'status_tanah' })
  statusTanah: string;

  @Column({ name: 'tanah', nullable: true })
  tanah: number;

  @Column({ name: 'tkp', nullable: true })
  tkp: number;

  @Column({ name: 'tkw', nullable: true })
  tkw: number;
}
