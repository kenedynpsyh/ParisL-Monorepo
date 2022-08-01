type MethodType = 'post' | 'put' | 'delete' | 'get';

export interface HttpStateInterface {
  url: string;
  method: MethodType;
  body?: unknown;
  authenticate?: boolean;
}
