import { Schema, model, Document } from 'mongoose'
import { TFleet } from './fleet.models'

export type TFleetOwner = Document & {
    name: string
    email: string
    phoneNumber: string
    fleetId: number
    subscriptionType: string
    fleetDetails: TFleet[]
    createdAt: Date
    updatedAt: Date
}
