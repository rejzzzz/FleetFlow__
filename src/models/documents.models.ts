import { Schema, model, Document } from 'mongoose'

export type TDocuments = Document & {
    type: string
    numberAssociated: string
    expiryDate: Date
    documentUrl: string
    createdAt: Date
    updatedAt: Date
}
