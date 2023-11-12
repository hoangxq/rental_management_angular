import { roomStatus } from "../constants/status";
import { BaseResponse } from "./response";

export class RoomDto {
    id!: number;
    name!: string;
    type!: string;
    price!: number;
    roomStatus!: roomStatus;
    description!: string;
    buildingDto!: BuildingDto
}

export class RoomRequest {
    name!: string;
    type!: string;
    price!: number;
    status!: roomStatus;
    description!: string;
    buildingRequest!: BuildingRequest
}

export class BuildingRequest {
    name!: string;
    address!: string;
    description!: string;
}

export class BuildingDto {
    id!: number;
    name!: string;
    address!: string;
    description!: string;
}

export class ListRoomResponse implements BaseResponse {
    message!: string;
    data!: RoomDto[];

}

export class RoomResponse implements BaseResponse {
    message!: string;
    data!: RoomDto;
}