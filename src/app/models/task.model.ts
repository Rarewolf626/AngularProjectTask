
type GUID = string & { isGuid: true};
export class TaskModel {
    id: GUID;
    data: Date;
    titulo: string;
    descricao: string;
    finalizada: boolean;
    status: string;
    cor: string;
}