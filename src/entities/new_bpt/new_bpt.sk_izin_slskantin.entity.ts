import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'sk_izin_slskantin', schema: 'new_bpt' })
export class NewBptSkIzinSlskantin {
  @Column({ name: 'id_izin_sk' })
  idIzinSk: number;

  @PrimaryColumn({ name: 'id_sk_izin_slskantin' })
  idSkIzinSlskantin: number;

  @Column({ name: 'nama_kantin' })
  namaKantin: string;

  @Column({ name: 'nama_penanggungjawab' })
  namaPenanggungjawab: string;
}
