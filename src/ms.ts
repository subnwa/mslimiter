export type Intervel = number | "string" | "Limiter" | "minute" | "hour" | "day";

export type Limiter = {
    limit: number
  };



export class ms {
    bucket: string;
    seconds: number;

    constructor(bucket: string, seconds: number) {
            this.bucket = bucket;
            this.seconds = seconds;
        }
}
