import "reflect-metadata"
import express from "express"
import "express-async-errors";
import userRoutes from "./routes/user.routes";
import handleErrorMiddleware from "./middleware/handleError.middleware";
import sessionRoutes from "./routes/sessions.routes";
import contactsRoutes from "./routes/contacts.routes";


const app = express()
app.use(express.json())
app.use("/users", userRoutes);
app.use("/login", sessionRoutes);
app.use("/contacts", contactsRoutes);

app.use(handleErrorMiddleware);

export default app