
import { ApiProperty } from '@nestjs/swagger';
import { ContractSiteDto } from './contract_site.dto';
import { ContractDto } from '../../contract/dto/contract.dto';
import { ClientSiteDto } from 'src/modules/client_site/dto/client_site.dto';

export class ContractSiteReportDto extends ContractSiteDto {
    @ApiProperty({ type: ContractDto })
    contract: ContractDto;


    @ApiProperty({ type: ClientSiteDto })
    clientSite: ClientSiteDto;
}
