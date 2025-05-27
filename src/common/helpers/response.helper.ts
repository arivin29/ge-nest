import { HttpException } from "@nestjs/common";

export class ApiResponseHelper {
    static success(
        data: any,
        mode: 'list' | 'get' | 'create' | 'update' | 'delete' = 'get',
        pesan?: string,
        total?: number,
        statusCode?: number,
    ) {
        const code = statusCode ?? (mode === 'create' ? 201 : 200);
        const defaultMessages = {
            list: 'Data berhasil diambil',
            get: 'Data ditemukan',
            create: 'Data berhasil ditambahkan',
            update: 'Data berhasil diperbarui',
            delete: 'Data berhasil dihapus',
        };

        const response: any = {
            code,
            data,
            pesan: pesan ?? defaultMessages[mode],
        };

        if (mode === 'list') {
            response.total = total ?? (Array.isArray(data) ? data.length : 0);
        }

        return response;
    }

    static failed(
        data: any = null,
        pesan = 'Terjadi kesalahan',
        code = 400,
        errorDetail?: any,
    ) {
        const response: any = {
            code,
            data,
            pesan,
        };

        // Tampilkan error hanya saat development
        if (errorDetail && process.env.NODE_ENV !== 'production') {
            response.error = typeof errorDetail === 'string' ? errorDetail : errorDetail?.message;
        }

        throw new HttpException(response, code);
        // return response;
    }
}
