import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PelangganContract } from 'src/entities/pelanggan';
import { BaseService } from 'src/common/base/base.service';

            import { smartQueryEngineJoinMode,smartQueryRawJoinMode,SmartQueryInput } from 'src/common/helpers/smart-query-engine-join-mode';
            import { PelangganContractDto } from 'src/dto/pelanggan/pelanggan.contract.dto';
            
 
@Injectable()
export class ContractService extends BaseService<PelangganContract> {
    constructor(
        @InjectRepository(PelangganContract, 'pelanggan')
        repo: Repository<PelangganContract>,
    ) {
        super(repo);
    }


 


    async findAllSmart(query: SmartQueryInput) {
    // return smartQueryEngineJoinMode(this.repo, 'e', query,PelangganContractDto);
    return smartQueryRawJoinMode(this.repo, 'e', query,PelangganContractDto);
    }
 
}
