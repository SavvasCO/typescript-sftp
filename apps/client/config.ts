const env = process.env

const config = {
    sftp: {
        host: env.SFTP_HOST ?? 'sftp',
        port: env.SFTP_PORT ? parseInt(env.SFTP_PORT) : 22,
        username: env.SFTP_USERNAME ?? 'user',
        password: env.SFTP_PASSWORD ?? 'password1'
    }
}

export default config