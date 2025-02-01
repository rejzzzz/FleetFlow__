import { Schema, model, Document } from 'mongoose'
import { TDocuments } from './documents.models'
import { TTrip } from './trip.models'

export type TFleetDriver = Document & {
    name: string
    phoneNumber: string
    fleetId: string
    profilePhotoUrl: string
    documents: TDocuments[]
    isAvailable: boolean
    currentTrip: TTrip[]
    tripHistory: TTrip[]
    createdAt: Date
    updatedAt: Date
}
