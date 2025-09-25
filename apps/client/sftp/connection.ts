import * as SftpClient from 'ssh2-sftp-client'
import config from '../config'
import * as fs from 'fs'

export const connect = async (privateKey: string) => {
    const sftp = new SftpClient()
    console.log(`Private key: ${privateKey}`)

    const keyContent = fs.readFileSync(privateKey, 'utf8')

    console.log(keyContent)
    
    
    const connectionConfig = {
        username: config.sftp.username,
        host: config.sftp.host,
        port: config.sftp.port,
        privateKey: keyContent
    }
    
    await sftp.connect(connectionConfig)
    return sftp
}

