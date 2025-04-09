import { ApiProperty } from "@nestjs/swagger";
import { IsOptional } from "class-validator";

export class ClientContactDto {
  @ApiProperty({ required: true })
  
  idClientContact: string;
  @ApiProperty({ required: true })
  
  idClient: string;
  @ApiProperty({ required: false })
  @IsOptional()
  namaContact: string;
  @ApiProperty({ required: false })
  @IsOptional()
  email: string;
  @ApiProperty({ required: false })
  @IsOptional()
  telepon: string;
  @ApiProperty({ required: false })
  @IsOptional()
  jabatan: string;
  @ApiProperty({ required: false })
  @IsOptional()
  divisi: string;
  @ApiProperty({ required: false })
  @IsOptional()
  isPrimary: boolean;
  @ApiProperty({ required: false })
  @IsOptional()
  catatan: string;
  @ApiProperty({ required: false })
  @IsOptional()
  createdAt: Date;
  @ApiProperty({ required: false })
  @IsOptional()
  updatedAt: Date;
}
