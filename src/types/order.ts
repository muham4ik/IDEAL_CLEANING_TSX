interface Create {
  amount: string;
  client_full_name: string;
  client_phone_number: string;
  service_id: string;
}

export interface Request {
  create: (data: Create) => unknown;
}

interface Delete {
  id: number;
}

export interface Response {
  delete: (data: Delete) => unknown;
}
