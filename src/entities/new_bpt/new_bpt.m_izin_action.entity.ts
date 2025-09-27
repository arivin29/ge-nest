import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'm_izin_action', schema: 'new_bpt' })
export class NewBptMIzinAction {
  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @PrimaryColumn({ name: 'id_action' })
  idAction: number;

  @Column({ name: 'keterangan' })
  keterangan: string;

  @Column({ name: 'nama' })
  nama: string;

  @Column({ name: 'no_urut' })
  noUrut: number;

  @Column({ name: 'updated_at', nullable: true })
  updatedAt: string;
}
