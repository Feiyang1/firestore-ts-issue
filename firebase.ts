import * as app from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

// TODO - Uncomment firestore
import 'firebase/firestore'

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
}

class Firebase {
    private _auth: any
    db: any
    firestore: any

    constructor() {
        app.initializeApp(config)
        this._auth = app.auth()
        this.db = app.database()

        // TODO - Uncomment firestore
        console.log('bf creating firestore');
        this.firestore = app.firestore();
        this.firestore.ensureClientConfigured();
    }

    authenticate = async (email: string, password: string): Promise<void> => {
        if (this.isAuthenticated()) return
        try {
           console.log('Do authentication...', email, password)
        } catch (e) {
            console.error('[FIREBASE]: Error authenticating: ', e)
        }
    }

    isAuthenticated = (): boolean => !!this._auth.currentUser
}
export default new Firebase()
