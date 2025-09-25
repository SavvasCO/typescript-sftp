import { connect } from './connection'
import { getTableRowValue } from '../azure/service'

export const uploadToSftp = async () => {
    const privateKey = await getTableRowValue('sftpKey')
    const sftp = await connect(privateKey)

    const localFilePath = 'test-file.txt'
    const remoteFilePath = `/upload/${localFilePath}`

    console.log(`Uploading ${localFilePath} to ${remoteFilePath}...`)
    await sftp.put(localFilePath, remoteFilePath)
    console.log(`File uploaded to ${remoteFilePath}`)

    sftp.end()
}