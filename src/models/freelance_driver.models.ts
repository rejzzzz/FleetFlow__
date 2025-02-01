import { Schema, model, Document } from 'mongoose'
import { TVehicle } from './vehicles.models'
import { TMaintaineceDetails } from './maintainence_details.models'
import { TDocuments } from './documents.models'
import { TTrip } from './trip.models'

export type TFreelanceDriver = Document & {
    email: string
    phoneNumber: string
    name: string
    subscriptionType: string
    subscriptionValid: boolean
    vehicle: TVehicle[]
    maintainenceHistory: TMaintaineceDetails[]
    currentTrip: TTrip
    tripHistory: TTrip[]
    profilePictureUrl: string
    documents: TDocuments[]
    createdAt: Date
    updatedAt: Date
}
