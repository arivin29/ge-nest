import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptOnlKkprDto {
  @ApiProperty({ required: false })
  @IsOptional()
  alatmesin: number;

  @ApiProperty({ required: true })
  idIzin: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idOnlKkpr: number; // PK

  @ApiProperty({ required: false })
  @IsOptional()
  judulKbli: string;

  @ApiProperty({ required: true })
  jumlahBangunan: number;

  @ApiProperty({ required: true })
  jumlahLantai: number;

  @ApiProperty({ required: false })
  @IsOptional()
  kodeKbli: string;

  @ApiProperty({ required: true })
  kondisiFisik: string;

  @ApiProperty({ required: true })
  koordinat: string;

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
}
