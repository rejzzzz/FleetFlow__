import { Schema, model, Document } from 'mongoose'
import { TFreelanceDriver } from './freelance_driver.models'
import { TVehicle } from './vehicles.models'
import { TFleetDriver } from './fleet_driver.models'
import { TRecurringSchedule } from './recurring_schedule.models'

export type TTrip = Document & {
    startLocation: string
    endLocation: string
    fare: number
    driver: TFreelanceDriver[] | TFleetDriver[]
    vehicleNeeded: TVehicle
    tripType: string
    recurringSchedule: TRecurringSchedule
    createdAt: Date
    updatedAt: Date
}
