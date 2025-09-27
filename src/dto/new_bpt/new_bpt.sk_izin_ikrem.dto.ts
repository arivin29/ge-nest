import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptSkIzinIkremDto {
  @ApiProperty({ required: true })
  agamaJenazah: string;

  @ApiProperty({ required: true })
  idIzinSk: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idSkIzinIkrem: number; // PK

  @ApiProperty({ required: true })
  jkJenazah: string;

  @ApiProperty({ required: false })
  @IsOptional()
  jkPemohon: string;

  @ApiProperty({ required: true })
  lokKremasi: string;

  @ApiProperty({ required: true })
  namaJenazah: string;

  @ApiProperty({ required: true })
  noSurat: string;

  @ApiProperty({ required: true })
  tglKermasi: string;

  @ApiProperty({ required: true })
  tglReg: string;

  @ApiProperty({ required: true })
  tglSrt: string;
}
