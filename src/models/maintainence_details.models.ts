import { Schema, model, Document } from 'mongoose'

export type TMaintaineceDetails = Document & {
    fleetId: number
    maintaineceDetails: string
    cost: number
    startDate: Date
    endDate: Date
    serviceProvider: string
    createdAt: Date
    updatedAt: Date
}
