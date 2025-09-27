import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptSkIzinSitgDto {
  @ApiProperty({ required: true })
  idIzinSk: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idSkIzinSitg: number; // PK

  @ApiProperty({ required: true })
  noPertek: string;

  @ApiProperty({ required: true })
  rekomAsos: string;

  @ApiProperty({ required: false })
  @IsOptional()
  tglPertek: string;
}
