import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'sesi', schema: 'new_bpt' })
export class NewBptSesi {
  @Column({ name: 'bidang', nullable: true })
  bidang: string;

  @PrimaryColumn({ name: 'id_sesi' })
  idSesi: number;

  @Column({ name: 'jam_akhir', nullable: true })
  jamAkhir: string;

  @Column({ name: 'jam_awal', nullable: true })
  jamAwal: string;

  @Column({ name: 'jenis_layanan', nullable: true })
  jenisLayanan: boolean;

  @Column({ name: 'jumlah', nullable: true })
  jumlah: boolean;

  @Column({ name: 'sesi', nullable: true })
  sesi: boolean;
}
