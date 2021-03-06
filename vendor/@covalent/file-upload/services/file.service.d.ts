import { Observable } from 'rxjs/Observable';
export interface IUploadOptions {
    url: string;
    method: 'post' | 'put';
    file: File;
    headers?: {
        [key: string]: string;
    };
}
export declare class TdFileService {
    private _progressSubject;
    private _progressObservable;
    /**
     * Gets progress observable to keep track of the files being uploaded.
     * Needs to be supported by backend.
     */
    progress: Observable<number>;
    constructor();
    /**
     * params:
     * - options: IUploadOptions {
     *     url: string,
     *     method: 'post' | 'put',
     *     file: File,
     *     headers?: {[key: string]: string}
     * }
     *
     * Uses underlying [XMLHttpRequest] to upload a file to a url.
     * Will be depricated when angular2 fixes [Http] to allow [FormData] as body.
     */
    upload(options: IUploadOptions): Observable<any>;
}
