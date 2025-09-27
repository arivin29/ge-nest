import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'sk_izin_ipsmpswasta', schema: 'new_bpt' })
export class NewBptSkIzinIpsmpswasta {
  @Column({ name: 'id_izin_sk' })
  idIzinSk: number;

  @PrimaryColumn({ name: 'id_sk_izin_ipsmpswasta' })
  idSkIzinIpsmpswasta: number;

  @Column({ name: 'memperhatikan', nullable: true })
  memperhatikan: string;

  @Column({ name: 'nama_lembaga' })
  namaLembaga: string;

  @Column({ name: 'nama_smp' })
  namaSmp: string;

  @Column({ name: 'nama_yayasan' })
  namaYayasan: string;

  @Column({ name: 'no_bap' })
  noBap: string;

  @Column({ name: 'no_barp' })
  noBarp: string;

  @Column({ name: 'no_rekom' })
  noRekom: string;

  @Column({ name: 'no_sk_lama', nullable: true })
  noSkLama: string;

  @Column({ name: 'perihal', nullable: true })
  perihal: string;

  @Column({ name: 'tgl_bap', nullable: true })
  tglBap: string;

  @Column({ name: 'tgl_barp', nullable: true })
  tglBarp: string;

  @Column({ name: 'tgl_rekom', nullable: true })
  tglRekom: string;

  @Column({ name: 'tgl_sk_lama', nullable: true })
  tglSkLama: string;
}
