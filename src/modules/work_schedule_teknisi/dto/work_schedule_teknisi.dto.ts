import { ApiProperty } from "@nestjs/swagger";
import { IsOptional } from "class-validator";

export class WorkScheduleTeknisiDto {
  @ApiProperty({ required: true })
  
  idScheduleTeknisi: string;
  @ApiProperty({ required: true })
  
  idSchedule: string;
  @ApiProperty({ required: true })
  
  idTeknisi: string;
  @ApiProperty({ required: true })
  
  namaTeknisi: string;
  @ApiProperty({ required: false })
  @IsOptional()
  peran: string;
  @ApiProperty({ required: false })
  @IsOptional()
  catatan: string;
  @ApiProperty({ required: false })
  @IsOptional()
  createdAt: Date;
}
