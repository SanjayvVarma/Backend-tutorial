import dbConnection from "./database/dbConnection.js";
import { config } from "dotenv";

config({path:"./.env"})

dbConnection()