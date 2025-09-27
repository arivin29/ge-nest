import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptOnlOsslptksDto {
  @ApiProperty({ required: true })
  idIzin: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idOnlOsslptks: number; // PK

  @ApiProperty({ required: false })
  @IsOptional()
  jenisProgram: string;

  @ApiProperty({ required: false })
  @IsOptional()
  nib: string;
}
