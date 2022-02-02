import {Appwrite} from "appwrite"

const app = new Appwrite()

app.setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_URL).setProject(process.env.NEXT_PUBLIC_APPWRITE_ID)


export {app}