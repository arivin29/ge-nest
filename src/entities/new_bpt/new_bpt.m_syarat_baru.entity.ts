import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'm_syarat_baru', schema: 'new_bpt' })
export class NewBptMSyaratBaru {
  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @PrimaryColumn({ name: 'id_syarat_baru' })
  idSyaratBaru: number;

  @Column({ name: 'syarat' })
  syarat: string;

  @Column({ name: 'updated_at', nullable: true })
  updatedAt: string;
}
