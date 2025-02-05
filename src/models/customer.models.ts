import { Schema, model, Document } from 'mongoose'
import { TTrip } from './trip.models'

export type TCustomer = Document & {
    name: string
    email: string
    phoneNumber: string
    profilePhotoUrl: string
    currentTrip: TTrip[]
    tripHistory: TTrip[]
    createdAt: Date
    updatedAt: Date
}
