import User from '../models/user.model'
import Org from '../models/org.model'

export async function addUserToOrg(orgID, userID) {
    try {
        const org = await Org.checkExistingField('_id', orgID)
        
        await org.users.push(userID)
        await org.save()

        return true
    }
    catch (err) {
        throw new Error(err.message)
    }
}