import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'migrations', schema: 'new_bpt' })
export class NewBptMigrations {
  @Column({ name: 'batch' })
  batch: number;

  @PrimaryColumn({ name: 'id' })
  id: number;

  @Column({ name: 'migration' })
  migration: string;
}
