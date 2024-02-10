//import api module here
import {Hono} from "hono";
import {cors} from 'hono/cors'
import auth from "./auth";

const api = new Hono()
api.use(cors())

//import more modules here
api.route('/auth', auth)
export default api
