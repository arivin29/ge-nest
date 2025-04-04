import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Perusahaan } from './entities/perusahaan.entity';

@Injectable()
export class PerusahaanService {
    constructor(
        @InjectRepository(Perusahaan)
        private repo: Repository<Perusahaan>,
    ) { }

    findAll() {
        return this.repo.find();
    }
}
