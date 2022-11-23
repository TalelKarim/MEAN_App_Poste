import express, { application } from 'express';
import mongoose  from 'mongoose';
import dotEnv from 'dotenv';
import cors from 'cors';
import  agentRouter from './routes/agent.route.js';
import  depotRouter from './routes/depot.route.js';
import  clientRouter from './routes/client.route.js';
import  regionRouter from './routes/region.route.js';
import  serviceRouter from './routes/service.route.js';
import  bureauRouter from './routes/bureau.route.js';

import path from 'path'
import fs from 'fs'
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotEnv.config();
const app = express();

app.use(express.json());
app.use(cors());

app.use('/agent', agentRouter);
app.use('/client',clientRouter);
app.use('/bureau',bureauRouter);
app.use('/service',serviceRouter);
app.use('/region',regionRouter);
app.use('/depot',depotRouter);


const port = process.env.PORT || 8800
// Database connection 
mongoose.connect(process.env.CONNNECTION_STRING)
.then( () => {
    app.listen(port, (req,res) => {
        console.log(`app listening on port ${port}`)
    })
} )
.catch( (err) => {
    console.log(err.stack)
    process.exit(1)
})


