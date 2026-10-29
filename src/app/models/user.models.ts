export type UserRole = 'customer' | 'admin';

export type Address = {
  street: string;
  buildingNumber: string;
  apartmentNumber?: string;
  postalCode: string;
  city: string;
};

export type UserAccountBase = {
  id: string;
  name: string;
  email: string;
  password?: string;
  phone?: string;
};

export type CustomerAccount = UserAccountBase & {
  role: 'customer';
  deliveryAddress: Address;
};

export type AdminAccount = UserAccountBase & {
  role: 'admin';
};

export type UserAccount = CustomerAccount | AdminAccount;