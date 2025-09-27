import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptTLogHitDisdukDto {
  @ApiProperty({ required: false })
  @IsOptional()
  createdAt: string;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idTLogHitDisduk: number; // PK

  @ApiProperty({ required: true })
  ipUser: string;

  @ApiProperty({ required: true })
  ket: string;

  @ApiProperty({ required: false })
  @IsOptional()
  updatedAt: string;
}
