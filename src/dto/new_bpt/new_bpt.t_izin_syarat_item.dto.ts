import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptTIzinSyaratItemDto {
  @ApiProperty({ required: false })
  @IsOptional()
  acc: number;

  @ApiProperty({ required: false })
  @IsOptional()
  createdAt: string;

  @ApiProperty({ required: true })
  idIzin: number;

  @ApiProperty({ required: true })
  idIzinJenisSyarat: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idIzinSyaratItem: number; // PK

  @ApiProperty({ required: false })
  @IsOptional()
  updatedAt: string;

  @ApiProperty({ required: false })
  @IsOptional()
  uplDoc: number;
}
