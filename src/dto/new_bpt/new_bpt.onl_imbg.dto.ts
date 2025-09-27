import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptOnlImbgDto {
  @ApiProperty({ required: true })
  idIzin: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idOnlImbg: number; // PK

  @ApiProperty({ required: true })
  jml: number;

  @ApiProperty({ required: true })
  kondisiFisik: string;

  @ApiProperty({ required: true })
  luasTanah: string;

  @ApiProperty({ required: true })
  rab: number;

  @ApiProperty({ required: true })
  statusTanah: string;
}
