import { ApiProperty } from "@nestjs/swagger";
import { IsOptional } from "class-validator";

export class WorkScheduleDto {
  @ApiProperty({ required: true })
  
  idSchedule: string;
  @ApiProperty({ required: false })
  @IsOptional()
  idContractSite: string;
  @ApiProperty({ required: true })
  
  idContractSiteService: string;
  @ApiProperty({ required: true })
  
  tanggalRencana: string;
  @ApiProperty({ required: false })
  @IsOptional()
  tipeSchedule: string;
  @ApiProperty({ required: false })
  @IsOptional()
  statusSchedule: string;
  @ApiProperty({ required: false })
  @IsOptional()
  keterangan: string;
  @ApiProperty({ required: false })
  @IsOptional()
  createdBy: string;
  @ApiProperty({ required: false })
  @IsOptional()
  updatedBy: string;
  @ApiProperty({ required: false })
  @IsOptional()
  createdAt: Date;
  @ApiProperty({ required: false })
  @IsOptional()
  updatedAt: Date;
}
