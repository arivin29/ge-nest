import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptTIzinArsipDto {
  @ApiProperty({ required: false })
  @IsOptional()
  box: string;

  @ApiProperty({ required: false })
  @IsOptional()
  createdAt: string;

  @ApiProperty({ required: false })
  @IsOptional()
  idIzin: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idIzinArsip: number; // PK

  @ApiProperty({ required: false })
  @IsOptional()
  keterangan: string;

  @ApiProperty({ required: false })
  @IsOptional()
  rak: string;

  @ApiProperty({ required: false })
  @IsOptional()
  sampul: string;

  @ApiProperty({ required: false })
  @IsOptional()
  updatedAt: string;
}
