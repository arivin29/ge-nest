import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptSkIzinIpkapDto {
  @ApiProperty({ required: false })
  @IsOptional()
  almakam: string;

  @ApiProperty({ required: true })
  blok: string;

  @ApiProperty({ required: true })
  idIzinSk: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idSkIzinIpkap: number; // PK

  @ApiProperty({ required: true })
  jmlKav: string;

  @ApiProperty({ required: true })
  nomor: string;

  @ApiProperty({ required: true })
  tglNo: string;

  @ApiProperty({ required: true })
  tglReg: string;
}
