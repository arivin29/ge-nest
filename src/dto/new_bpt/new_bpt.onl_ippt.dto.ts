import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptOnlIpptDto {
  @ApiProperty({ required: false })
  @IsOptional()
  alatmesin: number;

  @ApiProperty({ required: false })
  @IsOptional()
  bangunan: number;

  @ApiProperty({ required: true })
  idIzin: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idOnlIppt: number; // PK

  @ApiProperty({ required: true })
  jumlahBangunan: number;

  @ApiProperty({ required: true })
  jumlahLantai: number;

  @ApiProperty({ required: true })
  kondisiFisik: string;

  @ApiProperty({ required: true })
  luasTanah: number;

  @ApiProperty({ required: true })
  namaPemilikTanah: string;

  @ApiProperty({ required: true })
  rencanaLuas: number;

  @ApiProperty({ required: true })
  rencanaPenggunaan: string;

  @ApiProperty({ required: true })
  rencanaTinggi: number;

  @ApiProperty({ required: true })
  statusTanah: string;

  @ApiProperty({ required: false })
  @IsOptional()
  tanah: number;

  @ApiProperty({ required: false })
  @IsOptional()
  tkp: number;

  @ApiProperty({ required: false })
  @IsOptional()
  tkw: number;
}
