import { Schema, model, Document } from 'mongoose'
import { TDocuments } from './documents.models'
import { TMaintaineceDetails } from './maintainence_details.models'

export type TVehicle = Document & {
    fleetId: number
    registrationNumber: string
    model: string
    yearOfManufacture: number
    vehicleType: string
    documents: TDocuments[]
    status: string
    mileage: number
    carryCapacity: number
    maintaineceHistory: TMaintaineceDetails[]
    createdAt: Date
    updatedAt: Date
}

const vehicleSchema = new Schema({})
