import { Schema, model, Document } from 'mongoose'
import { TVehicle } from './vehicles.models'
import { TMaintaineceDetails } from './maintainence_details.models'
import { TFleetDriver } from './fleet_driver.models'

export type TFleet = Document & {
    fleetId: string
    vehicle: TVehicle[]
    maintainenceHistory: TMaintaineceDetails
    driverDetails: TFleetDriver[]
    createdAt: Date
    updatedAt: Date
}
