import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'part_category', schema: 'erp_amims' })
export class AmimsPartCategory {
  @Column({ name: 'category', nullable: true })
  category: string;

  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ name: 'description_cat', nullable: true })
  descriptionCat: string;

  @PrimaryColumn({ name: 'id_part_category' })
  idPartCategory: string;

  @Column({ name: 'is_deleted', nullable: true })
  isDeleted: number;

  @Column({ name: 'parent_cat', nullable: true })
  parentCat: number;

  @Column({ name: 'updated_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: string;
}
