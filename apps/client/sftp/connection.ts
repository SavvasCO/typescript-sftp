import * as SftpClient from 'ssh2-sftp-client'
import config from '../config'

export const connect = async (privateKey: string) => {
    const sftp = new SftpClient()
    
    const connectionConfig = {
        username: config.sftp.username,
        host: config.sftp.host,
        port: config.sftp.port,
        privateKey: privateKey
    }
    
    await sftp.connect(connectionConfig)
    return sftp
}

