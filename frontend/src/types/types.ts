import type {
  ButtonHTMLAttributes,
  HTMLAttributes,
  InputHTMLAttributes,
  TextareaHTMLAttributes,
} from "react";

export interface QueryParams extends Record<string, any> {}

export interface PathParams {
  path: string;
  key?: string | number;
  queryParams?: QueryParams | string;
}

export interface ApiFuncParams {
  path: string;
  key?: string | number;
  queryParams?: QueryParams;
  data?: {};
  log?: string;
  auth?: boolean;
}

export interface DivProps extends HTMLAttributes<HTMLDivElement> {}
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}
export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}
export interface TextAreaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

export interface Project {
  name: string;
  description: string;
  tags: string[];
  longDescription: string;
  category: ProjectCategory;
}

export type ProjectCategory = "Full Stack" | "Desktop" | "Game";
