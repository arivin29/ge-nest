import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'setting', schema: 'new_bpt' })
export class NewBptSetting {
  @Column({ name: 'antrian_ppo', nullable: true })
  antrianPpo: boolean;

  @Column({ name: 'antrian_ppr', nullable: true })
  antrianPpr: boolean;

  @Column({ name: 'id_izin_test', nullable: true })
  idIzinTest: number;

  @PrimaryColumn({ name: 'id_setting' })
  idSetting: number;

  @Column({ name: 'jam_pelayanan_mulai', nullable: true })
  jamPelayananMulai: string;

  @Column({ name: 'jam_pelayanan_selesai', nullable: true })
  jamPelayananSelesai: string;

  @Column({ name: 'nama_dinas' })
  namaDinas: string;

  @Column({ name: 'optimis', nullable: true })
  optimis: string;

  @Column({ name: 'pendelegasian', nullable: true })
  pendelegasian: string;

  @Column({ name: 'sotk', nullable: true })
  sotk: string;

  @Column({ name: 'ttd_digital' })
  ttdDigital: string;

  @Column({ name: 'tupoksi', nullable: true })
  tupoksi: string;
}
