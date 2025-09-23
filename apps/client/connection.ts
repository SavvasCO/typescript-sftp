import * as SftpClient from 'ssh2-sftp-client'
import config from './config'

export const connect = async () => {
    const sftp = new SftpClient()
    const connectionConfig = {
        host: config.sftp.host,
        port: config.sftp.port,
        username: config.sftp.username,
        password: config.sftp.password
    }
    
    await sftp.connect(connectionConfig)
    return sftp
}

