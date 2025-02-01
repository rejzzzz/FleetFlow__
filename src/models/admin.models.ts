import { Schema, model, Document } from 'mongoose'
import { TFleetOwner } from './fleet_owner.models'
import { TFreelanceDriver } from './freelance_driver.models'
import { TCustomer } from './customer.models'

export type TAdmin = Document & {
    fleetOwners: TFleetOwner[]
    freelanceDrivers: TFreelanceDriver[]
    customers: TCustomer[]
    createdAt: Date
    updatedAt: Date
}
