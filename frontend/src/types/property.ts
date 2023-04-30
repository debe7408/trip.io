import { BaseError } from "./baseError";

export interface PropertyInfo extends BaseError {
  properties?: Property[];
}

export interface Property {
  name: string;
  description: string;
  type: string;
  country: string;
  city: string;
  address: string;
  price: number;
  amenities: {};
  safety_amenities: {};
  pictures: {};
  beds: number;
  guests: number;
  bathrooms: number;
  booking_status: boolean;
  id?: number;
  owner_id?: number;
}

export interface PropertyForm extends PropertyInfoForm {
  name: string;
  price: number;
  description: string;
  booking_status: boolean;
}

export interface PropertyInfoForm {
  type: string;
  location: {
    country: string;
    city: string;
    address: string;
  };
  size: {
    guests: number;
    beds: number;
    bathrooms: number;
  };
  amenities: string[];
  safety_amenities: string[];
  pictures?: {};
}
