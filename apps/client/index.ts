import { uploadToSftp } from "./sftp/service"
import { downloadBlob, getTableRowValue } from "./azure/service"
import config from "./config"
async function uploadToGovSkillsSftpServer(){

    await downloadBlob()
    await uploadToSftp(config.azure.blob.downloadFilePath)

    const emailIds: string[] = (await getTableRowValue('emailIds')).split(',')

    console.log(`Sending the file to these emails: ${emailIds.join(', ')}...`)
}

uploadToGovSkillsSftpServer()