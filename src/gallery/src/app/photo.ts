import { IPhoto } from "./iphoto";

export class Photo implements IPhoto {
    _id: string;
    filename: string;
    type: string;
    title: string;
    description: string;
    location: string;
    people: string;
    datetime: string;
    comment: string;
    path: string;

    constructor(){
        this._id = "";
        this.filename = "";
        this.type = "";
        this.title = "";
        this.description = "";
        this.location = "";
        this.people = "";
        this.datetime = "";
        this.comment = "";
        this.path = "";
    }
    
    populate(data: IPhoto)
    {
        let result = new Photo();
        result._id = data._id;
        result.filename = data.filename;
        result.type = data.type;
        result.title = data.title;
        result.description = data.description;
        result.location = data.location;
        result.people = data.people;
        result.datetime = data.datetime;
        result.comment = data.comment;
        result.path = data.path;
        return result;
    }

    getImgSrc(){
        return `http://localhost:3000/api/v1/files/download/${this.filename}`;
    }
}
