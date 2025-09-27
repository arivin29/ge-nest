import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'sk_izin_nislhsjb', schema: 'new_bpt' })
export class NewBptSkIzinNislhsjb {
  @Column({ name: 'golongan' })
  golongan: string;

  @Column({ name: 'id_izin_sk' })
  idIzinSk: number;

  @PrimaryColumn({ name: 'id_sk_izin_nislhsjb' })
  idSkIzinNislhsjb: number;

  @Column({ name: 'nama_penanggungjawab' })
  namaPenanggungjawab: string;

  @Column({ name: 'perubahan2' })
  perubahan2: string;

  @Column({ name: 'perubahanj' })
  perubahanj: string;
}
