import { uploadToSftp } from "./service"

async function uploadToGovSkillsSftpServer(){
    await uploadToSftp()
}

uploadToGovSkillsSftpServer()