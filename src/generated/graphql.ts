export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type EnumResolverSignature<T, AllowedValues = any> = { [key in keyof T]?: AllowedValues };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };


export type Scalars = {
    ID: number;
    String: String;
    Boolean: boolean;
    Int: number;
    Float: number;
    DateTime: any;
  };
  

export type TakenLesson =
{
    Id: Scalars['ID'];
    Subject: Scalars['Int'];
    Hours: Scalars['Float'];
    Status?: Maybe<Scalars['String']>;
    Date: Scalars['String'];
    TotalFee: Scalars['Float'];
    TotalPay: Scalars['Float'];
    StudentId: Scalars['ID'];
}

export type Lesson =
{
    Id: Scalars['ID'];
    Subject: Scalars['Int'];
    Day: Scalars['Int'];
    IsALevel: Scalars['Boolean'];
    IsWeekend: Scalars['Boolean'];
    SingleFee: Scalars['Float'];
    SinglePay: Scalars['Float'];
    GroupFee: Scalars['Float'];
    GroupPay: Scalars['Float'];
}

export type Parent =
{
    Id: Scalars['ID'];
    FirstName: Scalars['String'];
    LastName: Scalars['String'];
    Email: Scalars['String'];
}

export type Student =
{
    Id: Scalars['ID'];
    FirstName: Scalars['String'];
    LastName: Scalars['String'];
    ParentId: Scalars['ID'];
}

export type Teacher =
{
    Id: Scalars['ID'];
    FirstName: Scalars['String'];
    LastName: Scalars['String'];
    OrganisationId: Scalars['ID'];
}