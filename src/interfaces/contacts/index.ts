export interface IContactRequest {
    name: string
    email: string
    phone: string
    age: number
}

export interface IContactResponse {
    id: string
    name: string
    email: string
    phone: string
    age: number
    createdAt: Date
}

export interface IContactUpdate {
    name?: string
    email?: string
    phone?: string
    age?: number
}