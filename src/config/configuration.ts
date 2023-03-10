export default () => ({
    port: parseInt(process.env.PORT, 10) || 3000,
    database: {
        host: process.env.DATABASE_URL,
        port: Number(process.env.DATABASE_PORT),
        username: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.POSTGRES_DB,
    },
    keys: {
        jwtSecretKey: process.env.JWT_SECRET_KEY.replace(/\\n/gm, '\n'),
    },
    email: {
        host: process.env.EMAIL_HOST,
        secure: process.env.EMAIL_SECURE_MODE,
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
    }
});