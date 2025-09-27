import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_krk', schema: 'new_bpt' })
export class NewBptOnlKrk {
  @Column({ name: 'alatmesin', nullable: true })
  alatmesin: number;

  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_krk' })
  idOnlKrk: number;

  @Column({ name: 'judul_kbli', nullable: true })
  judulKbli: string;

  @Column({ name: 'jumlah_bangunan' })
  jumlahBangunan: number;

  @Column({ name: 'jumlah_lantai' })
  jumlahLantai: number;

  @Column({ name: 'kode_kbli', nullable: true })
  kodeKbli: string;

  @Column({ name: 'kondisi_fisik' })
  kondisiFisik: string;

  @Column({ name: 'koordinat' })
  koordinat: string;

  @Column({ name: 'luas_tanah' })
  luasTanah: string;

  @Column({ name: 'nama_pemilik_tanah' })
  namaPemilikTanah: string;

  @Column({ name: 'nib' })
  nib: string;

  @Column({ name: 'rencana_luas' })
  rencanaLuas: string;

  @Column({ name: 'rencana_penggunaan' })
  rencanaPenggunaan: string;

  @Column({ name: 'rencana_tinggi' })
  rencanaTinggi: number;

  @Column({ name: 'status_tanah' })
  statusTanah: string;
}
