import { Schema, model, Document } from 'mongoose'

export type TRecurringSchedule = Document & {
    startDate: Date
    endDate: Date
    frequency: number
    unit: string
    createdAt: Date
    updatedAt: Date
}
