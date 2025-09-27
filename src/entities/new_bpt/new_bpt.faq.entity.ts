import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'faq', schema: 'new_bpt' })
export class NewBptFaq {
  @Column({ name: 'answer' })
  answer: string;

  @PrimaryColumn({ name: 'id_faq' })
  idFaq: number;

  @Column({ name: 'question' })
  question: string;

  @Column({ name: 'tgl', default: () => 'CURRENT_TIMESTAMP' })
  tgl: string;
}
