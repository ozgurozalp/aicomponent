import type { User as AltogicUser } from "altogic";

export interface User extends AltogicUser {
  credits: number;
}

export type ProjectHistory = {
  id: string;
  prompt: string;
  ready: boolean;
  isSubProject: boolean;
};
export interface Product {
  id: string;
  object: string;
  active: boolean;
  billing_scheme: string;
  created: number;
  currency: "usd" | string;
  custom_unit_amount: null;
  livemode: boolean;
  lookup_key: string | null;
  metadata: {
    description: string;
    info: string;
  };
  nickname: string;
  product: string;
  recurring: string | null;
  tax_behavior: string;
  tiers_mode: string | null;
  transform_quantity: string | null;
  type: string;
  unit_amount: number;
  unit_amount_decimal: string;
}

export interface Project {
  _id: string;
  content: string;
  name: string;
  deletedAt: string;
  result: string;
  rating: number;
  role: string;
  ratingText: string;
  user: string | User;
  createdAt: string;
  status: "draft" | "live";
  updatedAt: string;
  click: number;
  domains: Domain[];
}

export interface Domain {
  _id: string;
  updatedAt: string;
  createdAt: string;
  _parent: string;
  isPrimary: boolean;
  clickCount: number;
  status: DomainVerificationStatusProps;
  domain: string;
}

export interface Invoice {
  id: string;
  object: string;
  account_country: string;
  account_name: string;
  account_tax_ids: null | [];
  created: number;
  currency: string;
  livemode: boolean;
  paid: boolean;
  status: string;
  total: number;
  lines: {
    object: "list";
    data: {
      price: {
        id: "price_1NfeLpFctreK8fHPFa5RIeKt";
        object: "price";
        active: true;
        billing_scheme: "per_unit";
        created: number;
        currency: "usd" | string;
        livemode: false;
        lookup_key: null;
        metadata: {
          description: string;
          info: string;
        };
        nickname: "100";
      };
      quantity: 1;
    }[];
  };
  hosted_invoice_url: string;
  invoice_pdf: string;
}

export type DomainVerificationStatusProps =
  | "Valid Configuration"
  | "Invalid Configuration"
  | "Pending Verification"
  | "Domain Not Found"
  | "Unknown Error";

export interface DomainResponse {
  name: string;
  apexName: string;
  projectId: string;
  redirect?: string | null;
  redirectStatusCode?: (307 | 301 | 302 | 308) | null;
  gitBranch?: string | null;
  updatedAt?: number;
  createdAt?: number;
  verified: boolean;
  verification?: {
    type: string;
    domain: string;
    value: string;
    reason: string;
  }[];
}

export interface DomainInfo {
  configured: boolean;
  name: string;
  apexName: string;
  projectId: string;
  redirect?: string | null;
  redirectStatusCode?: (307 | 301 | 302 | 308) | null;
  gitBranch?: string | null;
  updatedAt?: number;
  createdAt?: number;
  verified: boolean;
  verification?: {
    type: string;
    domain: string;
    value: string;
    reason: string;
  }[];
}
