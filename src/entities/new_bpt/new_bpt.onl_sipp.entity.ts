import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_sipp', schema: 'new_bpt' })
export class NewBptOnlSipp {
  @Column({ name: 'berlaku_str' })
  berlakuStr: string;

  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_sipp' })
  idOnlSipp: number;

  @Column({ name: 'nama_sarana' })
  namaSarana: string;

  @Column({ name: 'no_ppni' })
  noPpni: string;

  @Column({ name: 'nomor_str' })
  nomorStr: string;
}
