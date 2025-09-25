import { uploadToSftp } from "./sftp/service"
import { downloadBlob, getTableRowValue } from "./azure/service"
import config from "./config"
async function run(){
    
    await downloadBlob()
    await uploadToSftp()

    const emailIds: string[] = (await getTableRowValue('emailIds')).split(',')

    console.log(`Sending the file to these emails: ${emailIds.join(', ')}...`)
}

run()