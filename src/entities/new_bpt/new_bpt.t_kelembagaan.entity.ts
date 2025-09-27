import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 't_kelembagaan', schema: 'new_bpt' })
export class NewBptTKelembagaan {
  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @PrimaryColumn({ name: 'id' })
  id: number;

  @Column({ name: 'kelembagaan' })
  kelembagaan: string;

  @Column({ name: 'updated_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: string;
}
