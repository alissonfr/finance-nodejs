import express from "express";
import accountRoutes from "./driver/routes/accountRoutes";
import authRoutes from "./driver/routes/authRoutes";

const app = express();
app.use(express.json());

app.use('/accounts', accountRoutes);
app.use('/auth', authRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));