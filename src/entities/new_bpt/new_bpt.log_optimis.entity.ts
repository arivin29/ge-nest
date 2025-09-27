import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'log_optimis', schema: 'new_bpt' })
export class NewBptLogOptimis {
  @PrimaryColumn({ name: 'id_log_optimis' })
  idLogOptimis: number;

  @Column({ name: 'log' })
  log: string;

  @Column({ name: 'tangal', default: () => 'CURRENT_TIMESTAMP' })
  tangal: string;
}
