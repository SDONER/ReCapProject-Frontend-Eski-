import { Brand } from "./brand";
import { ResponseModel } from "./responseModel";

export interface BrandReponseModel extends ResponseModel{
    data:Brand[]
}