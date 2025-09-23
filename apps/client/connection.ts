import * as SftpClient from 'ssh2-sftp-client'
import config from './config'
import * as fs from 'fs'

export const connect = async () => {
    const sftp = new SftpClient()
    const connectionConfig = {
        username: config.sftp.username,
        host: config.sftp.host,
        port: config.sftp.port,
        privateKey: fs.readFileSync('/ssh/id_ed25519')
    }
    
    await sftp.connect(connectionConfig)
    return sftp
}

