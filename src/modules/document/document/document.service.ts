import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DocumentDocument } from 'src/entities/document';
import { BaseService } from 'src/common/base/base.service'; 
import { v4 as uuidv4 } from 'uuid';
import * as path from 'path';
import * as fs from 'fs';
import { Request } from 'express';
import { DocumentDocumentDto } from 'src/dto/document/document.document.dto';

@Injectable()
export class DocumentService extends BaseService<DocumentDocument> {
    constructor(
        @InjectRepository(DocumentDocument, 'document')
        repo: Repository<DocumentDocument>,
    ) {
        super(repo);
    }

    async uploadDocument(file: Request['file'], body: Partial<DocumentDocument>) {


        const allowedMimeTypes = [
            'image/png', 'image/jpeg', 'image/jpg', 'image/webp',
            'application/pdf',
            'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
            'application/vnd.ms-excel',
            'application/msword',
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
        ];
        if (!file) {
            throw new BadRequestException('Tidak ada file yang diupload.');
        }

        if (!allowedMimeTypes.includes(file.mimetype)) {
            throw new BadRequestException('File type tidak didukung.');
        }

        const id = uuidv4();
        const fileExt = path.extname(file.originalname);
        const fileName = `${id}${fileExt}`;

        const forModule = body.forModule || 'unknown';
        const forModuleId = body.forModuleId || 'unknown';

        const saveDir = path.join('/mnt', 'uploads', 'documents', forModule, forModuleId);
        const savePath = path.join(saveDir, fileName);

        if (!fs.existsSync(saveDir)) {
            fs.mkdirSync(saveDir, { recursive: true });
        }

        fs.writeFileSync(savePath, file.buffer);

        const relativePath = path.join(forModule, forModuleId, fileName);
        let dic: any = {
            idDocument: id,
            createdAt: new Date().toISOString().slice(0, 19).replace('T', ' ').slice(0, 19).replace('T', ' '), 
            fileName: file.originalname,
            fileExt: fileExt.replace('.', ''),
            fileLocation: `uploads/documents/${relativePath}`, 
            ...body,
        }
        const newDoc = this.repo.create(dic);

        await this.repo.save(newDoc);
        return {
            success: true,
            message: 'Upload berhasil',
            data: newDoc,
        };
    }
}
